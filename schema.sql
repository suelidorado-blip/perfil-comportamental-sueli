create extension if not exists pgcrypto;

create table if not exists public.assessments (
  id uuid primary key default gen_random_uuid(),
  participant_name text not null,
  participant_contact text,
  context text,
  type text not null check (type in ('behavioral','vocational')),
  token text not null unique,
  status text not null default 'pending',
  answers jsonb,
  result jsonb,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  started_at timestamptz,
  completed_at timestamptz,
  expires_at timestamptz,
  used_at timestamptz,
  deleted_at timestamptz,
  deleted_by uuid references auth.users(id),
  deletion_reason text
);

-- Safe upgrades if the table already existed before this version.
alter table public.assessments add column if not exists started_at timestamptz;
alter table public.assessments add column if not exists expires_at timestamptz;
alter table public.assessments add column if not exists used_at timestamptz;
alter table public.assessments add column if not exists deleted_at timestamptz;
alter table public.assessments add column if not exists deleted_by uuid references auth.users(id);
alter table public.assessments add column if not exists deletion_reason text;

alter table public.assessments drop constraint if exists assessments_status_check;
alter table public.assessments add constraint assessments_status_check
  check (status in ('pending','started','completed','cancelled'));

alter table public.assessments enable row level security;

drop policy if exists "admins can read own assessments" on public.assessments;
drop policy if exists "admins can insert own assessments" on public.assessments;
drop policy if exists "admins can update own assessments" on public.assessments;
drop policy if exists "admins can delete own assessments" on public.assessments;

create policy "admins can read own assessments"
on public.assessments for select
to authenticated
using (created_by = auth.uid());

create policy "admins can insert own assessments"
on public.assessments for insert
to authenticated
with check (created_by = auth.uid());

create policy "admins can update own assessments"
on public.assessments for update
to authenticated
using (created_by = auth.uid())
with check (created_by = auth.uid());

create policy "admins can delete own assessments"
on public.assessments for delete
to authenticated
using (created_by = auth.uid());

create index if not exists assessments_name_idx on public.assessments (participant_name);
create index if not exists assessments_created_at_idx on public.assessments (created_at);
create index if not exists assessments_completed_at_idx on public.assessments (completed_at);
create index if not exists assessments_token_idx on public.assessments (token);
create index if not exists assessments_deleted_at_idx on public.assessments (deleted_at);
