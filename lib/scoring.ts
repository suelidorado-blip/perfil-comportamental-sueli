function avg(ans:Record<string,string>,ids:string[]){
  return ids.reduce((s,id)=>s+Number(ans[id]||0),0)/ids.length;
}
function normalizeShares(values:Record<string,number>){
  const sum=Object.values(values).reduce((a,b)=>a+b,0)||1;
  return Object.fromEntries(Object.entries(values).map(([k,v])=>[k,Math.round((v/sum)*1000)/10]));
}
function pairPercent(left:number,right:number){
  const sum=left+right||1;
  return {left:Math.round((left/sum)*100),right:Math.round((right/sum)*100)};
}

export function scoreBehavioral(ans:Record<string,string>){
  // DISC v3 - escolha forcada: 24 blocos, uma unica escolha por bloco.
  const discRaw={D:0,I:0,S:0,C:0};
  for(let i=1;i<=24;i++){
    const v=String(ans[`disc${i}`]||'');
    if(v==='D'||v==='I'||v==='S'||v==='C')discRaw[v]+=1;
  }
  const totalDisc=Object.values(discRaw).reduce((a,b)=>a+b,0)||24;
  const disc=Object.fromEntries(Object.entries(discRaw).map(([k,v])=>[k,Math.round((v/totalDisc)*1000)/10]));
  const discSorted=Object.entries(discRaw).sort((a,b)=>Number(b[1])-Number(a[1]));
  const leadGap=Number(discSorted[0]?.[1]||0)-Number(discSorted[1]?.[1]||0);
  const discPattern=leadGap<=1?'equilibrado':leadGap<=3?'predominancia_moderada':'predominancia_clara';

  const extroversionRaw=avg(ans,['social1','social3','social5','social7','social9']);
  const introversionRaw=avg(ans,['social2','social4','social6','social8','social10']);
  const comm=pairPercent(extroversionRaw,introversionRaw);
  const diff=comm.left-comm.right;
  const communication={
    extroversion:comm.left,
    introversion:comm.right,
    classification:Math.abs(diff)<=14?'Ambivertido':diff>0?'Extrovertido':'Introvertido'
  };

  const valuesRaw={
    'Religioso / Espiritual':avg(ans,['value_religioso_1','value_religioso_2','value_religioso_3']),
    'Teorico':avg(ans,['value_teorico_1','value_teorico_2','value_teorico_3']),
    'Estetico':avg(ans,['value_estetico_1','value_estetico_2','value_estetico_3']),
    'Economico':avg(ans,['value_economico_1','value_economico_2','value_economico_3']),
    'Social':avg(ans,['value_social_1','value_social_2','value_social_3']),
    'Politico / Lideranca e Influencia':avg(ans,['value_politico_1','value_politico_2','value_politico_3'])
  };
  const values=normalizeShares(valuesRaw);

  const work={
    autonomia_direcionamento:{labels:['Autonomia','Direcionamento'],...pairPercent(Number(ans.work_autonomy||0),Number(ans.work_direction||0))},
    estrutura_flexibilidade:{labels:['Estrutura','Flexibilidade'],...pairPercent(Number(ans.work_structure||0),Number(ans.work_flexibility||0))},
    rotina_variedade:{labels:['Rotina','Variedade'],...pairPercent(Number(ans.work_routine||0),Number(ans.work_variety||0))},
    individual_interacao:{labels:['Trabalho individual','Interacao'],...pairPercent(Number(ans.work_individual||0),Number(ans.work_interaction||0))},
    rapidez_analise:{labels:['Rapidez','Analise'],...pairPercent(Number(ans.work_speed||0),Number(ans.work_analysis||0))},
    competicao_cooperacao:{labels:['Competicao','Cooperacao'],...pairPercent(Number(ans.work_competition||0),Number(ans.work_cooperation||0))}
  };

  return {
    version:3,
    discMethod:'Escolha forcada - 24 blocos, uma frase por bloco',
    disc,
    discRaw,
    discPrimary:discSorted[0]?.[0]||'',
    discSecondary:discSorted[1]?.[0]||'',
    discLeadGap:leadGap,
    discPattern,
    communication,
    values,
    valuesRaw,
    work,
    valueModel:'Seis valores de Spranger - perguntas autorais'
  };
}

export function scoreVocational(ans:Record<string,string>){
  function percentFromScale(values:number[]){
    if(!values.length)return 0;
    const mean=values.reduce((a,b)=>a+b,0)/values.length;
    return Math.round(((mean-1)/4)*100);
  }
  function collect(prefix:string,key:string){
    const nums:number[]=[];
    Object.values(ans).forEach(v=>{
      const parts=String(v).split(':');
      if(parts[0]===prefix&&parts[1]===key)nums.push(Number(parts[2]||0));
    });
    return nums;
  }
  const interests={
    realista:percentFromScale(collect('interest','realista')),
    investigativo:percentFromScale(collect('interest','investigativo')),
    artistico:percentFromScale(collect('interest','artistico')),
    social:percentFromScale(collect('interest','social')),
    empreendedor:percentFromScale(collect('interest','empreendedor')),
    convencional:percentFromScale(collect('interest','convencional'))
  };
  const letters:Record<string,string>={realista:'R',investigativo:'I',artistico:'A',social:'S',empreendedor:'E',convencional:'C'};
  const sortedInterests=Object.entries(interests).sort((a,b)=>b[1]-a[1]);
  const topInterests=sortedInterests.slice(0,3).map(([k])=>k);

  const prefRaw:Record<string,number>={};
  ['people','backstage','creative','structure','variety','routine','autonomy','guidance','team','individual'].forEach(k=>{
    const a=collect('preference',k); prefRaw[k]=a[0]||0;
  });
  const preferences={
    pessoas_bastidores:{labels:['Contato com pessoas','Bastidores / concentracao'],...pairPercent(prefRaw.people,prefRaw.backstage)},
    criatividade_estrutura:{labels:['Criatividade / liberdade','Estrutura / processos'],...pairPercent(prefRaw.creative,prefRaw.structure)},
    variedade_rotina:{labels:['Variedade / mudanca','Rotina / continuidade'],...pairPercent(prefRaw.variety,prefRaw.routine)},
    autonomia_direcionamento:{labels:['Autonomia','Direcionamento'],...pairPercent(prefRaw.autonomy,prefRaw.guidance)},
    equipe_individual:{labels:['Trabalho em equipe','Trabalho individual'],...pairPercent(prefRaw.team,prefRaw.individual)}
  };

  const skills={
    practical:percentFromScale(collect('skill','practical')),
    analytical:percentFromScale(collect('skill','analytical')),
    creative:percentFromScale(collect('skill','creative')),
    interpersonal:percentFromScale(collect('skill','interpersonal')),
    influence:percentFromScale(collect('skill','influence')),
    organization:percentFromScale(collect('skill','organization'))
  };

  const careerValues={
    stability:percentFromScale(collect('career_value','stability')),
    income:percentFromScale(collect('career_value','income')),
    purpose:percentFromScale(collect('career_value','purpose')),
    recognition:percentFromScale(collect('career_value','recognition')),
    autonomy:percentFromScale(collect('career_value','autonomy')),
    creativity:percentFromScale(collect('career_value','creativity')),
    learning:percentFromScale(collect('career_value','learning')),
    leadership:percentFromScale(collect('career_value','leadership')),
    balance:percentFromScale(collect('career_value','balance')),
    impact:percentFromScale(collect('career_value','impact'))
  };
  const topCareerValues=Object.entries(careerValues).sort((a,b)=>b[1]-a[1]).slice(0,4).map(([k])=>k);

  return {
    version:2,
    model:'RIASEC ampliado - perguntas autorais',
    interests,
    topInterests,
    riasecCode:topInterests.map(k=>letters[k]).join(''),
    preferences,
    skills,
    careerValues,
    topCareerValues
  };
}
