'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

export default function PasswordForm(){
  const router=useRouter();
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [message,setMessage]=useState('');
  const [ready,setReady]=useState(false);
  const [loading,setLoading]=useState(false);

  const supabase=createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(()=>{
    let mounted=true;
    supabase.auth.getSession().then(({data})=>{
      if(mounted) setReady(Boolean(data.session));
    });
    const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{
      if(event==='PASSWORD_RECOVERY'||session){
        setReady(true);
      }
    });
    return ()=>{mounted=false;subscription.unsubscribe()};
  },[]);

  async function submit(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    setMessage('');
    if(password.length<8){setMessage('A senha precisa ter pelo menos 8 caracteres.');return}
    if(password!==confirmPassword){setMessage('As senhas não coincidem.');return}
    setLoading(true);
    const {error}=await supabase.auth.updateUser({password});
    if(error){
      setMessage('Não foi possível alterar a senha. Solicite um novo link e tente novamente.');
      setLoading(false);
      return;
    }
    await supabase.auth.signOut();
    router.replace('/login?senha=alterada');
    router.refresh();
  }

  return <form onSubmit={submit} className="grid">
    {!ready&&<p style={{color:'#6d7d79',marginTop:0}}>Validando o link de recuperação...</p>}
    {message&&<p style={{color:'#b34a3f'}}>{message}</p>}
    <div><label className="label">Nova senha</label><input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} minLength={8} required/></div>
    <div><label className="label">Confirmar nova senha</label><input className="input" type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} minLength={8} required/></div>
    <button className="btn btn-primary" disabled={!ready||loading}>{loading?'Salvando...':'Salvar nova senha'}</button>
    {!ready&&<a href="/forgot-password" style={{textAlign:'center',color:'#174e4a',fontWeight:750,fontSize:13}}>Solicitar um novo link</a>}
  </form>
}
