export type Q={
  id:string;
  text:string;
  kind:'disc'|'social'|'value'|'work'|'vocational_interest'|'vocational_preference'|'vocational_skill'|'vocational_value';
  options:{label:string,value:string}[];
};

const scale=[1,2,3,4,5].map(n=>({label:String(n),value:String(n)}));

export const behavioralQuestions:Q[]=[
  // BLOCO 1 - DISC: 24 blocos de escolha forcada, com foco em comportamento geral.
  // Em cada bloco, a pessoa seleciona UMA frase que mais combina com seu jeito natural.
  // Cada bloco possui uma alternativa D, I, S e C. A ordem varia para reduzir pistas de resposta.
  {id:'disc1',kind:'disc',text:'Qual destas frases mais combina com você?',options:[
    {label:'Quando algo precisa ser resolvido, costumo agir sem esperar muito.',value:'D'},
    {label:'Gosto de conversar, trocar ideias e me conectar com as pessoas.',value:'I'},
    {label:'Gosto de manter um clima tranquilo e relações estáveis.',value:'S'},
    {label:'Gosto de entender bem as coisas antes de chegar a uma conclusão.',value:'C'}]},
  {id:'disc2',kind:'disc',text:'Em uma situação nova, o que tende a acontecer primeiro?',options:[
    {label:'Observo o ambiente e procuro entender como tudo funciona.',value:'C'},
    {label:'Vou me adaptando aos poucos, sem pressa para mudar meu jeito.',value:'S'},
    {label:'Começo a conversar e conhecer as pessoas ao redor.',value:'I'},
    {label:'Tomo iniciativa e experimento o que parece fazer sentido.',value:'D'}]},
  {id:'disc3',kind:'disc',text:'Quando aparece um problema inesperado, qual reação é mais natural?',options:[
    {label:'Parto para a solução e tento resolver o quanto antes.',value:'D'},
    {label:'Procuro entender o que aconteceu antes de decidir o que fazer.',value:'C'},
    {label:'Converso sobre a situação e costumo pensar melhor trocando ideias.',value:'I'},
    {label:'Mantenho a calma e tento evitar que a situação fique mais tensa.',value:'S'}]},
  {id:'disc4',kind:'disc',text:'Na convivência com outras pessoas, o que mais combina com você?',options:[
    {label:'Costumo ser paciente e preservar relações de confiança.',value:'S'},
    {label:'Sou espontâneo e gosto de deixar a convivência mais leve.',value:'I'},
    {label:'Valorizo combinados claros e coerência no que foi acertado.',value:'C'},
    {label:'Costumo falar com franqueza quando quero que algo avance.',value:'D'}]},
  {id:'disc5',kind:'disc',text:'Quando precisa tomar uma decisão importante, qual frase mais representa você?',options:[
    {label:'Decido e assumo as consequências da escolha.',value:'D'},
    {label:'Penso em como a decisão pode afetar as pessoas envolvidas.',value:'S'},
    {label:'Gosto de conversar e ouvir outras perspectivas antes de fechar.',value:'I'},
    {label:'Procuro reunir informações suficientes para reduzir dúvidas.',value:'C'}]},
  {id:'disc6',kind:'disc',text:'Em atividades do dia a dia, o que tende a chamar mais sua atenção?',options:[
    {label:'A possibilidade de interagir e compartilhar ideias.',value:'I'},
    {label:'Os detalhes e se as coisas estão sendo feitas do jeito certo.',value:'C'},
    {label:'A sensação de desafio e de conseguir avançar.',value:'D'},
    {label:'A continuidade e a sensação de segurança no que estou fazendo.',value:'S'}]},
  {id:'disc7',kind:'disc',text:'Quando seus planos mudam de repente, qual tendência mais se aproxima de você?',options:[
    {label:'Mudo o caminho rapidamente e penso no que dá para fazer agora.',value:'D'},
    {label:'Preciso de um tempo para me acostumar, mas procuro manter a tranquilidade.',value:'S'},
    {label:'Quero entender o motivo da mudança e o que ela altera.',value:'C'},
    {label:'Costumo conversar sobre a mudança e buscar o lado positivo da situação.',value:'I'}]},
  {id:'disc8',kind:'disc',text:'Em uma conversa em grupo, qual comportamento tende a aparecer mais em você?',options:[
    {label:'Escuto bastante e procuro evitar que alguém fique desconfortável.',value:'S'},
    {label:'Faço perguntas e gosto de esclarecer pontos que ficaram vagos.',value:'C'},
    {label:'Participo com facilidade e costumo trazer energia para a conversa.',value:'I'},
    {label:'Costumo ir direto ao ponto e ajudar a chegar a uma definição.',value:'D'}]},
  {id:'disc9',kind:'disc',text:'Quando quer muito alguma coisa, o que mais combina com você?',options:[
    {label:'Vou atrás com determinação e tento acelerar o caminho.',value:'D'},
    {label:'Compartilho a ideia e gosto de envolver outras pessoas no entusiasmo.',value:'I'},
    {label:'Sigo de forma constante, mesmo que leve mais tempo.',value:'S'},
    {label:'Planejo e penso nas etapas para diminuir a chance de erro.',value:'C'}]},
  {id:'disc10',kind:'disc',text:'Quando alguém discorda de você, qual reação tende a ser mais natural?',options:[
    {label:'Defendo meu ponto com firmeza.',value:'D'},
    {label:'Procuro explicar meu ponto de um jeito que a outra pessoa se envolva.',value:'I'},
    {label:'Tento preservar a relação e encontrar um meio-termo.',value:'S'},
    {label:'Volto aos fatos e aos argumentos para reconsiderar a questão.',value:'C'}]},
  {id:'disc11',kind:'disc',text:'Em qual tipo de ambiente você tende a se sentir mais à vontade?',options:[
    {label:'Onde existe liberdade para agir e desafios para superar.',value:'D'},
    {label:'Onde há conversa, movimento e contato com pessoas.',value:'I'},
    {label:'Onde existe previsibilidade, confiança e um ritmo tranquilo.',value:'S'},
    {label:'Onde as coisas são organizadas e existem referências claras.',value:'C'}]},
  {id:'disc12',kind:'disc',text:'Quando começa algo novo, qual comportamento mais se parece com você?',options:[
    {label:'Procuro entender bem antes de começar.',value:'C'},
    {label:'Fico animado e gosto de compartilhar a novidade com alguém.',value:'I'},
    {label:'Vou entrando no ritmo aos poucos e prefiro continuidade.',value:'S'},
    {label:'Começo logo e vou ajustando no caminho.',value:'D'}]},
  {id:'disc13',kind:'disc',text:'Quando está sob pressão, qual tendência costuma aparecer primeiro?',options:[
    {label:'Fico mais direto e quero resolver rapidamente.',value:'D'},
    {label:'Falo mais, busco apoio e tento manter o ânimo.',value:'I'},
    {label:'Procuro manter a calma e não aumentar a tensão.',value:'S'},
    {label:'Fico mais atento a erros, detalhes e possíveis consequências.',value:'C'}]},
  {id:'disc14',kind:'disc',text:'Qual elogio costuma combinar mais com aquilo que você valoriza em si?',options:[
    {label:'Você é decidido e faz as coisas acontecerem.',value:'D'},
    {label:'Você é comunicativo e deixa as pessoas à vontade.',value:'I'},
    {label:'Você é confiável e está presente quando precisam.',value:'S'},
    {label:'Você é cuidadoso e percebe coisas que outros não percebem.',value:'C'}]},
  {id:'disc15',kind:'disc',text:'Quando precisa fazer algo repetitivo, qual reação mais se aproxima da sua?',options:[
    {label:'Tento encontrar um jeito mais rápido ou mais interessante de fazer.',value:'D'},
    {label:'Procuro deixar a atividade mais agradável com conversa ou variedade.',value:'I'},
    {label:'Consigo manter o ritmo e seguir sem me incomodar tanto.',value:'S'},
    {label:'Aproveito para fazer com organização e atenção aos detalhes.',value:'C'}]},
  {id:'disc16',kind:'disc',text:'Quando quer que alguém considere sua ideia, qual caminho tende a usar primeiro?',options:[
    {label:'Falo de forma objetiva e mostro por que acho que vale a pena.',value:'D'},
    {label:'Uso entusiasmo, conversa e conexão para despertar interesse.',value:'I'},
    {label:'Escuto a pessoa e procuro construir confiança antes de insistir.',value:'S'},
    {label:'Explico com lógica, exemplos e informações que sustentem a ideia.',value:'C'}]},
  {id:'disc17',kind:'disc',text:'Quando não sabe exatamente como agir, o que costuma fazer?',options:[
    {label:'Confio no meu julgamento e tomo uma direção.',value:'D'},
    {label:'Converso com alguém para trocar ideias.',value:'I'},
    {label:'Procuro uma referência ou confirmação antes de seguir.',value:'S'},
    {label:'Busco mais informações para entender melhor a situação.',value:'C'}]},
  {id:'disc18',kind:'disc',text:'Quando surge um conflito, qual comportamento aparece com mais naturalidade?',options:[
    {label:'Prefiro enfrentar o assunto e resolver de uma vez.',value:'D'},
    {label:'Tento conversar de um jeito que reduza a tensão.',value:'I'},
    {label:'Procuro conciliar e evitar que a relação se desgaste.',value:'S'},
    {label:'Tento separar emoção de fatos antes de formar uma opinião.',value:'C'}]},
  {id:'disc19',kind:'disc',text:'Qual destas frases descreve melhor o seu ritmo natural?',options:[
    {label:'Gosto de movimento e fico impaciente quando as coisas demoram demais.',value:'D'},
    {label:'Meu ritmo aumenta quando há novidade, interação e estímulo.',value:'I'},
    {label:'Prefiro um ritmo constante e sem mudanças bruscas.',value:'S'},
    {label:'Prefiro ter tempo suficiente para fazer as coisas com cuidado.',value:'C'}]},
  {id:'disc20',kind:'disc',text:'Quando percebe que algo deu errado, o que tende a fazer primeiro?',options:[
    {label:'Corrijo o que for possível e sigo em frente.',value:'D'},
    {label:'Converso sobre o que aconteceu e tento aliviar o clima.',value:'I'},
    {label:'Procuro resolver sem criar mais tensão entre as pessoas.',value:'S'},
    {label:'Quero entender a causa para evitar que aconteça de novo.',value:'C'}]},
  {id:'disc21',kind:'disc',text:'Quando aprende algo novo, qual forma costuma combinar mais com você?',options:[
    {label:'Prefiro testar logo e aprender fazendo.',value:'D'},
    {label:'Aprendo bem conversando, perguntando e trocando experiências.',value:'I'},
    {label:'Gosto de aprender aos poucos, repetindo até me sentir seguro.',value:'S'},
    {label:'Prefiro entender os fundamentos e detalhes antes de aplicar.',value:'C'}]},
  {id:'disc22',kind:'disc',text:'Quando está com outras pessoas e ninguém sabe bem o que fazer, qual atitude é mais provável?',options:[
    {label:'Dou uma sugestão e tento colocar as coisas em movimento.',value:'D'},
    {label:'Começo a conversar e incentivo as pessoas a participarem.',value:'I'},
    {label:'Procuro ajudar para que todos fiquem confortáveis e cooperem.',value:'S'},
    {label:'Tento organizar as informações e entender o que faz mais sentido.',value:'C'}]},
  {id:'disc23',kind:'disc',text:'Quando considera que algo ficou realmente bom, o que pesa mais para você?',options:[
    {label:'Ter conseguido chegar ao que eu queria.',value:'D'},
    {label:'Ter tornado a experiência agradável e envolvente.',value:'I'},
    {label:'Ter mantido tranquilidade, constância e boas relações.',value:'S'},
    {label:'Ter feito com cuidado, coerência e atenção aos detalhes.',value:'C'}]},
  {id:'disc24',kind:'disc',text:'Qual destas descrições mais combina com a forma como você costuma ser?',options:[
    {label:'Direto, decidido e independente.',value:'D'},
    {label:'Comunicativo, espontâneo e entusiasmado.',value:'I'},
    {label:'Paciente, constante e acolhedor.',value:'S'},
    {label:'Observador, criterioso e organizado.',value:'C'}]},
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
