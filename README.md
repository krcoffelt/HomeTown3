# HometownKC Website

## Local Development

Install dependencies and run the local Next.js server:

```bash
npm install
npm run dev
```

Useful quality commands:

- `npm run typecheck` checks TypeScript.
- `npm run lint` checks Next.js lint rules.
- `npm run test` runs the Vitest unit and data-integrity tests.
- `npm run test:watch` runs tests while editing.
- `npm run test:coverage` runs tests with coverage output.
- `npm run build` verifies the production build.
- `npm run verify` runs typecheck, lint, test, and build in order.

Run `npm run verify` before pushing SEO, pricing, content-model, or lead-form changes.

## Lead Form Environment Variables

Set these in Netlify for lead capture and notifications:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `LEAD_FROM_EMAIL`
- `LEAD_NOTIFY_EMAIL`

The app also accepts the older aliases `FROM_EMAIL` and `LEAD_NOTIFICATION_EMAIL`, but the names above are the canonical ones.

## Google Tag Manager (GTM) Setup

1. In Netlify, set environment variable `NEXT_PUBLIC_GTM_ID` to `GTM-5DWRG7GW` for the deployed site.
2. Redeploy the site after saving the variable.
3. Verify tracking:
   - GTM intentionally loads after consent or first interaction (`pointerdown`, `keydown`, or `scroll`), not immediately at first paint.
   - Open GTM Preview (Tag Assistant), connect to the site, interact with the page, and confirm container load + fired tags.
   - In GA4 (`G-4FYSV8WK5P`), open Realtime and confirm active page views/events while preview is connected.
   - Optional consent integration: dispatch `window.dispatchEvent(new Event("analytics-consent-granted"))` after consent acceptance to load GTM immediately.
   - Do not paste the raw GTM `<script>`/`<noscript>` snippets directly in code; this project loads GTM through the app GTM loader component.

## GTM Configuration To Create

- Google tag:
  - Measurement ID: `G-4FYSV8WK5P`
  - Trigger: `All Pages`
- Event tags:
  - `view_offer_page`
  - `cta_click`
  - `phone_click`
  - `email_click`
  - `form_start`
  - `form_submit`
  - `generate_lead` (form submit)

## Post-Deploy SEO + Trust QA

Run this checklist after any major SEO, metadata, tracking, or form changes:

### Crawl + metadata

- Verify `/robots.txt` returns the current sitemap list:
  - `/sitemap.xml`
  - `/sitemap-pages.xml`
  - `/sitemap-services.xml`
  - `/sitemap-images.xml`
- Verify the sitemap index loads and each child sitemap returns valid XML.
- Spot-check canonical tags, page titles, meta descriptions, and OG/Twitter images on:
  - `/`
  - `/services`
  - one `/services/[slug]`
  - `/work`
  - `/pricing`
  - `/contact`
  - `/about`
  - `/website-offer-800`

### Structured data

- Validate schema on homepage, a service page, `/about`, and `/website-offer-800`.
- Confirm breadcrumb schema matches the visible page hierarchy.
- Confirm FAQ schema still matches the visible FAQ copy where used.

### Lead capture + tracking

- Submit a test lead through one representative embedded general form on an action page, such as `/services/website-design`, and confirm:
  - Supabase insert succeeds
  - email notification is sent
  - GTM / GA4 events fire for `form_start`, `form_submit`, and success
- Submit a test lead through the minimal `/contact` page form and confirm the same.
- Submit a test lead through `/website-offer-800` and confirm the offer form path separately.
- Trigger an invalid form submit and confirm `form_error` is available in GTM preview.
- Click a live work example and confirm `outbound_website_click` is available in GTM preview.

### Supabase schema parity

- Confirm the `leads` table includes the attribution columns from `supabase/migrations/0003_lead_attribution.sql`.
- If production is behind, the app will fall back to core lead fields only, but schema parity should still be restored.

### Redirects + trust routes

- Verify these redirects still resolve correctly:
  - `/services/logo-and-brand-work` -> `/services/brand-identity`
  - `/services/google-business-profile-setup` -> `/services/search-engine-optimization`
  - `/services/meta-ads-management` -> `/services/social-media-management`
- Verify `/about`, `/privacy-policy`, `/terms-of-service`, and `/cookie-policy` are linked from the main site and return the expected metadata and schema.
