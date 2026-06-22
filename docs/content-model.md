# Content Model

Most SEO pages are driven by shared data files. This keeps page creation consistent and makes sitemap/testing coverage easier.

## Services

Source: `data/services.ts`

Routes: `/services/[slug]`

Service records control service page metadata, hero copy, pricing labels, FAQs, proof projects, and related links. Keep pricing labels aligned with the public offers:

- Websites: `From $800`
- SEO: `$250/mo`
- Google Ads: `20% of ad spend`

## Locations

Source: `data/locations.ts`

Routes: `/locations/[slug]`

Location records should have a unique city angle, city-specific SEO title/description, priority services, related project proof, FAQs, and an `updatedAt` date.

## Industries

Source: `data/industries.ts`

Routes: `/industries/[slug]`

Industry records support contractor, home-service, restaurant, and other niche website-design searches. They should point to relevant project proof and avoid duplicating location-page copy.

## Blog Posts

Source: `data/blog.ts`

Routes: each post uses its explicit `href`.

The blog index uses these records for featured/latest articles. `targetKeywords` are for internal planning and tests, not for visible keyword stuffing.

## Projects and Case Studies

Source: `data/projects.ts`

Routes:

- `/work` for the portfolio listing.
- `/case-studies/[slug]` when a project has `problem`, `solution`, and `result`.

Case studies should link back to relevant service, industry, location, and work pages.
