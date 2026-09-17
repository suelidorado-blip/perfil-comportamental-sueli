-- Rode este arquivo no SQL Editor se o banco ja foi criado com uma versao anterior do app.
alter table public.assessments add column if not exists respondent_name text;

grant usage on schema public to authenticated, service_role;
grant select, insert, update, delete on table public.assessments to authenticated, service_role;
