'use client';
import { useMemo,useState } from 'react';
import { behavioralQuestions,vocationalQuestions,Q } from '@/lib/questions';

const behavioralBlocks=[
  {kind:'disc',title:'Perfil Comportamental (DISC)',subtitle:'Como voce tende a agir, decidir e responder a desafios.'},
  {kind:'social',title:'Estilo de Comunicacao',subtitle:'Como voce prefere interagir, pensar e recuperar energia social.'},
  {kind:'value',title:'Valores e Motivadores',subtitle:'Quais fatores tendem a dar sentido, interesse e motivacao ao que voce faz.'},
  {kind:'work',title:'Preferencias no Ambiente de Trabalho',subtitle:'Quais condicoes tendem a facilitar conforto, foco e desempenho.'}
] as const;

export default function TestClient({assessment}:{assessment:any}){
  const isBehavioral=assessment.type==='behavioral';
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [sending,setSending]=useState(false);
  const [done,setDone]=useState(false);
  const [respondentName,setRespondentName]=useState('');
  const [started,setStarted]=useState(!isBehavioral);
  const [step,setStep]=useState(0);

  const currentQuestions=useMemo<Q[]>(()=>{
    if(!isBehavioral)return vocationalQuestions;
    const block=behavioralBlocks[step];
    return behavioralQuestions.filter(q=>q.kind===block.kind);
  },[isBehavioral,step]);

  const total=isBehavioral?behavioralQuestions.length:vocationalQuestions.length;
  const answered=Object.keys(answers).length;
  const progress=Math.round((answered/total)*100);

  function startAssessment(e:React.FormEvent){
    e.preventDefault();
    if(respondentName.trim().length<3){alert('Digite seu nome completo antes de comecar.');return}
    setStarted(true);
  }

  function nextBlock(){
    const missing=currentQuestions.some(q=>!answers[q.id]);
    if(missing){alert('Responda todas as perguntas deste bloco antes de continuar.');return}
    if(step<behavioralBlocks.length-1){setStep(s=>s+1);window.scrollTo({top:0,behavior:'smooth'});}
  }

  async function submit(e:React.FormEvent){
    e.preventDefault();
    const qs=isBehavioral?behavioralQuestions:vocationalQuestions;
    if(Object.keys(answers).length!==qs.length){alert('Responda todas as perguntas antes de finalizar.');return}
    if(isBehavioral&&respondentName.trim().length<3){alert('Informe seu nome completo.');return}
    setSending(true);
    const r=await fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:assessment.token,answers,respondent_name:isBehavioral?respondentName.trim():assessment.participant_name})});
    setSending(false);
    if(r.ok)setDone(true);else alert((await r.json()).error||'Nao foi possivel enviar.');
  }

  if(done)return <main className="container" style={{maxWidth:760}}><div className="card"><h1>Respostas enviadas</h1><p>Obrigado. Sua avaliacao foi concluida e o responsavel ja podera consultar o resultado.</p></div></main>;

  if(isBehavioral&&!started)return <main className="container" style={{maxWidth:680}}><div className="card"><div className="brand">Perfil Comportamental</div><h1>Antes de comecar</h1><p className="muted">Este link e individual e pode ser respondido apenas uma vez. Responda considerando como voce costuma agir naturalmente, e nao como acredita que deveria agir.</p><form onSubmit={startAssessment}><label className="label">Seu nome completo</label><input className="input" autoFocus required value={respondentName} onChange={e=>setRespondentName(e.target.value)} placeholder="Digite seu nome completo"/><button className="btn btn-primary" style={{marginTop:18}}>Comecar avaliacao</button></form></div></main>;

  if(!isBehavioral)return <main className="container" style={{maxWidth:860}}><div className="card" style={{marginBottom:18}}><div className="brand">Teste Vocacional</div><h1>{assessment.participant_name}</h1>{assessment.context&&<p className="muted">{assessment.context}</p>}<p className="muted">Use a escala de 1 a 5, em que 1 significa pouco parecido com voce e 5 significa muito parecido com voce.</p></div><form onSubmit={submit} className="grid">{currentQuestions.map((q,i)=><Question key={q.id} q={q} i={i} answers={answers} setAnswers={setAnswers}/>)}<button className="btn btn-primary" disabled={sending}>{sending?'Enviando...':'Finalizar avaliacao'}</button></form></main>;

  const block=behavioralBlocks[step];
  const isLast=step===behavioralBlocks.length-1;
  return <main className="container" style={{maxWidth:900}}>
    <div className="card" style={{marginBottom:18}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:12,alignItems:'center',flexWrap:'wrap'}}><div><div className="brand">Perfil Comportamental</div><h1 style={{marginBottom:4}}>{block.title}</h1><p className="muted" style={{marginTop:0}}>{block.subtitle}</p></div><div className="badge">Etapa {step+1} de {behavioralBlocks.length}</div></div>
      <div style={{height:9,background:'#e5e7eb',borderRadius:999,overflow:'hidden',marginTop:12}}><div style={{height:'100%',width:`${progress}%`,background:'#243a5a'}}/></div>
      <p className="muted" style={{fontSize:13}}>{progress}% concluido · Escala de 1 a 5: 1 = pouco parecido comigo, 5 = muito parecido comigo.</p>
    </div>
    <form onSubmit={submit} className="grid">
      {currentQuestions.map((q,i)=><Question key={q.id} q={q} i={i} answers={answers} setAnswers={setAnswers}/>)}
      <div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}>
        {step>0?<button type="button" className="btn btn-secondary" onClick={()=>{setStep(s=>s-1);window.scrollTo({top:0,behavior:'smooth'})}}>Voltar</button>:<span/>}
        {!isLast?<button type="button" className="btn btn-primary" onClick={nextBlock}>Continuar</button>:<button className="btn btn-primary" disabled={sending}>{sending?'Enviando...':'Finalizar avaliacao'}</button>}
      </div>
    </form>
  </main>;
}

function Question({q,i,answers,setAnswers}:{q:Q,i:number,answers:Record<string,string>,setAnswers:(v:Record<string,string>)=>void}){
 return <div className="question"><b>{i+1}. {q.text}</b><div style={{display:'flex',gap:18,flexWrap:'wrap',marginTop:12}}>{q.options.map(o=><label key={o.label} className="option"><input type="radio" name={q.id} checked={answers[q.id]===o.value} onChange={()=>setAnswers({...answers,[q.id]:o.value})}/>{o.label}</label>)}</div></div>;
}
