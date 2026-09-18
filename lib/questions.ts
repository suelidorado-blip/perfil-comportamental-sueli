export type Q={
  id:string;
  text:string;
  kind:'disc'|'social'|'value'|'work'|'vocational_interest'|'vocational_preference'|'vocational_skill'|'vocational_value';
  options:{label:string,value:string}[];
};

const scale=[1,2,3,4,5].map(n=>({label:String(n),value:String(n)}));

export const behavioralQuestions:Q[]=[
  // BLOCO 1 - DISC: 24 blocos de escolha forcada. Em cada bloco, selecione apenas UMA frase.
  // Cada bloco possui uma alternativa D, I, S e C. A ordem varia para reduzir pistas de resposta.
  {id:'disc1',kind:'disc',text:'Qual destas frases mais combina com você?',options:[
    {label:'Gosto de assumir a frente e decidir quando algo precisa avançar.',value:'D'},
    {label:'Gosto de conversar, envolver pessoas e criar entusiasmo.',value:'I'},
    {label:'Gosto de apoiar, manter constância e preservar um bom clima.',value:'S'},
    {label:'Gosto de analisar critérios e garantir que tudo esteja correto.',value:'C'}]},
  {id:'disc2',kind:'disc',text:'Em uma situação nova, qual atitude mais se parece com você?',options:[
    {label:'Observo o cenário e procuro entender os detalhes antes de agir.',value:'C'},
    {label:'Busco manter tranquilidade e ajudar as pessoas a se adaptarem.',value:'S'},
    {label:'Começo a interagir e trocar ideias para criar conexão.',value:'I'},
    {label:'Tomo iniciativa e procuro colocar as coisas em movimento.',value:'D'}]},
  {id:'disc3',kind:'disc',text:'Quando surge um desafio, qual reação é mais natural para você?',options:[
    {label:'Encaro o desafio como uma oportunidade de superar limites.',value:'D'},
    {label:'Procuro entender o problema, os riscos e os critérios envolvidos.',value:'C'},
    {label:'Converso com as pessoas e busco mobilizar o grupo.',value:'I'},
    {label:'Mantenho o ritmo e ajudo a equipe a seguir com estabilidade.',value:'S'}]},
  {id:'disc4',kind:'disc',text:'Ao trabalhar com outras pessoas, o que mais combina com você?',options:[
    {label:'Procuro manter cooperação, paciência e continuidade.',value:'S'},
    {label:'Gosto de trazer energia, proximidade e troca para o grupo.',value:'I'},
    {label:'Prefiro deixar responsabilidades e padrões bem definidos.',value:'C'},
    {label:'Costumo direcionar o grupo para decisões e resultados.',value:'D'}]},
  {id:'disc5',kind:'disc',text:'Quando precisa tomar uma decisão, qual frase mais representa você?',options:[
    {label:'Decido com objetividade e assumo a responsabilidade pela escolha.',value:'D'},
    {label:'Considero como a decisão afetará as pessoas e o clima.',value:'S'},
    {label:'Gosto de ouvir opiniões e discutir possibilidades antes de fechar.',value:'I'},
    {label:'Quero informações suficientes para reduzir erros e incertezas.',value:'C'}]},
  {id:'disc6',kind:'disc',text:'O que mais costuma chamar sua atenção em uma tarefa?',options:[
    {label:'A possibilidade de interagir, apresentar ideias e influenciar.',value:'I'},
    {label:'A clareza dos padrões, detalhes e qualidade esperada.',value:'C'},
    {label:'A oportunidade de atingir um objetivo desafiador.',value:'D'},
    {label:'A possibilidade de realizar algo com continuidade e segurança.',value:'S'}]},
  {id:'disc7',kind:'disc',text:'Quando os planos mudam de repente, qual tendência mais se aproxima de você?',options:[
    {label:'Adapto o caminho rapidamente e foco no que precisa ser resolvido.',value:'D'},
    {label:'Procuro manter o grupo tranquilo e fazer a transição sem rupturas.',value:'S'},
    {label:'Tento entender o motivo, os impactos e a nova forma correta de fazer.',value:'C'},
    {label:'Converso com as pessoas e busco tornar a mudança mais leve.',value:'I'}]},
  {id:'disc8',kind:'disc',text:'Em uma reunião, qual comportamento tende a aparecer mais em você?',options:[
    {label:'Ouço com atenção e procuro construir consenso.',value:'S'},
    {label:'Faço perguntas para esclarecer dados, critérios e riscos.',value:'C'},
    {label:'Expresso ideias com entusiasmo e estimulo a participação.',value:'I'},
    {label:'Procuro chegar rapidamente a uma decisão e definir próximos passos.',value:'D'}]},
  {id:'disc9',kind:'disc',text:'Quando recebe uma meta, o que mais combina com você?',options:[
    {label:'Penso em como superar a meta e chegar ao resultado mais rápido.',value:'D'},
    {label:'Busco envolver pessoas e criar energia em torno do objetivo.',value:'I'},
    {label:'Organizo uma rotina constante para avançar com segurança.',value:'S'},
    {label:'Defino critérios, etapas e formas de acompanhar a qualidade.',value:'C'}]},
  {id:'disc10',kind:'disc',text:'Quando alguém discorda de você, qual reação tende a ser mais natural?',options:[
    {label:'Defendo meu ponto com firmeza e foco na decisão.',value:'D'},
    {label:'Procuro explicar meu ponto de forma aberta e persuasiva.',value:'I'},
    {label:'Busco preservar a relação e encontrar um caminho de acordo.',value:'S'},
    {label:'Volto aos fatos, critérios e argumentos para avaliar a questão.',value:'C'}]},
  {id:'disc11',kind:'disc',text:'Qual ambiente tende a deixar você mais confortável?',options:[
    {label:'Um ambiente dinâmico, com desafios e autonomia para agir.',value:'D'},
    {label:'Um ambiente sociável, com troca, reconhecimento e movimento.',value:'I'},
    {label:'Um ambiente cooperativo, previsível e com relações estáveis.',value:'S'},
    {label:'Um ambiente organizado, com padrões claros e atenção à qualidade.',value:'C'}]},
  {id:'disc12',kind:'disc',text:'Ao começar um projeto, qual comportamento mais se parece com você?',options:[
    {label:'Quero entender requisitos, riscos e critérios antes de começar.',value:'C'},
    {label:'Penso em quem envolver e como gerar adesão à ideia.',value:'I'},
    {label:'Organizo um ritmo sustentável e busco continuidade.',value:'S'},
    {label:'Defino o objetivo e começo a agir para ganhar velocidade.',value:'D'}]},
  {id:'disc13',kind:'disc',text:'Quando o prazo está apertado, qual tendência mais aparece?',options:[
    {label:'Acelero decisões e corto o que considero secundário.',value:'D'},
    {label:'Mantenho contato com as pessoas para sustentar energia e engajamento.',value:'I'},
    {label:'Procuro manter calma, ritmo e apoio ao grupo.',value:'S'},
    {label:'Confiro pontos críticos para evitar que a pressa gere erros.',value:'C'}]},
  {id:'disc14',kind:'disc',text:'Qual tipo de reconhecimento mais costuma ter significado para você?',options:[
    {label:'Ser reconhecido pela capacidade de gerar resultados e avançar.',value:'D'},
    {label:'Receber retorno positivo das pessoas e perceber entusiasmo.',value:'I'},
    {label:'Ser valorizado pela confiança, constância e apoio que ofereço.',value:'S'},
    {label:'Ser reconhecido pela qualidade, precisão e consistência do trabalho.',value:'C'}]},
  {id:'disc15',kind:'disc',text:'Quando uma tarefa é repetitiva, qual atitude mais se aproxima da sua?',options:[
    {label:'Procuro uma forma mais rápida ou desafiadora de chegar ao resultado.',value:'D'},
    {label:'Torno a atividade mais leve por meio de interação e troca.',value:'I'},
    {label:'Consigo manter constância e seguir o ritmo necessário.',value:'S'},
    {label:'Aproveito para manter padrão, organização e precisão.',value:'C'}]},
  {id:'disc16',kind:'disc',text:'Quando precisa convencer alguém, qual caminho tende a usar primeiro?',options:[
    {label:'Vou direto ao ponto e mostro o resultado que precisa ser alcançado.',value:'D'},
    {label:'Crio conexão, entusiasmo e adapto minha comunicação à pessoa.',value:'I'},
    {label:'Procuro ouvir, compreender resistências e construir confiança.',value:'S'},
    {label:'Apresento fatos, lógica, critérios e evidências.',value:'C'}]},
  {id:'disc17',kind:'disc',text:'Quando recebe poucas orientações, qual reação combina mais com você?',options:[
    {label:'Gosto da liberdade e sigo em frente tomando as decisões necessárias.',value:'D'},
    {label:'Busco conversar com outras pessoas para trocar ideias e referências.',value:'I'},
    {label:'Procuro confirmar expectativas para manter segurança no caminho.',value:'S'},
    {label:'Busco informações e critérios suficientes para executar corretamente.',value:'C'}]},
  {id:'disc18',kind:'disc',text:'Em conflitos, qual comportamento aparece com mais naturalidade?',options:[
    {label:'Enfrento o assunto e procuro chegar a uma definição.',value:'D'},
    {label:'Uso diálogo e influência para diminuir a tensão.',value:'I'},
    {label:'Procuro conciliar e preservar a relação entre as pessoas.',value:'S'},
    {label:'Separo fatos de opiniões e tento analisar a situação com objetividade.',value:'C'}]},
  {id:'disc19',kind:'disc',text:'Qual frase mais representa seu ritmo de trabalho?',options:[
    {label:'Gosto de velocidade, decisões e sensação de avanço.',value:'D'},
    {label:'Tenho mais energia quando existe interação e variedade.',value:'I'},
    {label:'Prefiro um ritmo constante, sustentável e previsível.',value:'S'},
    {label:'Prefiro um ritmo que permita controle, precisão e qualidade.',value:'C'}]},
  {id:'disc20',kind:'disc',text:'Ao perceber um erro, qual reação tende a vir primeiro?',options:[
    {label:'Corrijo rapidamente e sigo para a próxima etapa.',value:'D'},
    {label:'Converso com os envolvidos e busco resolver de forma leve.',value:'I'},
    {label:'Procuro ajudar a corrigir sem gerar tensão desnecessária.',value:'S'},
    {label:'Investigo a causa e penso em como evitar que aconteça novamente.',value:'C'}]},
  {id:'disc21',kind:'disc',text:'Quando precisa aprender algo novo, qual forma mais combina com você?',options:[
    {label:'Quero testar logo na prática e aprender enquanto avanço.',value:'D'},
    {label:'Aprendo bem conversando, perguntando e trocando experiências.',value:'I'},
    {label:'Prefiro aprender em etapas, com tempo para incorporar o novo.',value:'S'},
    {label:'Gosto de entender fundamentos, instruções e detalhes antes de aplicar.',value:'C'}]},
  {id:'disc22',kind:'disc',text:'Em um grupo sem liderança clara, qual atitude mais provavelmente seria sua?',options:[
    {label:'Assumiria a direção para organizar decisões e próximos passos.',value:'D'},
    {label:'Estimularia a participação e aproximaria as pessoas.',value:'I'},
    {label:'Ajudaria a manter cooperação e continuidade enquanto o grupo se organiza.',value:'S'},
    {label:'Ajudaria a definir informações, critérios e uma forma organizada de trabalhar.',value:'C'}]},
  {id:'disc23',kind:'disc',text:'Quando pensa em um trabalho bem feito, o que pesa mais para você?',options:[
    {label:'Ter alcançado ou superado o resultado esperado.',value:'D'},
    {label:'Ter conseguido envolver pessoas e gerar uma experiência positiva.',value:'I'},
    {label:'Ter mantido constância, confiança e boa cooperação.',value:'S'},
    {label:'Ter entregue com qualidade, precisão e critérios bem atendidos.',value:'C'}]},
  {id:'disc24',kind:'disc',text:'Qual destas descrições mais se aproxima de como você gostaria de ser percebido?',options:[
    {label:'Como alguém decidido, objetivo e capaz de fazer acontecer.',value:'D'},
    {label:'Como alguém comunicativo, inspirador e fácil de se relacionar.',value:'I'},
    {label:'Como alguém confiável, paciente e disposto a apoiar.',value:'S'},
    {label:'Como alguém criterioso, organizado e comprometido com a qualidade.',value:'C'}]},

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
