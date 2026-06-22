# Hometown SEO Content Integrity Loop

Use when adding, changing, or auditing HometownKC SEO pages, keyword targeting, service-area content, internal links, schema, or sitemaps.

## Prompt

Run the Hometown SEO Content Integrity Loop. Inspect `data/*`, `lib/seo/*`, sitemap routes, `docs/seo/keyword-monitoring.csv`, relevant pages, and SEO/data tests for one highest-impact content-model issue: broken internal links, stale metadata, missing sitemap/schema coverage, duplicate intent, weak priority-page support, or pricing drift. Ask before editing. After one bounded fix, run `npm run test`, `npm run typecheck`, and `npm run build`. Stop when checks pass, no confirmed high-impact issue remains, progress stalls, or external approval is needed.

## Workflow

1. Observe current routes, content records, keyword targets, internal links, schema helpers, and sitemap output.
2. Choose the single highest-impact confirmed issue.
3. Make one bounded change, preferably in the closest source-of-truth data file.
4. Add or update tests for changed invariants.
5. Run validation and keep the change only if it passes.
6. Record the issue, files changed, checks, and any remaining SEO follow-up.

## Validation

- `npm run test`
- `npm run typecheck`
- `npm run build`
- Use `npm run verify` before release-facing changes.

## Stop Conditions

- Success: the selected issue is fixed and validation passes.
- Clean no-op: no confirmed high-impact issue is present.
- Blocked: needed evidence or external access is unavailable.
- Approval-required: deploy, live crawl, Search Console, or business-offer changes are needed.
- No-progress: the same validation failure repeats after a focused fix attempt.

## Approval Boundary

Ask before deploying, changing production settings, using Google Search Console, running external SEO tools, crawling production heavily, or changing public pricing/offer strategy.
