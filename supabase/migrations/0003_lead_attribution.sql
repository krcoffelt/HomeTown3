alter table public.leads
  add column if not exists landing_page text,
  add column if not exists referrer_url text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_term text,
  add column if not exists utm_content text,
  add column if not exists gclid text,
  add column if not exists lead_source text;

create index if not exists leads_lead_source_idx on public.leads (lead_source);
