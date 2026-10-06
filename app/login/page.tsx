import Link from 'next/link';
import { loginAction } from './actions';

export default async function Login({searchParams}:{searchParams:Promise<{erro?:string;senha?:string}>}){
  const p=await searchParams;
  return <main className="assessment-shell">
    <div className="assessment-wrap" style={{maxWidth:500}}>
      <div className="assessment-brand"><div className="brand-mark">PV</div><span>Perfil & Vocacional</span></div>
      <div className="card intro-card" style={{marginTop:'8vh'}}>
        <p className="eyebrow">ÁREA ADMINISTRATIVA</p>
        <h1 style={{marginBottom:6}}>Bem-vinda</h1>
        <p className="muted" style={{marginTop:0}}>Entre para gerenciar avaliações, links e relatórios.</p>
        {p.erro&&<p style={{color:'#b34a3f'}}>E-mail ou senha inválidos.</p>}
        {p.senha==='alterada'&&<p style={{color:'#28724f'}}>Senha alterada com sucesso. Entre com a nova senha.</p>}
        <form action={loginAction} className="grid">
          <div><label className="label">E-mail</label><input className="input" type="email" name="email" required/></div>
          <div><label className="label">Senha</label><input className="input" type="password" name="password" required/></div>
          <div style={{textAlign:'right',marginTop:-6}}>
            <Link href="/forgot-password" style={{color:'#174e4a',fontWeight:750,fontSize:13}}>Esqueci minha senha</Link>
          </div>
          <button className="btn btn-primary">Entrar</button>
        </form>
      </div>
    </div>
  </main>
}
