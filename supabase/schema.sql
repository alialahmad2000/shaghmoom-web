-- Shaghmoom — Supabase schema for lead capture (§9).
-- Run this in the Supabase SQL editor (or via the CLI) once per project.

create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  phone        text not null,
  project_type text,
  city         text,
  message      text,
  budget       text,
  source       text default 'website'
);

-- Enable Row Level Security. The website writes via the SERVICE ROLE key from a
-- server-only route handler, which bypasses RLS — so we add NO public policies.
-- This keeps the table closed to anon/public clients while inserts still work.
alter table public.leads enable row level security;

-- Helpful index for reviewing recent leads.
create index if not exists leads_created_at_idx
  on public.leads (created_at desc);
