# Hometown SEO 90-Day Gameplan

Primary goal: generate website design and website redesign leads in Kansas City and nearby cities while protecting one primary URL per keyword intent.

## July 6 Report Baseline

Source: SE Ranking project report for June 30, 2026 through July 6, 2026.

- Keywords in SERPs: 47.
- Keywords in top 3: 7.
- Keywords in top 10: 19.
- Keywords in top 30: 41.
- Reported visibility: 18% in the summary panel, with the distribution panel also showing 0% search visibility and average position near 85.
- Largest reported drops: `restaurant website design Kansas City`, `local business website design kansas city`, `website design Leawood KS`, `kansas city website design`, and `website design kansas city`.
- AI metrics: 0% mention presence and 20% link presence for tracked prompts.

Treat these numbers as a recovery and prioritization signal, not a full strategy pivot. Confirm trend quality against Google Search Console over the next 14 and 28 days before creating new page families.

## Week 1-2: Recovery And Technical Baseline

- Keep `/services/website-design` as the central target for `website design Kansas City`, `web design Kansas City`, `website designer Kansas City`, and website design company or agency variants.
- Keep `/services/small-business-websites` as the target for `small business website design Kansas City`, `local business website design Kansas City`, `affordable web design Kansas City`, and custom small-business website terms.
- Keep `/locations/leawood-ks` as the target for `website design Leawood KS`, `Leawood web design`, and `website designer Leawood`.
- Keep `/industries/restaurant-website-design-kansas-city` as the target for `restaurant website design Kansas City` and restaurant web design variants.
- Keep HVAC and Johnson County terms monitored without creating new thin pages. Use `/industries/home-services-website-design-kansas-city` for HVAC website design and `/locations` for Johnson County web design until there is stronger proof or query volume.
- Verify that `docs/seo/keyword-monitoring.csv` contains one target URL for each tracked report keyword and that every target route exists.
- Run `npm run test`, `npm run typecheck`, `npm run build`, and `npm run verify` after SEO-content changes.

## Week 3-4: On-Page And Internal Links

- Strengthen internal links to `/services/website-design` from homepage, pricing, work, service, industry, guide, and case-study pages.
- Add contextual links to `/services/small-business-websites` where copy discusses local business websites, affordable websites, custom websites for small business, and website-builder alternatives.
- Add contextual links to `/locations/leawood-ks` from homepage service previews, work, pricing, services, and the Plate KC case study.
- Add contextual links to `/industries/restaurant-website-design-kansas-city` from homepage service previews, services, work, pricing, and the Plate KC case study.
- Keep contractor and home-service support flowing through `/industries/construction-website-design-kansas-city`, `/industries/home-services-website-design-kansas-city`, ZJ Carpentry, DecksRXKC, and contractor guide content.

## Week 5-8: Search Console And GBP Operations

These steps require separate approval before execution.

- Verify or review the Google Search Console domain property for `hometownkc.agency`.
- Submit or resubmit:
  - `https://hometownkc.agency/sitemap.xml`
  - `https://hometownkc.agency/sitemap-pages.xml`
  - `https://hometownkc.agency/sitemap-services.xml`
  - `https://hometownkc.agency/sitemap-locations.xml`
  - `https://hometownkc.agency/sitemap-content.xml`
  - `https://hometownkc.agency/sitemap-images.xml`
- Request indexing for:
  - `https://hometownkc.agency/services/website-design`
  - `https://hometownkc.agency/services/small-business-websites`
  - `https://hometownkc.agency/services/website-redesign`
  - `https://hometownkc.agency/locations/leawood-ks`
  - `https://hometownkc.agency/industries/restaurant-website-design-kansas-city`
  - `https://hometownkc.agency/industries/construction-website-design-kansas-city`
  - `https://hometownkc.agency/industries/home-services-website-design-kansas-city`
  - `https://hometownkc.agency/website-design-cost-kansas-city`
  - strong case-study URLs, especially Plate KC, ZJ Carpentry, Wrapped Up Moving, and Project Salvation.
- Export GSC Performance data with query, page, clicks, impressions, CTR, and average position.
- Confirm Google Business Profile NAP matches the website:
  - Name: Hometown Marketing Agency
  - Phone: 913-991-6641
  - URL: `https://hometownkc.agency/`
  - Service area: Kansas City metro, Overland Park, Olathe, Leawood, Lenexa, Shawnee.
- Add or refresh GBP services for website design, web design, website redesign, local SEO, Google Ads management, social media management, graphic design, and brand identity.
- Add screenshots or photos from recent website projects to GBP where approved.

## Week 9-12: Proof, AI Discoverability, And Authority

- Keep `public/llms.txt` aligned with live pricing, service areas, proof projects, and canonical URLs.
- Review AI prompt visibility monthly: mention presence, link presence, and whether citations point to the correct canonical pages.
- Add or refresh client proof where it supports existing page intent, especially Plate KC for restaurant and Leawood, ZJ Carpentry for contractor, Wrapped Up Moving for home services, and Lupi Docs for brand/publishing proof.
- Ask happy clients for Google reviews that naturally mention the service and city.
- Add local citations or partner backlinks only where business information can stay consistent.
- Ask clients and partners to link back to Hometown when they mention the website project.

## Weekly Reporting

Track every Monday:

- Organic clicks and impressions from GSC.
- Ranking movement for the keyword list in `docs/seo/keyword-monitoring.csv`.
- GBP calls, website clicks, direction requests, and profile views.
- Quote-form starts, form submissions, phone clicks, and email clicks.
- Pages with indexing warnings or crawl issues.
- AI mention presence and AI link presence for tracked prompts.

## Decision Rules

- Do not create a new SEO page unless the keyword has a distinct intent, enough supporting proof, and a clear internal-link source.
- Do not create thin pages for HVAC, Johnson County, or each adjacent suburb until GSC and ranking data justify them.
- Do not split a keyword away from its current target URL unless there is evidence of cannibalization or mismatched intent.
- Preserve public pricing unless the business offer changes.
