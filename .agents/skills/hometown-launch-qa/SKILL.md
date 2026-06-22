---
name: hometown-launch-qa
description: Run HometownKC launch-readiness and post-deploy QA for SEO, metadata, sitemaps, redirects, tracking, health checks, forms, and Netlify deployment readiness. Use before deploys or after changes to routes, content, lead capture, analytics, env vars, or SEO infrastructure.
---

# Hometown Launch QA

Use this skill to verify that HometownKC is ready to ship and that the live-site QA checklist remains reproducible.

## Read First

- `README.md`
- `package.json`
- `next.config.ts`
- `netlify.toml`
- `docs/testing.md`
- `docs/logging.md`
- `app/api/health/route.ts`
- `app/robots.ts`
- sitemap route files under `app/`
- contact and offer lead form components/actions

## Local QA Workflow

1. Re-read current git status and identify the changed surface.
2. Run the quality commands:
   - `npm run test`
   - `npm run typecheck`
   - `npm run lint`
   - `npm run build`
3. Record build warnings, especially static/dynamic rendering changes and route-size changes.
4. If a local server is available, smoke-test:
   - `/api/health`
   - `/robots.txt`
   - `/sitemap.xml`
   - `/sitemap-pages.xml`
   - `/sitemap-services.xml`
   - `/sitemap-locations.xml`
   - `/sitemap-content.xml`
   - `/sitemap-images.xml`
5. Spot-check priority pages from the README for title, description, canonical URL, OG/Twitter image, and structured data.
6. Verify configured redirects in `next.config.ts` and `netlify.toml`.
7. Check contact and offer forms locally with safe test data or mocks. Do not submit real leads unless approved.

## Approval Boundaries

Ask before:

- Deploying or changing Netlify configuration outside the repo.
- Changing environment variables.
- Sending Resend email.
- Inserting Supabase production rows.
- Using GTM/GA4 Preview or Search Console.
- Submitting live forms.
- Running external crawlers against production.

## Report Format

Return:

- Commands run and pass/fail status.
- Route and metadata checks performed.
- Form/tracking checks performed or explicitly blocked.
- Build warnings and whether they are expected.
- Any production-only checks that still need manual approval.

Never expose secrets or raw lead PII in the QA report.
