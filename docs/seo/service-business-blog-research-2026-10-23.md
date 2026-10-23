# Service-business SEO article: research and intent map

Research date: October 23, 2026. Source: connected SE Ranking tools, Hometown project 12051554, plus the existing repository content inventory. No tracking settings were changed.

## Decision

Create `/seo-for-service-businesses`, an informational guide to choosing target jobs, mapping service keywords to pages, maintaining accurate local coverage, and diagnosing the path from visibility to qualified inquiries. Primary keyword: `seo for service businesses`.

The existing local SEO checklist already serves broad checklist intent. The new article focuses on service-business prioritization and page decisions. Keep commercial Kansas City agency and service terms assigned to `/services/search-engine-optimization`. Keep `SEO for local businesses` assigned to that service page; the new guide supports it through internal links rather than claiming identical intent.

## SE Ranking keyword demand

Tool: `data_getkeywordsmetrics`, source `us`, seven seeds, retrieved October 23, 2026. These are US database estimates, not Kansas City search counts or guaranteed traffic. Do not sum related variants as unique audiences. Difficulty scores are vendor estimates, not ranking predictions.

| Keyword | Estimated monthly volume | Difficulty | Returned intent |
| --- | ---: | ---: | --- |
| seo for service businesses | 90 | 11 | Informational |
| seo for service based businesses | 110 | 9 | Informational |
| local seo for service area businesses | 90 | 21 | Local / commercial |
| service area business seo | 90 | 26 | Informational |
| seo for home services | 210 | 19 | Informational |
| local seo for contractors | 480 | 0 | Informational |
| how to rank higher on google maps | 260 | 6 | Informational |

The first four phrases form the bounded article cluster. Contractor, home-service, and Maps phrases are adjacent opportunities rather than separate primary targets for this article. The zero difficulty returned for the contractor query should not be interpreted as no competition.

## Tracked ranking baseline

Tool: `project_getkeywordstats`, October 16–23, 2026, with landing pages. Latest observations below are dated October 23. `project_getsearchengines` confirms both project engines target `66213, Kansas, United States`, English, with Maps merging disabled; project engine 102283 uses search engine 200 and 102328 uses 1540. Engine IDs are retained for reproducibility; rankings vary with engine configuration. A position of 0 at depth 100 means not found in the tracked top 100, not zero demand or proof that the domain never ranks anywhere.

| Keyword | Engine 102283 | Engine 102328 |
| --- | ---: | ---: |
| SEO for local businesses | Not found | Not found |
| contractor seo kansas city | 11 | 12 |
| home services seo kansas city | 6 | 5 |
| google business profile optimization kansas city | Not found | Not found |
| google business profile management kansas city | Not found | Not found |
| seo services kansas city | 44 | Not present in returned keyword set |
| local seo kansas city | 10 | Not present in returned keyword set |

Several returned landing-page histories point to `/blog` for contractor, home-service, and local SEO queries. These histories contain dates that can predate the latest ranking observation, so they are a signal to investigate page alignment, not a claim about the exact current winning URL. The selected national article phrases were not in the returned tracked keyword set; no baseline ranking is claimed for them.

## Competitor comparison limit

`project_listcompetitors` returned `mossmarketinggroup.com`. The organic US comparison used `domain=mossmarketinggroup.com`, `compare=hometownkc.agency`, `diff=1`, keyword substring `seo`, limit 30, volume descending. It returned an empty list. This does not establish that there are no competitive gaps. The article choice is supported by tracked ranking gaps, seed demand, and missing intent coverage, not by a populated competitor-gap report.

## Publication and review

- Existing guide template supplies visible FAQs, matching FAQ schema, BlogPosting schema, breadcrumbs, and metadata.
- Blog entry supplies automatic content/image sitemap coverage and a discovery link from the blog hub; SEO service page also links to the article.
- Reuse the repository's licensed editorial planning photograph with its existing provenance. The hypothetical flooring scenario is labeled and makes no client performance claims.
- Local keyword planning rows were added to `keyword-monitoring.csv`; no keywords were added to the external SE Ranking project.
- After deployment, record Search Console discovery and qualified inquiry baselines, then review at 28, 56, and 90 days. Check whether commercial queries continue to land on the service page before expanding content.

## Official guidance checked

- [Google local ranking guidance](https://support.google.com/business/answer/7091?hl=en): relevance, distance, prominence, and accurate profile information.
- [Business representation guidelines](https://support.google.com/business/answer/3038177?hl=en): real names, categories, addresses, and service-area eligibility.
- [Doorway abuse policy](https://developers.google.com/search/docs/essentials/spam-policies#doorway-abuse): avoid substantially similar city pages created merely to capture queries.
