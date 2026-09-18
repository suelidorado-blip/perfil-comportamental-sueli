# App de Perfil Comportamental e Teste Vocacional

Aplicacao em Next.js + Supabase, preparada para deploy no Vercel.

## O que esta versao inclui

- Login administrativo com e-mail e senha via Supabase Auth.
- Participantes sem conta e sem acesso ao painel.
- Link individual e de uso unico para cada avaliacao.
- Perfil comportamental: DISC, estilo social, valores de Spranger e preferencias de ambiente.
- Teste vocacional separado.
- Resultados e relatorios detalhados para gestao e desenvolvimento pessoal.
- Impressao/salvamento dos relatorios em PDF pelo navegador.
- Busca por nome e filtro por data inicial/final.
- Exclusao logica de relatorios, com lixeira, restauracao e exclusao definitiva.
- Registro de motivo da exclusao.

## Regra de link de uso unico

Cada avaliacao recebe um token exclusivo. Quando o formulario e enviado com sucesso, o servidor grava `used_at` e muda o status para `completed`. Depois disso, qualquer nova tentativa com o mesmo link e bloqueada no servidor.

## Banco de dados

Execute `supabase/schema.sql` no SQL Editor do Supabase. O arquivo pode ser executado tanto em um projeto novo quanto sobre a versao anterior, pois inclui comandos de upgrade para as novas colunas.

## Variaveis de ambiente no Vercel

Crie estas variaveis:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_APP_URL`

`NEXT_PUBLIC_APP_URL` deve ser a URL publica do app, por exemplo `https://seu-app.vercel.app`.

## Primeiro usuario administrador

No Supabase, use Authentication > Users para criar o primeiro usuario com e-mail e senha. Somente usuarios autenticados conseguem acessar o painel administrativo.

## Deploy

1. Suba esta pasta para um repositorio GitHub.
2. Importe o repositorio no Vercel.
3. Configure as variaveis de ambiente.
4. Rode o SQL do Supabase.
5. Faça o deploy.

## Atualizacao v2 - avaliacao comportamental em blocos

O teste comportamental agora possui 64 perguntas em quatro etapas:
1. DISC - 24 perguntas (6 para cada dimensao D/I/S/C)
2. Estilo de comunicacao - 10 perguntas
3. Valores de Spranger - 18 perguntas
4. Preferencias no ambiente de trabalho - 12 perguntas

O participante precisa informar o nome completo antes de iniciar. O nome respondido fica salvo em `respondent_name`.

Se o seu banco Supabase ja existe, rode no SQL Editor:
`supabase/migration-v2-blocos.sql`

Depois envie os arquivos atualizados ao GitHub e faca push. O Vercel fara novo deploy automaticamente.

## Atualizacao v3 - teste vocacional ampliado

O Teste Vocacional foi ampliado para 62 perguntas em quatro etapas:
1. Interesses profissionais RIASEC - 30 perguntas
2. Preferencias de trabalho - 10 perguntas
3. Habilidades percebidas - 12 perguntas
4. Valores de carreira - 10 perguntas

O relatorio vocacional agora apresenta:
- mapa percentual RIASEC e codigo das tres areas predominantes;
- explicacao das seis areas de interesse;
- preferencias de ambiente e rotina de trabalho;
- habilidades percebidas;
- valores de carreira;
- cruzamento entre interesse e habilidade percebida;
- familias profissionais e cursos para investigar;
- ambientes de trabalho a explorar;
- perguntas de reflexao e proximos passos.

O teste vocacional tambem solicita o nome completo na entrada do link.

### Banco de dados
Se voce ja executou a migration v2 e possui a coluna `respondent_name`, esta atualizacao nao exige nova migration do Supabase. As novas respostas e resultados continuam sendo armazenados nos campos JSON existentes.

## Atualizacao 18/09/2026 - Relatorio resumido
Avaliacoes comportamentais concluidas agora oferecem tres leituras: Resumo, Gerencial e Pessoal. O Resumo gera automaticamente uma leitura integrada em sete secoes, cruzando DISC, comunicacao, ambiente de trabalho e motivadores.


## Atualização 0.5.0 - Relatórios visuais
Relatórios com páginas separadas, gráficos coloridos e cores DISC padronizadas (D vermelho, I amarelo, S verde, C azul). Não requer migration no Supabase.


## Atualização - relatórios A4 retrato e ações de PDF/impressão
- Todos os relatórios (Resumo, Gerencial, Pessoal e Vocacional) usam A4 em orientação retrato no modo de impressão.
- Cada bloco principal é separado por página para preservar a leitura e evitar cortes.
- Todos os relatórios exibem dois botões: **Salvar em PDF** e **Imprimir**.
- O botão **Salvar em PDF** abre a janela de impressão já com o nome do relatório preparado; selecione **Salvar como PDF** no navegador.
- O botão **Imprimir** abre a mesma janela para envio à impressora física.
- Os botões não aparecem no PDF nem na impressão.
