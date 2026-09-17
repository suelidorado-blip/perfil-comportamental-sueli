export type Q={
  id:string;
  text:string;
  kind:'disc'|'social'|'value'|'work'|'vocational';
  options:{label:string,value:string}[];
};

const scale=[1,2,3,4,5].map(n=>({label:String(n),value:String(n)}));

export const behavioralQuestions:Q[]=[
  // BLOCO 1 - DISC: 24 perguntas, 6 por dimensao.
  {id:'d1',kind:'disc',text:'Quando surge um problema inesperado, minha tendencia e agir rapidamente para resolver.',options:scale},
  {id:'i1',kind:'disc',text:'Tenho facilidade para iniciar conversas e envolver outras pessoas.',options:scale},
  {id:'s1',kind:'disc',text:'Costumo manter a calma e a constancia mesmo quando o ambiente esta agitado.',options:scale},
  {id:'c1',kind:'disc',text:'Antes de concluir uma tarefa, costumo conferir detalhes e criterios.',options:scale},
  {id:'d2',kind:'disc',text:'Sinto-me confortavel assumindo decisoes e responsabilidades.',options:scale},
  {id:'i2',kind:'disc',text:'Costumo demonstrar entusiasmo ao apresentar ideias.',options:scale},
  {id:'s2',kind:'disc',text:'Tenho paciencia para apoiar pessoas e acompanhar processos ate o fim.',options:scale},
  {id:'c2',kind:'disc',text:'Gosto de trabalhar com informacoes claras, padroes e organizacao.',options:scale},
  {id:'d3',kind:'disc',text:'Desafios e metas exigentes costumam aumentar minha energia.',options:scale},
  {id:'i3',kind:'disc',text:'Tenho facilidade para criar conexao e proximidade com pessoas diferentes.',options:scale},
  {id:'s3',kind:'disc',text:'Prefiro mudancas explicadas com antecedencia e tempo para adaptacao.',options:scale},
  {id:'c3',kind:'disc',text:'Quando recebo uma tarefa, procuro entender criterios e riscos antes de executar.',options:scale},
  {id:'d4',kind:'disc',text:'Em situacoes de indecisao do grupo, tendo a assumir a frente.',options:scale},
  {id:'i4',kind:'disc',text:'Costumo persuadir mais pela conversa, entusiasmo e relacionamento.',options:scale},
  {id:'s4',kind:'disc',text:'Valorizo cooperacao e um ambiente previsivel entre as pessoas.',options:scale},
  {id:'c4',kind:'disc',text:'Erros evitaveis e falta de padrao me incomodam bastante.',options:scale},
  {id:'d5',kind:'disc',text:'Consigo dizer nao e defender uma decisao mesmo quando existe resistencia.',options:scale},
  {id:'i5',kind:'disc',text:'Gosto de trocar ideias em voz alta e receber reacoes das pessoas.',options:scale},
  {id:'s5',kind:'disc',text:'Sou persistente e consigo manter ritmo constante em atividades de longo prazo.',options:scale},
  {id:'c5',kind:'disc',text:'Prefiro ter informacoes suficientes antes de tomar uma decisao importante.',options:scale},
  {id:'d6',kind:'disc',text:'Tenho tendencia a buscar autonomia e espaco para decidir como atingir um resultado.',options:scale},
  {id:'i6',kind:'disc',text:'Reconhecimento e retorno positivo das pessoas aumentam minha motivacao.',options:scale},
  {id:'s6',kind:'disc',text:'Costumo ouvir com paciencia antes de reagir em uma situacao de conflito.',options:scale},
  {id:'c6',kind:'disc',text:'Organizacao, qualidade e consistencia sao importantes para eu considerar um trabalho bem feito.',options:scale},

  // BLOCO 2 - Comunicacao / estilo social: 10 perguntas.
  {id:'social1',kind:'social',text:'Em grupos novos, costumo iniciar conversas espontaneamente.',options:scale},
  {id:'social2',kind:'social',text:'Depois de muitas interacoes sociais, geralmente preciso de um tempo mais reservado.',options:scale},
  {id:'social3',kind:'social',text:'Costumo pensar falando e organizar minhas ideias em conversa.',options:scale},
  {id:'social4',kind:'social',text:'Prefiro refletir sozinho antes de expor minha opiniao.',options:scale},
  {id:'social5',kind:'social',text:'Sinto-me confortavel falando diante de varias pessoas.',options:scale},
  {id:'social6',kind:'social',text:'Em ambientes muito movimentados, posso preferir observar antes de participar.',options:scale},
  {id:'social7',kind:'social',text:'Tenho facilidade para manter varias interacoes sociais ao longo do dia.',options:scale},
  {id:'social8',kind:'social',text:'Conversas individuais ou em grupos pequenos costumam ser mais confortaveis para mim.',options:scale},
  {id:'social9',kind:'social',text:'Quando tenho uma ideia, normalmente sinto vontade de compartilha-la logo.',options:scale},
  {id:'social10',kind:'social',text:'Preciso de momentos de silencio e recolhimento para recuperar energia.',options:scale},

  // BLOCO 3 - Valores de Spranger: 18 perguntas, 3 por dimensao.
  {id:'value_religioso_1',kind:'value',text:'Sinto-me mais motivado quando o que faco esta alinhado aos meus principios e ao meu senso de proposito.',options:scale},
  {id:'value_religioso_2',kind:'value',text:'Em decisoes importantes, considero fortemente aquilo que acredito ser certo e coerente com minhas conviccoes.',options:scale},
  {id:'value_religioso_3',kind:'value',text:'Encontrar sentido no trabalho e perceber conexao com algo maior e importante para mim.',options:scale},
  {id:'value_teorico_1',kind:'value',text:'Tenho prazer em compreender como e por que as coisas funcionam.',options:scale},
  {id:'value_teorico_2',kind:'value',text:'Antes de formar uma opiniao, gosto de buscar informacoes, evidencias e explicacoes.',options:scale},
  {id:'value_teorico_3',kind:'value',text:'Aprender, estudar e ampliar meu conhecimento e uma fonte importante de motivacao.',options:scale},
  {id:'value_estetico_1',kind:'value',text:'Ambientes bonitos, harmoniosos e bem cuidados influenciam positivamente meu bem-estar.',options:scale},
  {id:'value_estetico_2',kind:'value',text:'Valorizo criatividade, forma, estilo e qualidade da experiencia no que faco.',options:scale},
  {id:'value_estetico_3',kind:'value',text:'Tenho satisfacao em tornar algo mais agradavel, expressivo ou visualmente harmonioso.',options:scale},
  {id:'value_economico_1',kind:'value',text:'Costumo avaliar se uma atividade gera resultado concreto, utilidade ou retorno.',options:scale},
  {id:'value_economico_2',kind:'value',text:'Eficiencia, produtividade e bom uso de recursos sao importantes para mim.',options:scale},
  {id:'value_economico_3',kind:'value',text:'Sinto-me motivado quando consigo transformar esforco em resultados mensuraveis.',options:scale},
  {id:'value_social_1',kind:'value',text:'A possibilidade de ajudar pessoas e contribuir para o bem-estar delas e importante para mim.',options:scale},
  {id:'value_social_2',kind:'value',text:'Sinto satisfacao quando posso apoiar, orientar ou facilitar o desenvolvimento de alguem.',options:scale},
  {id:'value_social_3',kind:'value',text:'Cooperacao e impacto positivo nas pessoas pesam bastante nas minhas escolhas.',options:scale},
  {id:'value_politico_1',kind:'value',text:'Sinto-me motivado quando posso liderar, influenciar decisoes ou mobilizar pessoas.',options:scale},
  {id:'value_politico_2',kind:'value',text:'Gosto de assumir protagonismo e responsabilidade por decisoes importantes.',options:scale},
  {id:'value_politico_3',kind:'value',text:'Reconhecimento, influencia e capacidade de gerar direcao para um grupo sao aspectos que valorizo.',options:scale},

  // BLOCO 4 - Preferencias no ambiente de trabalho: 12 perguntas, 6 continuos.
  {id:'work_autonomy',kind:'work',text:'Prefiro receber um objetivo claro e liberdade para escolher como chegar ate ele.',options:scale},
  {id:'work_direction',kind:'work',text:'Trabalho melhor quando recebo orientacoes frequentes sobre como executar.',options:scale},
  {id:'work_structure',kind:'work',text:'Gosto de processos, responsabilidades e criterios bem definidos.',options:scale},
  {id:'work_flexibility',kind:'work',text:'Sinto-me confortavel quando o caminho pode ser construido e ajustado durante a execucao.',options:scale},
  {id:'work_routine',kind:'work',text:'Rotinas previsiveis ajudam a manter meu desempenho e organizacao.',options:scale},
  {id:'work_variety',kind:'work',text:'Tenho mais energia quando minha rotina apresenta variedade e novos desafios.',options:scale},
  {id:'work_individual',kind:'work',text:'Produzo muito bem quando tenho espaco para trabalhar sozinho e concentrado.',options:scale},
  {id:'work_interaction',kind:'work',text:'Prefiro atividades com troca frequente, contato e colaboracao com outras pessoas.',options:scale},
  {id:'work_speed',kind:'work',text:'Em muitas situacoes, prefiro agir rapidamente e ajustar ao longo do caminho.',options:scale},
  {id:'work_analysis',kind:'work',text:'Prefiro analisar alternativas e consequencias antes de iniciar uma acao importante.',options:scale},
  {id:'work_competition',kind:'work',text:'Metas comparativas e competicao saudavel costumam aumentar minha motivacao.',options:scale},
  {id:'work_cooperation',kind:'work',text:'Resultados construidos em cooperacao costumam me motivar mais do que competir.',options:scale}
];

export const vocationalQuestions:Q[]=[
['r1','Gosto de atividades praticas, ferramentas, montagem ou execucao concreta.','pratico'],['r2','Aprendo melhor fazendo e testando na pratica.','pratico'],['r3','Sinto satisfacao ao ver um resultado fisico e concreto do meu trabalho.','pratico'],['r4','Tenho interesse por atividades tecnicas ou operacionais.','pratico'],['r5','Prefiro problemas que possam ser resolvidos com acao pratica.','pratico'],
['i1','Gosto de investigar causas, padroes e explicacoes.','investigativo'],['i2','Tenho interesse por pesquisa, analise e raciocinio logico.','investigativo'],['i3','Costumo aprofundar assuntos antes de formar uma opiniao.','investigativo'],['i4','Gosto de resolver problemas complexos.','investigativo'],['i5','Sinto curiosidade por ciencia, dados ou tecnologia.','investigativo'],
['a1','Gosto de criar ideias, imagens, textos ou solucoes originais.','criativo'],['a2','Sinto-me atraido por atividades com liberdade de expressao.','criativo'],['a3','Tenho prazer em imaginar novas possibilidades.','criativo'],['a4','Prefiro ambientes onde posso experimentar formas diferentes de fazer.','criativo'],['a5','Tenho interesse por design, comunicacao, arte ou criacao.','criativo'],
['s1','Gosto de ajudar, orientar ou ensinar pessoas.','social'],['s2','Tenho interesse em compreender necessidades humanas.','social'],['s3','Sinto satisfacao quando meu trabalho melhora a vida de alguem.','social'],['s4','Tenho paciencia para ouvir e apoiar pessoas.','social'],['s5','Prefiro trabalhos com interacao humana significativa.','social'],
['e1','Gosto de persuadir, negociar ou apresentar ideias.','empreendedor'],['e2','Sinto-me confortavel assumindo lideranca.','empreendedor'],['e3','Tenho interesse por negocios, vendas ou gestao.','empreendedor'],['e4','Metas e desafios competitivos costumam me estimular.','empreendedor'],['e5','Gosto de mobilizar pessoas em torno de uma ideia.','empreendedor'],
['o1','Gosto de organizar informacoes, documentos ou processos.','organizacional'],['o2','Sinto-me bem trabalhando com planejamento e controle.','organizacional'],['o3','Tenho atencao para rotinas, prazos e detalhes.','organizacional'],['o4','Prefiro ambientes com regras e responsabilidades claras.','organizacional'],['o5','Gosto de manter informacoes e tarefas bem estruturadas.','organizacional']
].map(([id,text,value])=>({id,kind:'vocational' as const,text,options:scale.map(x=>({...x,value:`${value}:${x.value}`}))}));
