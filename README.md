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
