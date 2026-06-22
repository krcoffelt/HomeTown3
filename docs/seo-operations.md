# SEO Operations

Use this workflow when adding or changing SEO pages.

## Metadata

- Put page-level SEO copy close to the data source when the page is data-driven.
- Keep titles focused and readable; `createPageMetadata` appends `| Hometown`.
- Keep descriptions specific to the page intent and avoid keyword stuffing.
- Every indexable page should keep a self-referencing canonical.

## Sitemaps

Sitemap output is generated from:

- `lib/seo/routes.ts` for core pages.
- `data/services.ts` for service pages.
- `data/locations.ts` for location pages.
- `data/industries.ts`, `data/projects.ts`, and `data/blog.ts` for content pages.

When a page is added or meaningfully changed:

1. Add or update the data record.
2. Set `updatedAt` to the launch or update date.
3. Run `npm run test`.
4. Run `npm run build`.
5. After deploy, resubmit the relevant sitemap in Google Search Console.

## Indexing

Request indexing manually for commercial priority pages first:

- Website design pages.
- Pricing and website cost pages.
- Industry pages.
- Strong case studies.
- Location pages tied to Google Business Profile service areas.

Legal pages can remain crawlable, but they do not need URL Inspection quota unless Search Console reports an actual error.

## Content Updates

Before publishing new content:

- Confirm the target page does not cannibalize an existing page.
- Link the new page from at least one relevant hub page.
- Link back to `/services/website-design` when the post supports website-design leads.
- Add a sitemap-backed data entry if the page is a blog, industry, service, location, or case-study page.
- Run `npm run verify`.
