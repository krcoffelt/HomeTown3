create type lead_status as enum ('new', 'contacted', 'quoted', 'won', 'lost');

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  business_name text not null,
  email text not null,
  phone text,
  service_needed text not null,
  project_details text not null,
  status lead_status not null default 'new',
  notes text
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title text not null,
  slug text not null unique,
  client_name text not null,
  industry text not null,
  summary text not null,
  services_provided text[] not null default '{}',
  featured_image_url text not null,
  gallery text[] not null default '{}',
  live_url text,
  is_featured boolean not null default false,
  sort_order integer not null default 100
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  short_description text not null,
  full_description text not null,
  price text,
  is_featured boolean not null default false,
  sort_order integer not null default 100
);

create table if not exists public.faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  page text not null,
  sort_order integer not null default 100
);

create table if not exists public.settings (
  id uuid primary key default gen_random_uuid(),
  site_title text not null,
  site_description text not null,
  contact_email text not null,
  contact_phone text not null,
  hero_price numeric(10,2) not null,
  regular_price numeric(10,2) not null,
  announcement_text text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists projects_featured_sort_idx on public.projects (is_featured desc, sort_order asc);

