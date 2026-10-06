import { requestPasswordReset } from './actions';

export default async function ForgotPassword({searchParams}:{searchParams:Promise<{sent?:string;erro?:string}>}){
  const p=await searchParams;
  return <main className="assessment-shell">
    <div className="assessment-wrap" style={{maxWidth:500}}>
      <div className="assessment-brand"><div className="brand-mark">PV</div><span>Perfil & Vocacional</span></div>
      <div className="card intro-card" style={{marginTop:'8vh'}}>
        <p className="eyebrow">REDEFINIR SENHA</p>
        <h1 style={{marginBottom:6}}>Esqueceu sua senha?</h1>
        <p className="muted" style={{marginTop:0}}>Informe seu e-mail administrativo. Você receberá um link para criar uma nova senha.</p>
        {p.sent==='1'&&<p style={{color:'#28724f'}}>E-mail enviado. Verifique sua caixa de entrada e também a pasta de spam.</p>}
        {p.erro==='rate'&&<p style={{color:'#b34a3f'}}>Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.</p>}
        {p.erro==='1'&&<p style={{color:'#b34a3f'}}>Não foi possível enviar o e-mail agora. Tente novamente em alguns minutos.</p>}
        <form action={requestPasswordReset} className="grid">
          <div><label className="label">E-mail</label><input className="input" type="email" name="email" required/></div>
          <button className="btn btn-primary">Enviar link de redefinição</button>
          <a href="/login" style={{textAlign:'center',color:'#174e4a',fontWeight:750,fontSize:13}}>Voltar para o login</a>
        </form>
      </div>
    </div>
  </main>
}
