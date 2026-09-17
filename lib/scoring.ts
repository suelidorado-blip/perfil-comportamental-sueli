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
  const discRaw={
    D:avg(ans,['d1','d2','d3','d4','d5','d6']),
    I:avg(ans,['i1','i2','i3','i4','i5','i6']),
    S:avg(ans,['s1','s2','s3','s4','s5','s6']),
    C:avg(ans,['c1','c2','c3','c4','c5','c6'])
  };
  const disc=normalizeShares(discRaw);
  const discSorted=Object.entries(disc).sort((a,b)=>Number(b[1])-Number(a[1]));

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
    version:2,
    disc,
    discRaw,
    discPrimary:discSorted[0]?.[0]||'',
    discSecondary:discSorted[1]?.[0]||'',
    communication,
    values,
    valuesRaw,
    work,
    valueModel:'Seis valores de Spranger - perguntas autorais'
  };
}

export function scoreVocational(ans:Record<string,string>){
  const totals:Record<string,number>={pratico:0,investigativo:0,criativo:0,social:0,empreendedor:0,organizacional:0};
  Object.values(ans).forEach(v=>{const [k,n]=String(v).split(':');if(k in totals)totals[k]+=Number(n)});
  return totals;
}
