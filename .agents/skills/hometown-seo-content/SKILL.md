---
name: hometown-seo-content
description: Maintain HometownKC SEO content, data-driven pages, internal links, metadata, schema, OG image routing, and sitemap integrity. Use when changing services, locations, industries, projects, blog/guide pages, keyword targeting, canonical metadata, structured data, or SEO tests.
---

# Hometown SEO Content

Use this skill to keep HometownKC's SEO content model consistent from data records through rendered routes, schema, and sitemaps.

## Read First

- `docs/content-model.md`
- `docs/seo-operations.md`
- `docs/seo/keyword-monitoring.csv`
- `data/services.ts`
- `data/locations.ts`
- `data/industries.ts`
- `data/projects.ts`
- `data/blog.ts`
- `lib/seo/routes.ts`
- `lib/seo/sitemaps.ts`
- `lib/seo/schema.ts`
- `tests/data-integrity.test.ts`
- `tests/seo.test.ts`

## Workflow

1. Identify the affected page family: core route, service, location, industry, case study, or guide/blog page.
2. Trace the page from source data to route generation, metadata, schema, sitemap output, OG image path, and internal links.
3. Choose one bounded fix or addition that improves the requested SEO outcome without creating keyword cannibalization.
4. Update the closest source of truth first. Prefer data records over hard-coded page copy when the page is data-driven.
5. Add or update tests when changing a content-model invariant, priority URL, sitemap expectation, structured data behavior, or pricing guarantee.
6. Run validation before handing off.

## Content Rules

- Keep slugs unique across each data collection.
- Keep internal links pointed at known routes; include hash stripping when tests need to compare route existence.
- Update `updatedAt` when a data-backed page materially changes.
- Keep public pricing aligned unless the user explicitly changes the offer:
  - Websites: `From $800`
  - SEO: `$250/mo`
  - Google Ads: `20% of ad spend`
- Map every priority keyword to one clear primary URL. Do not create two pages with the same primary intent.
- Keep FAQ schema aligned with visible FAQ copy.
- Keep case-study routes limited to projects that have `problem`, `solution`, and `result`.
- Keep `site.routeShareImages`, `coreRouteSeoEntries`, sitemap helpers, and tests in sync when adding core routes.
- Use natural local-service copy; avoid visible keyword stuffing.

## Validation

Run, at minimum:

```bash
npm run test
npm run typecheck
npm run build
```

Use `npm run verify` before release-facing changes. Report any build warning that affects SEO, static generation, or route behavior.

Ask before deployment, Google Search Console work, external SEO tools, live crawling beyond local checks, or changing the business offer.
