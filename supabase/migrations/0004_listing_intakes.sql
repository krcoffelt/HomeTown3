begin;
create table public.listing_intakes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  client_slug text not null check (length(client_slug) between 1 and 100),
  owner_name text not null check (length(trim(owner_name)) between 1 and 1000),
  owner_email text not null check (length(owner_email) between 3 and 1000),
  data jsonb not null check (jsonb_typeof(data) = 'object' and octet_length(data::text) <= 150000),
  status text not null default 'new' check (status in ('new', 'reviewing', 'complete'))
);
alter table public.listing_intakes enable row level security;
-- Remove default grants explicitly: RLS and grants both enforce the boundary.
revoke all on public.listing_intakes from public, anon, authenticated;
grant insert (id, client_slug, owner_name, owner_email, data) on public.listing_intakes to anon;
grant all on public.listing_intakes to service_role;
create policy listing_intakes_anon_insert on public.listing_intakes for insert to anon with check (status = 'new');
create index listing_intakes_created_at_idx on public.listing_intakes (created_at desc);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('listing-intake-media', 'listing-intake-media', false, 10485760, array['image/jpeg','image/png','image/webp','video/mp4','video/quicktime']);
-- Write-only uploads. No public reads, listing, updates, or deletes.
create policy listing_intake_media_insert on storage.objects for insert to anon with check (
  bucket_id = 'listing-intake-media'
  and name ~ '^[a-z0-9-]+/[0-9a-f-]{36}/[0-9a-f-]{36}\.(jpg|png|webp|mp4|mov)$'
);
commit;
