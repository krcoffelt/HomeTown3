# Blue River Home Care and ACS Painting KC case studies

Prepared October 29, 2026. Project content lives in `data/projects.ts` and uses the existing shared case-study template.

## Implemented

- `/case-studies/blue-river-home-care` and `/case-studies/acs-painting-kc` use the no-metrics versions of the story. Neither page publishes placeholder numbers, unapproved testimonials, or claims about lead growth.
- Five real 1440 × 1000 JPEG screenshots per client, with descriptive alt text. Blue River screenshots show public pages and an empty consultation form; no submitted care inquiries or health information were captured.
- Both projects appear on `/work`, the homepage selected-work section, the homepage website reel, and the existing text-based client strip.
- Next-project chain: ZJ Carpentry → Blue River → ACS Painting → Noble Hardwoods.
- Relevant service and industry links on both case studies, Blue River proof on the home-services industry page, ACS proof on contractor and home-services industry pages, and an ACS link from the contractor website checklist.
- Self-canonical metadata, index/follow, `/og/home`, WebPage, BreadcrumbList, and CreativeWork schema. Result text is reused in schema descriptions.
- Pages, content, and image sitemap inclusion. Case studies remain in the content sitemap for continuity and are also included in the pages sitemap as requested.
- Blue River source footer updated at `/Users/kylecoffelt/Documents/BlueRiverHomeCare/src/components/layout/Footer.astro` with the Hometown credit, `target="_blank"`, and `rel="noopener"`. This is a separate repository change and must be deployed separately.

## Before adding performance claims

No connected GA4, Search Console, or Google Business Profile reporting tool was available for this build. Do not treat counts of published guides, service-area pages, or projects as performance results.

For each client, obtain an aggregate report with dates and the comparison period:

| Client | Outcome | Evidence |
| --- | --- | --- |
| Blue River | Consultation requests | Analytics lead events or aggregate consultation records |
| Blue River | Calls | GBP reporting and deduplicated website call events |
| Blue River | Relevant local search impressions | Search Console query filters and comparison dates |
| Blue River | New care clients | Client-approved aggregate outcomes from Chris |
| ACS | Estimate requests | Analytics lead events or aggregate estimate records, with prior-site baseline if available |
| ACS | Relevant Northland search impressions | Search Console query filters and comparison dates |
| ACS | Calls and website clicks | GBP reporting and website call events; label each measure clearly |
| ACS | Booked jobs or revenue | Client-approved aggregate outcomes from Ashlie or Shaun |

Confirm the services list against the engagement scope before publication; current labels reflect the supplied build instructions. Google Ads and Conversion Tracking are not claimed for either client.

Get written approval of each quote, attribution, and any published business numbers. Add approved metrics using `metrics`, `measurementSource`, and `testimonial` on the project record, then update the result, summary, and `updatedAt`. The existing template displays the measurement section when metrics are available.

Do not publish raw lead records, client names, care details, or screenshots of reporting that reveal personal information.

## Release follow-up

- Deploy Hometown and the separate Blue River footer change through their normal release processes.
- After the case-study URLs are live, request indexing for both in Search Console and resubmit the sitemap.
- Optional: obtain an old ACS website screenshot with a verified capture date before adding a redesign comparison.
- Optional: share on GBP and LinkedIn after publication. No outreach or social posts were sent as part of this build.

## Validation

Hometown: `npm run verify` passed, including 57 tests, TypeScript, ESLint, and production build. The build retains the existing warning that an Edge runtime page cannot be statically generated; both new case studies are statically generated.

Blue River: `npm run check` passed with zero errors, warnings, or hints; `npm run build` passed.

Browser checks passed at 1440px and 390px: no horizontal overflow, all project images loaded, correct canonical/robots/OG metadata, and WebPage/BreadcrumbList/CreativeWork schema. Blue River has 423 visible words and ACS has 428. Local health, robots, sitemap, homepage, work, industry, and checklist routes returned HTTP 200. Browser evidence is saved under `output/playwright/`. No live forms were submitted, emails sent, or production tracking records created.
