# Website quote article brief — October 16, 2026

## Selected intent

Article: **What Goes Into a Small-Business Website Quote in Kansas City?**

Route: `/small-business-website-quote-kansas-city`

The article helps an owner scope a project and compare proposals by deliverables, responsibilities, ownership, and exclusions. It publishes no service prices or dollar ranges. Its original comparison table and fill-in request brief support a specific buying decision rather than repeating the existing website, redesign, or builder-comparison guides.

## Evidence supplied by the parent research task

SE Ranking project `12051554`, October 16 recorded check; Google USA desktop engine `102283`, mobile engine `102328`, location `66213` (Kansas).

| Related tracked query | Desktop | Mobile | Reported volume |
| --- | --- | --- | --- |
| small business website cost | Outside tracked top 100 | Unavailable | 210 |
| website design cost Kansas City | Outside tracked top 100 | Outside tracked top 100 | 0 |
| how much does a website cost in Kansas City | Outside tracked top 100 | Outside tracked top 100 | 0 |
| custom website cost for small business | Outside tracked top 100 | Outside tracked top 100 | 0 |

The volume geography is unspecified. A reported zero is not proof of no demand. These are related commercial queries, not measured demand for the article title. This brief records supplied evidence; the authoring task did not independently query SE Ranking. Ranking metrics remain internal.

## Keyword and cannibalization boundary

Proposed informational cluster: `small business website quote`, `website quote Kansas City`, `what should a website quote include`, `how to compare website quotes`. These are editorial targets, not volume-validated keywords.

`/services/website-design` retains commercial website-design and cost intent. Existing keyword-monitoring assignments and retired cost-page redirects remain unchanged. The new article links to the website-design service and existing builder-comparison, general website checklist, and redesign checklist instead of reproducing their full guidance.

## Integration and sources

- The existing guide component renders metadata, WebPage, BlogPosting, breadcrumb, and visible FAQ schema.
- The blog data record supplies incoming blog-hub coverage, content/image sitemaps, and the generated LLM index. The website-design service supplies an additional incoming contextual link.
- The guide links to website design, SEO, existing guides, work, relevant location pages, and `/contact#form`.
- Approved existing brand imagery is reused with descriptive alt text.
- Google Search Central's hiring guidance supports SEO due-diligence questions and the warning about ranking guarantees.
- Google's site-move documentation supports the URL-migration questions.
- W3C WAI Easy Checks supports initial accessibility checks and their limitations.

The article links to those three primary sources in its visible source section. Practical quote-comparison advice and hypothetical local scenarios are original editorial recommendations, not claimed client outcomes.

## Review boundary

Local changes only. No commit, push, deployment, indexing request, external account change, or lead-form submission is part of this work. The inherited `PROJECT_SPEC.md` requirement could not be fulfilled because that file is absent from this checkout and its parent Downloads directory; current content-model and SEO instructions controlled the implementation.

## Local validation completed

- `npm run verify` passed after the final mobile-layout correction: TypeScript, lint, 51 tests across seven files, and production build. The new article is statically generated.
- `git diff --check` passed.
- Browser QA at 1440×1000 and 390×844 verified readable layout; mobile document width stayed at 390px. The 560px table scrolls within a 348px container, with scrolling confirmed programmatically.
- Rendered metadata has the self-referencing canonical, article Open Graph type, and one H1. Structured data includes WebPage, BreadcrumbList, FAQPage, and BlogPosting, in addition to shared business entities. All jump-link targets exist and no dollar prices appear.
- All 21 distinct internal link destinations on the rendered page returned 200 locally.
- `/blog`, `/services/website-design`, `/sitemap-content.xml`, `/sitemap-images.xml`, and `/llms.txt` returned 200 and contain the new article route.
- No contact form was submitted and no live production checks were performed.
- Existing build notices: deprecated `next lint`, eight-month-old Browserslist data, and the edge-runtime static-generation warning. A browser image-preload warning appeared during viewport switching; there were no browser console errors.
- Review artifacts (ignored local output): `output/website-quote-article-review.md` and desktop/mobile hero and table screenshots under `output/playwright/website-quote-*.png`.
