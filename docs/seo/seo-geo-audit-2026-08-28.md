# SEO/GEO Audit — 2026-08-28

## Outcome

- No critical crawlability, indexation, metadata, canonical, internal-link, sitemap, or structured-data defects remain in the production-output crawl.
- All 140 monitored queries map uniquely to 14 canonical, answer-ready pages.
- The highest-leverage measurement defect was fixed: SE Ranking now uses `Hometown Marketing Agency` as the tracked brand.
- The same five buyer-intent prompts are now configured across ChatGPT, Google AI Overview, Google AI Mode, Perplexity, and Gemini.
- The largest remaining high-impact gap is independent entity authority and citations, not another on-site page.

## Crawl and Answer-Readiness Gate

The same local production-output crawl covered 38 canonical HTML pages from four non-image sitemaps.

- Non-200 sitemap URLs: 0
- Missing or long titles/descriptions: 0
- Canonical mismatches: 0
- Missing or invalid structured data: 0
- Missing or duplicate H1s: 0
- Broken internal links: 0
- Orphan sitemap pages: 0
- Query-map duplicates: 0
- Answer-readiness gaps: 0 of 14 mapped target pages

Answer readiness required a successful canonical page, one H1, a useful meta description, substantive visible copy, and visible FAQ content aligned with FAQ schema.

## Fixes Applied

1. Corrected the SE Ranking AI Result Tracker brand from `Hometown Marketing KC` to `Hometown Marketing Agency`.
2. Added visible first-party measurement-source notes to the Noble Hardwoods, Plate KC, and Wrapped Up Moving quantified case studies.
3. Added a direct Johnson County website-design answer block and aligned FAQ schema on `/locations`.
4. Synchronized all 108 priority-1/2 queries to both Google desktop and Google mobile, with the canonical target URL recorded for every query.
5. Added the one missing priority query, `website builders for small business`, to both tracked Google profiles.
6. Added the existing five-prompt buyer-intent benchmark to Google AI Overview, Google AI Mode, Perplexity, and Gemini.

## Search Benchmark

The fresh 216-position check was still processing at the final snapshot. Configuration coverage was complete at 108 of 108 queries on both profiles; returned results were partial.

| Engine | Results returned | Top 3 | Top 10 | Top 20 | Top 100 |
| --- | ---: | ---: | ---: | ---: | ---: |
| Google desktop | 92/108 | 7 | 9 | 15 | 27 |
| Google mobile | 105/108 | 6 | 9 | 14 | 27 |

Do not compare the partial counts as final movement. The important completed fix is like-for-like query and target coverage across both profiles.

## AI Answer Benchmark

All 25 prompt-engine answers completed on 2026-08-28.

| Engine | Hometown mentions | Hometown-linked answers |
| --- | ---: | ---: |
| ChatGPT | 2/5 | 2/5 |
| Google AI Overview | 0/5 | 0/5 |
| Google AI Mode | 0/5 | 0/5 |
| Perplexity | 1/5 | 0/5 |
| Gemini | 0/5 | 0/5 |
| **Total** | **3/25** | **2/25** |

ChatGPT cited four Hometown URLs across two answers: the homepage twice, `/about`, and `/services`. The cached ChatGPT tracker tile still reports 0% mention presence because the answers were processed before the brand correction; the answer payloads themselves contain two detected Hometown variants.

The most-cited domains across the 25 answers were Clutch (33 citations), Google (27), Lifted Logic (19), Kansas City Web Design & SEO (17), Thrive (17), and KC Web Specialists (15). `hometownkc.agency` received four citations. This confirms that independent authority and corroboration are the dominant remaining gap.

## Validation

- `npm run verify`: passed
- TypeScript: passed
- Lint: passed with the existing Next.js lint deprecation notice
- Vitest: 41/41 passed
- Production build: passed; the existing edge-runtime static-generation warning remains

## Stop State

The technical and page-intent gates are clean. The loop stops in an approval/external-dependency state because the remaining high-impact work requires deployment and controlled or earned third-party authority: verified directory profiles, client/partner attribution links, reviews, and other independent mentions. Those actions cannot be completed truthfully through on-site code alone.
