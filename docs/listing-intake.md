# Listing intake

Route: `/intake/acs-painting-kc`. Add clients in `lib/intake/config.ts` under a new slug; set `serviceOptions` to customize the services checklist for another kind of business. Unknown slugs return 404. This is an unlisted, noindex intake link, not an authenticated client portal. Do not put confidential client details into prefill configs: page prefills are visible to anyone with its link. Home addresses provided by clients stay in the private submission JSON and are not rendered publicly.

## Setup

1. Apply `supabase/migrations/0004_listing_intakes.sql` in the existing project's SQL Editor (or your normal migration process). It creates `listing_intakes`, enables RLS, grants only column-limited INSERT to `anon`, and creates the private `listing-intake-media` bucket with write-only anonymous uploads. There are no anonymous SELECT, UPDATE, or DELETE grants on the intake table. `authenticated` has no table access either; staff can use the dashboard or service role.
2. Ensure the site build/runtime has the existing `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`. The public key is used for both the server API insert and direct browser media uploads. The service key is not used by this feature and never reaches the page.
3. Deploy the site using the existing deployment process. No new email keys or services are required. Email notification has been omitted following Kyle's request to remove Resend; the form does not claim that an email was delivered.
4. Open the route on desktop and mobile and complete a synthetic test intake. Use a test name and `intake-test@example.com`; do not sign or grant permissions on behalf of a real client.
5. Confirm exactly one row appears in Supabase `public.listing_intakes`, with all answers, confirmation flags, original prefills, media references, owner fields, and `status = new`. Confirm a retry using the same intake ID does not create another row.
6. With the public key, attempt SELECT, UPDATE, and DELETE on that test UUID. Each must be rejected. Check anonymous downloads and object listing against `listing-intake-media` are denied; uploads should work. Inspect existing storage policies as well: permissive policies elsewhere must not expose this bucket.

## SQL checks after migration

Run as a database administrator. The privilege results should all be false except INSERT of the allowed columns; the anon role has column-level INSERT, not a table-wide INSERT grant.

```sql
select relrowsecurity from pg_class where oid = 'public.listing_intakes'::regclass;
select has_table_privilege('anon', 'public.listing_intakes', 'SELECT') as can_read,
       has_table_privilege('anon', 'public.listing_intakes', 'UPDATE') as can_update,
       has_table_privilege('anon', 'public.listing_intakes', 'DELETE') as can_delete,
       has_column_privilege('anon', 'public.listing_intakes', 'data', 'INSERT') as can_insert_data;
select policyname, roles, cmd from pg_policies where tablename = 'listing_intakes';
select id, public, file_size_limit from storage.buckets where id = 'listing-intake-media';
```

## Behavior and operations

- Twelve sections, with required owner name/email, main phone confirmation or correction, five permissions, signature, and date. Review-reply refusal conflicts with the required permission and is surfaced rather than silently overwritten.
- Drafts save to this browser's localStorage, expire after 30 days, and are removed after confirmed submission. Expiration is enforced when reopening the page; the browser is not a secure vault. A visible control clears the local draft. Files are uploaded when selected, separately from draft answers, and are not stored as file bytes in localStorage.
- Uploads are optional, limited to 25 files and 10 MB/file. Allowed types: JPEG, PNG, WebP, MP4, MOV. Use a shared folder link for larger files. No public media URLs are generated. Staff can access files through Supabase Storage. Abandoned uploads can be identified by comparing the UUID folder against submitted row IDs; use a deliberate retention process to clean them up.
- API failures keep the draft and show a retry message. A stable UUID makes retrying the same submission idempotent without granting anonymous read or update access. A new browser/device or clearing the draft creates a new ID.
- No intake answers or owner contact details are logged. Marketing tag/consent components are omitted on direct intake visits. Never add session replay to this route.
- No navigation or sitemap entries are added. Both page metadata and the HTTP X-Robots-Tag mark the route noindex. Crawling remains allowed so search engines can see noindex.
- Anonymous write access is intentional per the brief. It is not one-submission-per-client authentication. The UI prevents accidental double submission in one draft, but a new browser can submit again. Consider invitation tokens and a distributed rate limit if the unlisted URL attracts abuse.

## Verification status in this checkout

Last checked November 6, 2026. Migration 0004 was applied through the Supabase SQL Editor in project `hznyoeypttgulttwmtba`. A synthetic form submission is persisted with status `new`, 156 answer fields, and one uploaded-media reference. An actual REST SELECT using the public key returns HTTP 401 / PostgreSQL code `42501` and exposes no rows. Earlier SQL checks confirmed RLS enabled, anon INSERT allowed, anon SELECT/UPDATE/DELETE denied, and the media bucket private. The most recent local verification passed all 74 tests, typecheck, lint, and production build.

Deployment remains pending: `https://hometownkc.agency/intake/acs-painting-kc` currently returns HTTP 404. The prior local preview server has stopped. Publish the site changes and run the final submission, mobile, noindex, and sitemap smoke checks on the deployed route before sharing it with a client. Email notifications are intentionally omitted.
