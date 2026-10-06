import { updatePassword } from './actions';

export default async function UpdatePassword({searchParams}:{searchParams:Promise<{erro?:string}>}){
  const p=await searchParams;
  return <main className="assessment-shell">
    <div className="assessment-wrap" style={{maxWidth:500}}>
      <div className="assessment-brand"><div className="brand-mark">PV</div><span>Perfil & Vocacional</span></div>
      <div className="card intro-card" style={{marginTop:'8vh'}}>
        <p className="eyebrow">NOVA SENHA</p>
        <h1 style={{marginBottom:6}}>Crie sua nova senha</h1>
        <p className="muted" style={{marginTop:0}}>Use pelo menos 8 caracteres.</p>
        {p.erro==='match'&&<p style={{color:'#b34a3f'}}>As senhas não coincidem.</p>}
        {p.erro==='short'&&<p style={{color:'#b34a3f'}}>A senha precisa ter pelo menos 8 caracteres.</p>}
        {p.erro==='session'&&<p style={{color:'#b34a3f'}}>O link expirou ou não é mais válido. Solicite uma nova redefinição de senha.</p>}
        {p.erro==='1'&&<p style={{color:'#b34a3f'}}>Não foi possível alterar a senha. Solicite um novo link e tente novamente.</p>}
        <form action={updatePassword} className="grid">
          <div><label className="label">Nova senha</label><input className="input" type="password" name="password" minLength={8} required/></div>
          <div><label className="label">Confirmar nova senha</label><input className="input" type="password" name="confirmPassword" minLength={8} required/></div>
          <button className="btn btn-primary">Salvar nova senha</button>
        </form>
      </div>
    </div>
  </main>
}
