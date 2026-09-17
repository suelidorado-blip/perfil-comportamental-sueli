export function scoreBehavioral(ans:Record<string,string>){
 const avg=(ids:string[])=>ids.reduce((s,id)=>s+Number(ans[id]||0),0)/ids.length;
 const disc={D:avg(['d1','d2']),I:avg(['i1','i2']),S:avg(['s1','s2']),C:avg(['c1','c2'])};
 const ext=(avg(['social1','social3'])+(6-avg(['social2','social4'])))/2;
 const style=ext>=3.7?'Extrovertido':ext<=2.3?'Introvertido':'Ambivertido';
 const values={
  'Religioso / Espiritual':avg(['value_religioso_1','value_religioso_2','value_religioso_3']),
  'Teórico':avg(['value_teorico_1','value_teorico_2','value_teorico_3']),
  'Estético':avg(['value_estetico_1','value_estetico_2','value_estetico_3']),
  'Econômico':avg(['value_economico_1','value_economico_2','value_economico_3']),
  'Social':avg(['value_social_1','value_social_2','value_social_3']),
  'Político / Liderança e Influência':avg(['value_politico_1','value_politico_2','value_politico_3'])
 };
 const work={Autonomia:Number(ans.work_autonomy||0),Estrutura:Number(ans.work_structure||0),Variedade:Number(ans.work_variety||0),Concentracao:Number(ans.work_focus||0)};
 return {disc,style,socialScore:ext,values,work,valueModel:'Seis valores de Spranger - perguntas autorais'};
}
export function scoreVocational(ans:Record<string,string>){
 const totals:Record<string,number>={pratico:0,investigativo:0,criativo:0,social:0,empreendedor:0,organizacional:0};
 Object.values(ans).forEach(v=>{const [k,n]=String(v).split(':');if(k in totals)totals[k]+=Number(n)});
 return totals;
}
