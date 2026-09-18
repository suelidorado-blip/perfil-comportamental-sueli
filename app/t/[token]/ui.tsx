'use client';
import { useMemo,useState } from 'react';
import { behavioralQuestions,vocationalQuestions,Q } from '@/lib/questions';

const behavioralBlocks=[
  {kind:'disc',title:'Perfil Comportamental (DISC)',subtitle:'Em cada bloco, escolha apenas a frase que MAIS combina com você. Não existem respostas certas ou erradas.'},
  {kind:'social',title:'Estilo de Comunicação',subtitle:'Como você prefere interagir, pensar e recuperar energia social.'},
  {kind:'value',title:'Valores e Motivadores',subtitle:'Quais fatores tendem a dar sentido, interesse e motivação ao que você faz.'},
  {kind:'work',title:'Preferências no Ambiente de Trabalho',subtitle:'Quais condições tendem a facilitar conforto, foco e desempenho.'}
] as const;
const vocationalBlocks=[
  {kind:'vocational_interest',title:'Interesses Profissionais',subtitle:'Atividades e temas que naturalmente despertam sua curiosidade ou vontade de participar.'},
  {kind:'vocational_preference',title:'Preferências de Trabalho',subtitle:'Condições de ambiente e rotina que tendem a combinar melhor com você.'},
  {kind:'vocational_skill',title:'Habilidades Percebidas',subtitle:'Áreas em que você percebe maior facilidade hoje. Não é uma prova de capacidade.'},
  {kind:'vocational_value',title:'Valores de Carreira',subtitle:'O que pesa mais para você ao imaginar uma carreira satisfatória.'}
] as const;

export default function TestClient({assessment}:{assessment:any}){
  const isBehavioral=assessment.type==='behavioral';
  const blocks=isBehavioral?behavioralBlocks:vocationalBlocks;
  const questions=isBehavioral?behavioralQuestions:vocationalQuestions;
  const [answers,setAnswers]=useState<Record<string,string>>({});
  const [sending,setSending]=useState(false); const [done,setDone]=useState(false);
  const [respondentName,setRespondentName]=useState(''); const [started,setStarted]=useState(false); const [step,setStep]=useState(0);
  const currentQuestions=useMemo<Q[]>(()=>{const block=blocks[step];return questions.filter(q=>q.kind===block.kind)},[questions,blocks,step]);
  const total=questions.length,answered=Object.keys(answers).length,progress=Math.round((answered/total)*100);
  function startAssessment(e:React.FormEvent){e.preventDefault();if(respondentName.trim().length<3){alert('Digite seu nome completo antes de começar.');return}setStarted(true)}
  function nextBlock(){const missing=currentQuestions.some(q=>!answers[q.id]);if(missing){alert('Responda todas as perguntas deste bloco antes de continuar.');return}if(step<blocks.length-1){setStep(s=>s+1);window.scrollTo({top:0,behavior:'smooth'})}}
  async function submit(e:React.FormEvent){e.preventDefault();if(Object.keys(answers).length!==questions.length){alert('Responda todas as perguntas antes de finalizar.');return}if(respondentName.trim().length<3){alert('Informe seu nome completo.');return}setSending(true);const r=await fetch('/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({token:assessment.token,answers,respondent_name:respondentName.trim()})});setSending(false);if(r.ok)setDone(true);else alert((await r.json()).error||'Não foi possível enviar.')}
  const brand=<div className="assessment-brand"><div className="brand-mark">PV</div><span>Perfil & Vocacional</span></div>;
  if(done)return <main className="assessment-shell"><div className="assessment-wrap">{brand}<div className="card completion-card"><div className="completion-mark">✓</div><h1>Respostas enviadas</h1><p className="muted">Obrigado, {respondentName}. Sua avaliação foi concluída e o responsável já poderá consultar o resultado.</p></div></div></main>;
  if(!started)return <main className="assessment-shell"><div className="assessment-wrap">{brand}<div className="card intro-card"><p className="eyebrow">AVALIAÇÃO INDIVIDUAL</p><h1>{isBehavioral?'Perfil Comportamental':'Teste Vocacional'}</h1><p className="muted">Este link é individual e pode ser respondido apenas uma vez. Responda com sinceridade, considerando suas preferências reais e não o que parece ser a resposta mais adequada.</p><div style={{background:'#f3f7f6',padding:14,borderRadius:14,margin:'18px 0'}}><b style={{color:'#174e4a'}}>Antes de começar</b><p className="muted" style={{margin:'6px 0 0',fontSize:13}}>Reserve alguns minutos sem interrupções. Não existem respostas certas ou erradas.</p></div><form onSubmit={startAssessment}><label className="label">Seu nome completo</label><input className="input" autoFocus required value={respondentName} onChange={e=>setRespondentName(e.target.value)} placeholder="Digite seu nome completo"/><button className="btn btn-primary">Começar avaliação</button></form></div></div></main>;
  const block=blocks[step],isLast=step===blocks.length-1;
  const isDiscBlock=isBehavioral&&block.kind==='disc';
  const scaleHelp=isDiscBlock?'Selecione somente uma alternativa em cada bloco.':isBehavioral?'1 = pouco parecido comigo, 5 = muito parecido comigo.':step===0?'1 = não gostaria / não me atrai, 5 = gostaria muito / me atrai bastante.':'1 = pouco, 5 = muito.';
  return <main className="assessment-shell"><div className="assessment-wrap">{brand}<div className="card progress-card"><div className="progress-head"><div><p className="eyebrow">ETAPA {step+1} DE {blocks.length}</p><h1 style={{margin:'0 0 5px'}}>{block.title}</h1><p className="muted" style={{margin:0}}>{block.subtitle}</p></div><span className="badge">{progress}% concluído</span></div><div className="progress-track"><div className="progress-fill" style={{width:`${progress}%`}}/></div><p className="muted" style={{fontSize:12,marginBottom:0}}>{isDiscBlock?scaleHelp:`Escala de 1 a 5: ${scaleHelp}`}</p></div><form onSubmit={submit} className="grid">{currentQuestions.map((q,i)=><Question key={q.id} q={q} i={i} answers={answers} setAnswers={setAnswers}/>)}<div className="assessment-actions">{step>0?<button type="button" className="btn btn-ghost" onClick={()=>{setStep(s=>s-1);window.scrollTo({top:0,behavior:'smooth'})}}>← Voltar</button>:<span/>}{!isLast?<button type="button" className="btn btn-primary" onClick={nextBlock}>Continuar →</button>:<button className="btn btn-primary" disabled={sending}>{sending?'Enviando...':'Finalizar avaliação'}</button>}</div></form></div></main>;
}
function Question({q,i,answers,setAnswers}:{q:Q,i:number,answers:Record<string,string>,setAnswers:(v:Record<string,string>)=>void}){const forced=q.kind==='disc';return <div className={`question ${forced?'forced-question':''}`}><b>{forced?`Bloco ${i+1}. ${q.text}`:`${i+1}. ${q.text}`}</b><div className={forced?'forced-options':''} style={forced?undefined:{display:'flex',gap:18,flexWrap:'wrap',marginTop:12}}>{q.options.map((o,idx)=><label key={`${o.value}-${idx}`} className={`option ${forced?'forced-option':''} ${answers[q.id]===o.value?'selected':''}`}><input type="radio" name={q.id} checked={answers[q.id]===o.value} onChange={()=>setAnswers({...answers,[q.id]:o.value})}/><span>{o.label}</span></label>)}</div></div>}
