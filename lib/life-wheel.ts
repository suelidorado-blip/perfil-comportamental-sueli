export const lifeAreas = [
  ['health','Saúde e bem-estar'],['family','Família'],['love','Relacionamento amoroso'],['social','Amigos e vida social'],
  ['career','Carreira / profissão'],['finances','Finanças'],['growth','Desenvolvimento pessoal'],['spiritual','Espiritualidade / propósito'],
  ['leisure','Lazer e diversão'],['home','Ambiente físico / casa'],['contribution','Contribuição / impacto'],['quality','Qualidade de vida']
] as const;
export type LifeAreaKey = typeof lifeAreas[number][0];

export function scoreLifeWheel(answers:Record<string,any>){
 const areas:any={}; const priorities:any[]=[];
 for(const [key,label] of lifeAreas){
   const current=Number(answers[`${key}_current`]??0);
   areas[key]={label,current};
   // Regra inicial: notas de 0 a 6 entram como áreas que merecem atenção.
   if(current<=6) priorities.push({key,label,current});
 }
 priorities.sort((a,b)=>a.current-b.current);
 const avg=Math.round((Object.values(areas) as any[]).reduce((s,x)=>s+x.current,0)/lifeAreas.length*10)/10;
 return {version:2,areas,priorities,average:avg,priorityThreshold:6};
}
