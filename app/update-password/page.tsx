import { redirect } from 'next/navigation';
import { getServerSupabase } from '@/lib/supabase-server';
import PasswordForm from './PasswordForm';

export default async function UpdatePassword({searchParams}:{searchParams:Promise<{code?:string;erro?:string}>}){
  const p=await searchParams;

  if(p.code){
    const supabase=await getServerSupabase();
    const {error}=await supabase.auth.exchangeCodeForSession(p.code);
    if(error) redirect('/update-password?erro=session');
    redirect('/update-password');
  }

  return <main className="assessment-shell">
    <div className="assessment-wrap" style={{maxWidth:500}}>
      <div className="assessment-brand"><div className="brand-mark">PV</div><span>Perfil & Vocacional</span></div>
      <div className="card intro-card" style={{marginTop:'8vh'}}>
        <p className="eyebrow">NOVA SENHA</p>
        <h1 style={{marginBottom:6}}>Crie sua nova senha</h1>
        <p className="muted" style={{marginTop:0}}>Use pelo menos 8 caracteres.</p>
        {p.erro==='session'&&<p style={{color:'#b34a3f'}}>O link expirou ou não é mais válido. Solicite uma nova redefinição de senha.</p>}
        <PasswordForm />
      </div>
    </div>
  </main>
}
