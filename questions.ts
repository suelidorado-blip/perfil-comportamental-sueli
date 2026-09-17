export type Q={id:string;text:string,kind:'disc'|'social'|'value'|'work'|'vocational',options:{label:string,value:string}[]};
const scale=[1,2,3,4,5].map(n=>({label:String(n),value:String(n)}));
export const behavioralQuestions:Q[]=[
{id:'d1',kind:'disc',text:'Quando surge um problema inesperado, minha tendência é agir rapidamente para resolver.',options:scale},
{id:'i1',kind:'disc',text:'Tenho facilidade para iniciar conversas e envolver outras pessoas.',options:scale},
{id:'s1',kind:'disc',text:'Prefiro ambientes estáveis, cooperativos e com mudanças bem explicadas.',options:scale},
{id:'c1',kind:'disc',text:'Antes de concluir uma tarefa, costumo conferir detalhes e critérios.',options:scale},
{id:'d2',kind:'disc',text:'Sinto-me confortável assumindo decisões e responsabilidades.',options:scale},
{id:'i2',kind:'disc',text:'Costumo demonstrar entusiasmo ao apresentar ideias.',options:scale},
{id:'s2',kind:'disc',text:'Tenho paciência para apoiar pessoas e acompanhar processos.',options:scale},
{id:'c2',kind:'disc',text:'Gosto de trabalhar com informações claras, padrões e organização.',options:scale},
{id:'social1',kind:'social',text:'Em grupos novos, costumo iniciar conversas espontaneamente.',options:scale},
{id:'social2',kind:'social',text:'Depois de muitas interações sociais, geralmente preciso de um tempo mais reservado.',options:scale},
{id:'social3',kind:'social',text:'Costumo pensar falando e organizar minhas ideias em conversa.',options:scale},
{id:'social4',kind:'social',text:'Prefiro refletir sozinho antes de expor minha opinião.',options:scale},

// Valores - estrutura inspirada nos seis valores clássicos de Spranger.
// As perguntas abaixo são autorais e não reproduzem instrumentos proprietários.
{id:'value_religioso_1',kind:'value',text:'Sinto-me mais motivado quando o que faço está alinhado aos meus princípios e ao meu senso de propósito.',options:scale},
{id:'value_religioso_2',kind:'value',text:'Em decisões importantes, considero fortemente aquilo que acredito ser certo e coerente com minhas convicções.',options:scale},
{id:'value_religioso_3',kind:'value',text:'Encontrar sentido no trabalho e perceber que ele se conecta a algo maior é importante para mim.',options:scale},

{id:'value_teorico_1',kind:'value',text:'Tenho prazer em compreender como e por que as coisas funcionam.',options:scale},
{id:'value_teorico_2',kind:'value',text:'Antes de formar uma opinião, gosto de buscar informações, evidências e explicações.',options:scale},
{id:'value_teorico_3',kind:'value',text:'Aprender, estudar e ampliar meu conhecimento é uma fonte importante de motivação.',options:scale},

{id:'value_estetico_1',kind:'value',text:'Ambientes bonitos, harmoniosos e bem cuidados influenciam positivamente meu bem-estar e minha motivação.',options:scale},
{id:'value_estetico_2',kind:'value',text:'Valorizo criatividade, forma, estilo e qualidade da experiência no que faço.',options:scale},
{id:'value_estetico_3',kind:'value',text:'Tenho satisfação em tornar algo mais agradável, expressivo ou visualmente harmonioso.',options:scale},

{id:'value_economico_1',kind:'value',text:'Costumo avaliar se uma atividade gera resultado concreto, utilidade ou retorno.',options:scale},
{id:'value_economico_2',kind:'value',text:'Eficiência, produtividade e bom uso de recursos são importantes para mim.',options:scale},
{id:'value_economico_3',kind:'value',text:'Sinto-me motivado quando consigo transformar esforço em resultados mensuráveis.',options:scale},

{id:'value_social_1',kind:'value',text:'A possibilidade de ajudar pessoas e contribuir para o bem-estar delas é importante para mim.',options:scale},
{id:'value_social_2',kind:'value',text:'Sinto satisfação quando posso apoiar, orientar ou facilitar o desenvolvimento de alguém.',options:scale},
{id:'value_social_3',kind:'value',text:'Cooperação e impacto positivo nas pessoas pesam bastante nas minhas escolhas.',options:scale},

{id:'value_politico_1',kind:'value',text:'Sinto-me motivado quando posso liderar, influenciar decisões ou mobilizar pessoas.',options:scale},
{id:'value_politico_2',kind:'value',text:'Gosto de assumir protagonismo e responsabilidade por decisões importantes.',options:scale},
{id:'value_politico_3',kind:'value',text:'Reconhecimento, influência e capacidade de gerar direção para um grupo são aspectos que valorizo.',options:scale},

{id:'work_autonomy',kind:'work',text:'Prefiro receber um objetivo claro e liberdade para escolher como chegar até ele.',options:scale},
{id:'work_structure',kind:'work',text:'Trabalho melhor quando existem processos e expectativas bem definidos.',options:scale},
{id:'work_variety',kind:'work',text:'Tenho mais energia quando minha rotina apresenta variedade e novos desafios.',options:scale},
{id:'work_focus',kind:'work',text:'Produzo melhor quando tenho períodos de concentração sem muitas interrupções.',options:scale}
];
export const vocationalQuestions:Q[]=[
['r1','Gosto de atividades práticas, ferramentas, montagem ou execução concreta.','pratico'],['r2','Aprendo melhor fazendo e testando na prática.','pratico'],['r3','Sinto satisfação ao ver um resultado físico e concreto do meu trabalho.','pratico'],['r4','Tenho interesse por atividades técnicas ou operacionais.','pratico'],['r5','Prefiro problemas que possam ser resolvidos com ação prática.','pratico'],
['i1','Gosto de investigar causas, padrões e explicações.','investigativo'],['i2','Tenho interesse por pesquisa, análise e raciocínio lógico.','investigativo'],['i3','Costumo aprofundar assuntos antes de formar uma opinião.','investigativo'],['i4','Gosto de resolver problemas complexos.','investigativo'],['i5','Sinto curiosidade por ciência, dados ou tecnologia.','investigativo'],
['a1','Gosto de criar ideias, imagens, textos ou soluções originais.','criativo'],['a2','Sinto-me atraído por atividades com liberdade de expressão.','criativo'],['a3','Tenho prazer em imaginar novas possibilidades.','criativo'],['a4','Prefiro ambientes onde posso experimentar formas diferentes de fazer.','criativo'],['a5','Tenho interesse por design, comunicação, arte ou criação.','criativo'],
['s1','Gosto de ajudar, orientar ou ensinar pessoas.','social'],['s2','Tenho interesse em compreender necessidades humanas.','social'],['s3','Sinto satisfação quando meu trabalho melhora a vida de alguém.','social'],['s4','Tenho paciência para ouvir e apoiar pessoas.','social'],['s5','Prefiro trabalhos com interação humana significativa.','social'],
['e1','Gosto de persuadir, negociar ou apresentar ideias.','empreendedor'],['e2','Sinto-me confortável assumindo liderança.','empreendedor'],['e3','Tenho interesse por negócios, vendas ou gestão.','empreendedor'],['e4','Metas e desafios competitivos costumam me estimular.','empreendedor'],['e5','Gosto de mobilizar pessoas em torno de uma ideia.','empreendedor'],
['o1','Gosto de organizar informações, documentos ou processos.','organizacional'],['o2','Sinto-me bem trabalhando com planejamento e controle.','organizacional'],['o3','Tenho atenção para rotinas, prazos e detalhes.','organizacional'],['o4','Prefiro ambientes com regras e responsabilidades claras.','organizacional'],['o5','Gosto de manter informações e tarefas bem estruturadas.','organizacional']
].map(([id,text,value])=>({id,kind:'vocational' as const,text,options:scale.map(x=>({...x,value:`${value}:${x.value}`}))}));
