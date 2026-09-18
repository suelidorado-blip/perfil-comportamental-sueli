export type Q={
  id:string;
  text:string;
  kind:'disc'|'social'|'value'|'work'|'vocational_interest'|'vocational_preference'|'vocational_skill'|'vocational_value';
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
  // BLOCO 1 - Interesses RIASEC: 30 perguntas, 5 por dimensao.
  ...[
    ['vr1','Gosto de atividades em que posso montar, ajustar, operar ou produzir algo concreto.','realista'],
    ['vr2','Tenho interesse por ferramentas, equipamentos, mecanismos ou atividades tecnicas.','realista'],
    ['vr3','Aprendo com facilidade quando posso experimentar e fazer na pratica.','realista'],
    ['vr4','Sinto satisfacao ao resolver problemas concretos com uma solucao funcional.','realista'],
    ['vr5','Eu me imagino trabalhando em atividades que envolvam execucao, campo, operacao ou construcao.','realista'],
    ['vi1','Gosto de investigar causas, entender padroes e buscar explicacoes.','investigativo'],
    ['vi2','Problemas complexos me despertam curiosidade em vez de me afastar.','investigativo'],
    ['vi3','Tenho interesse por pesquisa, dados, ciencia, tecnologia ou analise.','investigativo'],
    ['vi4','Gosto de comparar informacoes antes de chegar a uma conclusao.','investigativo'],
    ['vi5','Sinto satisfacao quando descubro como ou por que algo acontece.','investigativo'],
    ['va1','Gosto de criar textos, imagens, conceitos, experiencias ou ideias originais.','artistico'],
    ['va2','Tenho interesse por comunicacao, design, arte, conteudo ou expressao criativa.','artistico'],
    ['va3','Prefiro atividades em que existe espaco para imaginar possibilidades diferentes.','artistico'],
    ['va4','Sinto satisfacao ao transformar uma ideia em algo expressivo ou visualmente interessante.','artistico'],
    ['va5','Ambientes muito rigidos, sem espaco para criacao, tendem a reduzir meu interesse.','artistico'],
    ['vs1','Gosto de orientar, ensinar, apoiar ou desenvolver pessoas.','social'],
    ['vs2','Tenho interesse em compreender necessidades, sentimentos e comportamentos humanos.','social'],
    ['vs3','Sinto satisfacao quando meu trabalho ajuda alguem a evoluir ou resolver um problema.','social'],
    ['vs4','Tenho paciencia para ouvir, explicar e acompanhar pessoas.','social'],
    ['vs5','Eu me imagino em uma profissao com interacao humana significativa.','social'],
    ['ve1','Gosto de negociar, persuadir, apresentar ideias ou defender propostas.','empreendedor'],
    ['ve2','Sinto-me estimulado por metas, oportunidades e desafios de negocio.','empreendedor'],
    ['ve3','Tenho interesse por lideranca, vendas, gestao ou empreendedorismo.','empreendedor'],
    ['ve4','Gosto de mobilizar pessoas em torno de uma ideia ou objetivo.','empreendedor'],
    ['ve5','Assumir responsabilidade por decisoes e resultados me atrai.','empreendedor'],
    ['vc1','Gosto de organizar dados, documentos, agendas, controles ou processos.','convencional'],
    ['vc2','Sinto-me confortavel com planejamento, prazos e procedimentos claros.','convencional'],
    ['vc3','Tenho facilidade para manter informacoes e tarefas bem estruturadas.','convencional'],
    ['vc4','Atividades que exigem precisao, conferencia e acompanhamento podem ser satisfatorias para mim.','convencional'],
    ['vc5','Gosto de transformar desorganizacao em um processo claro e controlado.','convencional']
  ].map(([id,text,value])=>({id,kind:'vocational_interest' as const,text,options:scale.map(x=>({...x,value:`interest:${value}:${x.value}`}))})),

  // BLOCO 2 - Preferencias de trabalho: 10 perguntas, 5 continuos.
  ...[
    ['vp_people','Prefiro atividades com contato frequente, conversa e relacionamento com pessoas.','people'],
    ['vp_backstage','Prefiro produzir, analisar ou executar com mais tempo de concentracao e menos exposicao.','backstage'],
    ['vp_creative','Sinto-me melhor quando tenho liberdade para criar caminhos, ideias ou solucoes.','creative'],
    ['vp_structure','Sinto-me melhor quando existem processos, criterios e orientacoes bem definidos.','structure'],
    ['vp_variety','Variedade, mudancas e novos desafios aumentam meu interesse pelo trabalho.','variety'],
    ['vp_routine','Rotina previsivel e continuidade ajudam a manter meu desempenho.','routine'],
    ['vp_autonomy','Prefiro receber o objetivo e ter autonomia para definir como executa-lo.','autonomy'],
    ['vp_guidance','Prefiro ter direcionamento, referencias e acompanhamento mais frequentes.','guidance'],
    ['vp_team','Gosto de construir resultados em equipe e trocar ideias durante o processo.','team'],
    ['vp_individual','Gosto de ter espaco para produzir individualmente e me concentrar sem muitas interrupcoes.','individual']
  ].map(([id,text,value])=>({id,kind:'vocational_preference' as const,text,options:scale.map(x=>({...x,value:`preference:${value}:${x.value}`}))})),

  // BLOCO 3 - Habilidades percebidas: 12 perguntas, 2 por dimensao.
  ...[
    ['vh_practical_1','Tenho facilidade para aprender procedimentos praticos e executa-los com seguranca.','practical'],
    ['vh_practical_2','Costumo encontrar solucoes praticas para problemas do dia a dia.','practical'],
    ['vh_analytical_1','Tenho facilidade para analisar informacoes, comparar alternativas e perceber padroes.','analytical'],
    ['vh_analytical_2','Consigo manter concentracao ao resolver problemas que exigem raciocinio.','analytical'],
    ['vh_creative_1','Tenho facilidade para gerar ideias, alternativas ou formas diferentes de apresentar algo.','creative'],
    ['vh_creative_2','Costumo perceber possibilidades que outras pessoas ainda nao consideraram.','creative'],
    ['vh_interpersonal_1','Tenho facilidade para ouvir, explicar e criar conexao com diferentes pessoas.','interpersonal'],
    ['vh_interpersonal_2','As pessoas costumam me procurar para conversar, pedir ajuda ou orientacao.','interpersonal'],
    ['vh_influence_1','Tenho facilidade para apresentar ideias de forma convincente.','influence'],
    ['vh_influence_2','Consigo assumir a frente e mobilizar pessoas quando necessario.','influence'],
    ['vh_organization_1','Tenho facilidade para organizar tarefas, informacoes, prazos e prioridades.','organization'],
    ['vh_organization_2','Consigo acompanhar detalhes e manter controle de varias demandas.','organization']
  ].map(([id,text,value])=>({id,kind:'vocational_skill' as const,text,options:scale.map(x=>({...x,value:`skill:${value}:${x.value}`}))})),

  // BLOCO 4 - Valores de carreira: 10 indicadores.
  ...[
    ['vv_stability','Ter seguranca e estabilidade profissional e importante para minhas escolhas.','stability'],
    ['vv_income','Potencial de remuneracao e crescimento financeiro pesa bastante para mim.','income'],
    ['vv_purpose','Preciso perceber sentido e proposito no trabalho que realizo.','purpose'],
    ['vv_recognition','Ser reconhecido por resultados e competencias e importante para minha motivacao.','recognition'],
    ['vv_autonomy','Ter liberdade para decidir e organizar meu trabalho e importante para mim.','autonomy'],
    ['vv_creativity','Poder criar, experimentar e propor ideias aumenta meu interesse por uma carreira.','creativity'],
    ['vv_learning','Quero uma carreira que me permita aprender continuamente e ampliar conhecimentos.','learning'],
    ['vv_leadership','Ter oportunidade de liderar, influenciar ou assumir responsabilidades me atrai.','leadership'],
    ['vv_balance','Equilibrio entre trabalho, vida pessoal e bem-estar e uma prioridade para mim.','balance'],
    ['vv_impact','Quero perceber que meu trabalho produz impacto positivo em pessoas ou na sociedade.','impact']
  ].map(([id,text,value])=>({id,kind:'vocational_value' as const,text,options:scale.map(x=>({...x,value:`career_value:${value}:${x.value}`}))}))
];
