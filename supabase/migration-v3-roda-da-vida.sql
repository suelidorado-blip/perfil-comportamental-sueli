create table if not exists public.people (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  notes text,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.life_wheels (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.people(id) on delete cascade,
  token text not null unique,
  status text not null default 'pending' check (status in ('pending','started','completed','cancelled')),
  answers jsonb,
  result jsonb,
  created_by uuid not null references auth.users(id),
  created_at timestamptz not null default now(),
  started_at timestamptz,
  completed_at timestamptz,
  used_at timestamptz
);

create index if not exists people_created_by_idx on public.people(created_by);
create index if not exists life_wheels_person_idx on public.life_wheels(person_id);
create index if not exists life_wheels_created_by_idx on public.life_wheels(created_by);
create index if not exists life_wheels_token_idx on public.life_wheels(token);

alter table public.people enable row level security;
alter table public.life_wheels enable row level security;

drop policy if exists "people own rows" on public.people;
create policy "people own rows" on public.people for all to authenticated using (created_by=auth.uid()) with check (created_by=auth.uid());

drop policy if exists "life wheels own rows" on public.life_wheels;
create policy "life wheels own rows" on public.life_wheels for all to authenticated using (created_by=auth.uid()) with check (created_by=auth.uid());

grant select, insert, update, delete on public.people to authenticated;
grant select, insert, update, delete on public.life_wheels to authenticated;
