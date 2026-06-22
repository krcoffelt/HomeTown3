# Hometown Launch QA Loop

Use before deploys or after changes to SEO, routes, metadata, tracking, env vars, lead capture, redirects, or Netlify deployment behavior.

## Prompt

Run the Hometown Launch QA Loop for the current branch. Use README's post-deploy checklist as the source of truth. Build the app, smoke-test robots, sitemap index and child sitemaps, canonical/meta/OG on priority routes, redirects, `/api/health`, and contact/offer lead paths in a local browser where possible. Do not submit real leads or change Netlify, Supabase, Resend, GTM, GA4, or Search Console without approval. Stop at a clean QA report, a verified fix, or a blocked external dependency.

## Workflow

1. Observe changed files, current scripts, README QA checklist, Next config, Netlify config, sitemap routes, and form surfaces.
2. Run local checks and build.
3. Start a local server when route/browser validation is needed.
4. Check priority routes for status, canonical, title, description, OG/Twitter image, and structured data.
5. Check robots, sitemap index, child sitemaps, redirects, `/api/health`, and local form behavior.
6. Fix one verified release blocker if the user has approved code changes.
7. Re-run the relevant checks and produce a QA report.

## Validation

- `npm run test`
- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Local HTTP/browser checks for affected routes.

## Stop Conditions

- Success: launch QA checklist passes under recorded conditions.
- Clean no-op: no launch-impacting issue is present.
- Blocked: live-only tools, credentials, or approvals are unavailable.
- Approval-required: real form submission, production analytics, Search Console, Netlify, Supabase, Resend, or deploy actions are needed.
- No-progress: the same release blocker persists after a focused fix attempt.

## Approval Boundary

Ask before deploying, changing env vars, sending email, inserting production leads, using GTM/GA4 Preview, using Search Console, or submitting live forms.
