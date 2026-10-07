'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

function EyeIcon({open}:{open:boolean}){
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 4.2A10.8 10.8 0 0112 4c5.5 0 9 5.5 9 5.5a15.5 15.5 0 01-3.1 3.8M6.6 6.6C4.3 8 3 10 3 10s3.5 5.5 9 5.5c1 0 2-.2 2.8-.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 12s3.5-5.5 9-5.5S21 12 21 12s-3.5 5.5-9 5.5S3 12 3 12z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  );
}

export default function PasswordForm(){
  const router=useRouter();
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [message,setMessage]=useState('');
  const [ready,setReady]=useState(false);
  const [loading,setLoading]=useState(false);

  const supabase=createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(()=>{
    let mounted=true;

    async function prepareRecoverySession(){
      const hash=new URLSearchParams(window.location.hash.replace(/^#/,''));
      const accessToken=hash.get('access_token');
      const refreshToken=hash.get('refresh_token');

      if(accessToken&&refreshToken){
        const {error}=await supabase.auth.setSession({
          access_token:accessToken,
          refresh_token:refreshToken
        });

        if(!mounted) return;

        if(error){
          setMessage('O link de recuperação não é mais válido. Solicite um novo link.');
          setReady(false);
          return;
        }

        window.history.replaceState({},document.title,window.location.pathname+window.location.search);
        setReady(true);
        return;
      }

      const {data,error}=await supabase.auth.getSession();
      if(!mounted) return;

      if(error){
        setMessage('Não foi possível validar o link de recuperação.');
        setReady(false);
        return;
      }

      setReady(Boolean(data.session));
      if(!data.session){
        setMessage('O link de recuperação não foi validado. Solicite um novo link.');
      }
    }

    prepareRecoverySession();

    const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{
      if(!mounted) return;
      if(event==='PASSWORD_RECOVERY'||session){
        setReady(true);
        setMessage('');
      }
    });

    return ()=>{
      mounted=false;
      subscription.unsubscribe();
    };
  },[]);

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setMessage('');
    if(password.length<8){setMessage('A senha precisa ter pelo menos 8 caracteres.');return}
    if(password!==confirmPassword){setMessage('As senhas não coincidem.');return}

    setLoading(true);

    const {data:{session}}=await supabase.auth.getSession();
    if(!session){
      setMessage('A sessão de recuperação expirou. Solicite um novo link.');
      setReady(false);
      setLoading(false);
      return;
    }

    const {error}=await supabase.auth.updateUser({password});
    if(error){
      setMessage(error.message||'Não foi possível alterar a senha. Solicite um novo link e tente novamente.');
      setLoading(false);
      return;
    }

    await supabase.auth.signOut();
    router.replace('/login?senha=alterada');
    router.refresh();
  }

  const fieldStyle:React.CSSProperties={position:'relative'};
  const eyeStyle:React.CSSProperties={
    position:'absolute',right:14,top:'50%',transform:'translateY(-50%)',
    border:0,background:'transparent',padding:4,cursor:'pointer',
    color:'#60706d',display:'flex',alignItems:'center',justifyContent:'center'
  };

  return <form onSubmit={submit} className="grid">
    {!ready&&!message&&<p style={{color:'#6d7d79',marginTop:0}}>Validando o link de recuperação...</p>}
    {message&&<p style={{color:'#b34a3f'}}>{message}</p>}
    <div>
      <label className="label">Nova senha</label>
      <div style={fieldStyle}>
        <input className="input" style={{paddingRight:48}} type={showPassword?'text':'password'} value={password} onChange={e=>setPassword(e.target.value)} minLength={8} required disabled={!ready||loading}/>
        <button type="button" onClick={()=>setShowPassword(v=>!v)} aria-label={showPassword?'Ocultar nova senha':'Mostrar nova senha'} title={showPassword?'Ocultar senha':'Mostrar senha'} style={eyeStyle}>
          <EyeIcon open={showPassword}/>
        </button>
      </div>
    </div>
    <div>
      <label className="label">Confirmar nova senha</label>
      <div style={fieldStyle}>
        <input className="input" style={{paddingRight:48}} type={showConfirmPassword?'text':'password'} value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} minLength={8} required disabled={!ready||loading}/>
        <button type="button" onClick={()=>setShowConfirmPassword(v=>!v)} aria-label={showConfirmPassword?'Ocultar confirmação da senha':'Mostrar confirmação da senha'} title={showConfirmPassword?'Ocultar senha':'Mostrar senha'} style={eyeStyle}>
          <EyeIcon open={showConfirmPassword}/>
        </button>
      </div>
    </div>
    <button className="btn btn-primary" disabled={!ready||loading}>{loading?'Salvando...':'Salvar nova senha'}</button>
    {!ready&&<a href="/forgot-password" style={{textAlign:'center',color:'#174e4a',fontWeight:750,fontSize:13}}>Solicitar um novo link</a>}
  </form>
}
