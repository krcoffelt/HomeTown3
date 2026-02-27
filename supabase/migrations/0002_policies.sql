alter table public.leads enable row level security;
alter table public.projects enable row level security;
alter table public.services enable row level security;
alter table public.faqs enable row level security;
alter table public.settings enable row level security;

drop policy if exists "public can read projects" on public.projects;
create policy "public can read projects"
  on public.projects for select
  using (true);

drop policy if exists "public can read services" on public.services;
create policy "public can read services"
  on public.services for select
  using (true);

drop policy if exists "public can read faqs" on public.faqs;
create policy "public can read faqs"
  on public.faqs for select
  using (true);

drop policy if exists "public can read settings" on public.settings;
create policy "public can read settings"
  on public.settings for select
  using (true);

