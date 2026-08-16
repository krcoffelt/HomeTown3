# SE Visible Audit and Growth Plan

Audit date: 2026-08-15
Project: `hometownkc.agency`
SE Visible project ID: `01a00250-f665-72d4-b215-933c1269b48d`

## Executive Summary

Hometown has an early but real AI visibility foothold. The strongest result is directly tied to the clearest commercial offer: Google AI Overview placed Hometown first for a prompt asking for affordable custom website design starting around $800 and cited the Hometown pricing page.

The current baseline is not mature enough for trend decisions. The project has one completed historical check, 20 prompts, and a 10-day trial ending 2026-08-24. Before using the scores to justify major site changes, repair the SE Visible entity configuration and collect at least 14 daily checks.

The greatest near-term growth opportunities are:

1. Fix brand aliases and the generic competitor record so future measurements are trustworthy.
2. Expand the proven affordable custom website and transparent-pricing position.
3. Earn independent third-party mentions on the directories and local sources AI engines already cite.
4. Make the strongest canonical service and proof pages as citation-ready as the pricing page.
5. Replace broad, low-signal prompts with a buyer-intent set that matches Hometown's actual page and revenue priorities.

Do not create more suburb or trade landing pages from this baseline. SE Visible currently points more strongly to an entity-authority gap than a page-count gap.

## Audit Scope and Limitations

The audit used the read-only SE Visible REST API endpoints for projects, subscription, brands, brand metrics, prompts, prompt results, and cited sources.

- Project status: `success`, 100% processed.
- Historical checks available: one (`2026-08-14`).
- Latest check timestamp: `2026-08-15 01:00:00`.
- Tracking frequency: daily.
- Prompts: 20 of 20 trial allowance used.
- Topics: five non-default topics, four prompts each.
- Engines: ChatGPT, Google AI Mode, Google Gemini, and Google AI Overview.
- Observed responses in the source data: 77, versus a theoretical 80 prompt-engine combinations.
- Trial ends: 2026-08-24; auto-renew is off.

This is an initial directional audit, not a trend report. Scores can change materially across engines and daily checks.

## Baseline Findings

### Brand visibility

The primary tracked brand record, `Hometown Marketing Agency`, reported:

- Visibility score: 2.
- Average position: 7.
- Total mentions: 3.
- Share of voice: 1%.
- Sentiment score: 14.
- Prompt presence: 3 of 20 prompts had a Hometown mention; 17 had none.

These metrics understate or fragment the brand because SE Visible also created separate mentioned-brand records for `HomeTown` and `Hometown Marketing`. The separate records must not be added together as if they were independent mentions because one answer can contain multiple variants.

### Engine split

- Google AI Overview: one primary-brand mention, position 1, for the $800 website prompt.
- ChatGPT: two primary-brand mentions, plus additional split alias detections.
- Google AI Mode: no Hometown brand metrics in the baseline.
- Google Gemini: no Hometown brand metrics in the baseline.

### Strongest result

Prompt: `Which small business marketing consultants offer affordable custom website design starting around $800?`

- Engine: Google AI Overview.
- Hometown position: 1.
- Sentiment: neutral.
- Hometown citation: `https://hometownkc.agency/pricing`.
- The answer accurately described the $800 starting price, mobile-ready build, lead-capture forms, and basic SEO foundation.

This is the best evidence-backed expansion path because the offer is specific, verifiable, and already being extracted correctly.

### Other Hometown mentions

ChatGPT included Hometown for:

- Affordable websites and SEO packages, where Hometown appeared as a recommended modest-budget option and the Overland Park page was cited.
- How a local agency can improve website design and SEO, where the Overland Park page was cited but Hometown appeared late in the detected brand list.

Hometown had no detected presence in the four SEO-services prompts or the four online-advertising prompts. Broad prompts such as best Kansas City digital marketing agencies and best small-business web design services also returned no Hometown mention.

### Citation footprint

`hometownkc.agency` was the ninth most-cited domain in the baseline:

- Cited in 8 AI answers.
- Reached 7 distinct prompts.
- 10.4% response coverage.
- Three cited pages: homepage, pricing, and Overland Park.

The pricing page is the clearest commercial citation. The core website-design service page, small-business website page, SEO service page, industry pages, and case studies were not present in the cited Hometown URL set.

### Source and authority gap

The most-cited domains were led by:

- Expertise.com: 14 answers, 18.2% coverage.
- KC Web Specialists: 14 answers, 18.2% coverage.
- Thrive: 13 answers, 16.9% coverage.
- Reddit: 11 answers, 14.3% coverage.
- YouTube: 10 answers, 13.0% coverage.
- Clutch: 10 answers, 13.0% coverage.

High-gap pages included Kansas City and Overland Park agency lists on Expertise and Clutch, Thrive's Kansas City landing page, KC Web Specialists' Overland Park page, and local agency listicles. Hometown was cited from its own site, but no source row was associated with the primary tracked brand ID. That leaves independent corroboration as the largest off-site opportunity and also signals a project configuration or parser problem.

## Measurement Problems to Fix First

### 1. Brand aliases are missing

The primary brand currently has no aliases. Add verified variants:

- `Hometown`
- `Hometown Marketing`
- `HometownKC`
- `Hometown KC`

Then verify that the next check consolidates the existing `HomeTown` and `Hometown Marketing` detections into the primary brand.

### 2. A competitor is named `web design`

The tracked competitor at `kcwebdesigner.com` is named `web design`, which is a generic service phrase. SE Visible attached that competitor ID to Hometown's own domain and hundreds of unrelated web-design sources. Replace this record with the business's proper entity name, likely `Kansas City Web Design & SEO`, and only use distinctive aliases.

### 3. Source brand parsing is inconsistent

SE Visible reports `my_brand_mentions: 0` for Hometown's own homepage, pricing page, and Overland Park page even though the rendered titles and answer text identify Hometown. Recheck after alias repair. If it persists for two checks, send the project ID and affected URL rows to SE Ranking support.

### 4. There is only one historical check

Do not call any movement a gain or loss yet. Capture daily snapshots through at least day 14 and preferably day 28.

### 5. The prompt portfolio does not match the revenue strategy

The 20 prompts are spread evenly across broad agency, advertising, SEO, consultant, and web-design topics. The site strategy is more specific: Kansas City website design, affordable small-business websites, website redesign/cost, contractor and home-service proof, restaurant proof, and selected local-service areas.

## Prioritized Growth Plan

### Priority 0 — Repair measurement integrity

Timing: before the next full interpretation cycle.

- Add primary brand aliases.
- Replace the generic `web design` competitor record with a proper named entity.
- Keep only real competitors that appear repeatedly in buyer-intent results; include KC Web Specialists, Thrive, Lifted Logic, Demand Stack, and one strong local directory/list source as comparison references.
- Record the current snapshot as the pre-cleanup baseline.
- Verify source parsing and alias consolidation after two daily checks.

Success gate:

- Hometown variants roll into one primary brand.
- Hometown pages no longer inherit the generic competitor ID.
- Own-page `my_brand_mentions` begins resolving correctly, or the issue is escalated to SE Ranking.

### Priority 1 — Expand the proven $800 website position

Timing: week 1.

- Keep `/pricing` and `/services/website-design` as the primary commercial pair.
- Strengthen the connection among `/pricing`, `/services/website-design`, `/services/small-business-websites`, `/website-design-cost-kansas-city`, and relevant case studies.
- On the pricing and website-design pages, keep exact, consistent facts for price, scope, turnaround, revisions, mobile design, lead capture, and SEO basics.
- Add concise visible comparisons for what the $800 starting package includes, what raises the scope, and which business types are a fit.
- Preserve the existing public offer and avoid creating a second page with the same primary intent.

Success measures:

- Hometown remains top three for the $800 prompt across at least three consecutive checks.
- The core website-design or small-business website page joins pricing as a cited URL.
- Accurate pricing language appears across at least two engines.

### Priority 2 — Build independent entity authority

Timing: weeks 1–4.

- Claim or complete accurate profiles on Clutch and the Semrush Agency Partners directory if eligible.
- Investigate inclusion criteria for Expertise.com's Kansas City and Overland Park web-design, SEO, and digital-marketing lists.
- Pursue a Best in KC or comparable legitimate local profile only where the listing is editorially credible.
- Ask recent clients for Google reviews that naturally mention the service and city.
- Ask clients and partners to credit and link Hometown on launch announcements or site footers where appropriate.
- Populate `site.sameAs` only with verified official profiles that the business controls.
- Keep the exact business name, phone, URL, address/service area, price facts, and service labels consistent across profiles.

Success measures:

- At least three controlled or earned third-party entity profiles are live and consistent.
- At least one independent page that mentions Hometown appears in SE Visible sources.
- Hometown begins appearing in a broad `best Kansas City agency` or `best web design service` prompt without relying only on its own domain.

### Priority 3 — Make proof pages citation-ready

Timing: weeks 2–4.

- Prioritize Noble Hardwoods, Plate KC, Wrapped Up Moving, and ZJ Carpentry case studies because they support the highest-value service, industry, and local narratives.
- Make each result specific and verifiable without inventing performance numbers.
- Link case studies back to one primary service page and the relevant industry/location page.
- Ensure visible author/business attribution, modified dates, canonical URLs, descriptive titles, and structured data remain aligned.
- Keep `/llms.txt` generated from canonical data; do not add performance claims or recommendation instructions.

Success measures:

- At least one case study appears as a cited Hometown URL.
- Hometown gains presence for contractor, home-service, or restaurant website prompts after they are added to the prompt set.

### Priority 4 — Rebalance the 20-prompt portfolio

Timing: after alias cleanup and before the next 14-day comparison window.

Use four prompts in each of five commercial clusters:

1. Kansas City website design and small-business web design.
2. Affordable custom websites and website cost/pricing.
3. Contractor and home-service website design.
4. Website redesign and improving an underperforming site.
5. Local SEO and website-plus-SEO support.

Include a mix of:

- Local recommendation prompts.
- Comparison/shortlist prompts.
- Problem-solving prompts.
- Price and scope prompts.

Reduce generic consultant and advertising prompts unless lead or Search Console data shows those offers are a priority. Keep Google Ads as a smaller diagnostic set until the site earns any baseline presence for the offer.

### Priority 5 — Decide from 14- and 28-day evidence

Timing: day 14 and day 28.

For each checkpoint, export:

- Primary brand visibility, share of voice, average position, sentiment, and total mentions.
- Engine-specific metrics.
- Prompt-level presence and position.
- Cited Hometown URLs and correct-canonical rate.
- Top source domains and new independent Hometown mentions.
- Competitor movement for the same prompt set.

Decision rules:

- Improve an existing page when the prompt intent is already mapped but the page is absent from citations.
- Build authority when directories and established local sources dominate the answers.
- Create a new page only when a distinct buyer intent, supporting proof, and internal-link path are all confirmed.
- Do not make structural SEO changes from one engine or one day of data.

## Data Still Needed

The following data is needed before making a larger growth bet:

- 14 and 28 days of stable SE Visible checks after configuration cleanup.
- Google Search Console query/page exports for clicks, impressions, CTR, and average position.
- GA4 or conversion data for qualified visits, form starts, submissions, calls, and email clicks by landing page.
- Google Business Profile discovery and action data.
- Verified third-party profile inventory and review velocity.
- Qualified lead and close data by offer: websites, redesigns, SEO, and ads.
- A decision on whether Perplexity should be monitored; it is not in the current project model set.

Without conversion data, SE Visible can show where Hometown is mentioned or cited, but it cannot determine which AI visibility produces qualified revenue.

## 30-Day Scorecard

- Measurement: aliases consolidated and generic competitor fixed.
- Coverage: primary-brand presence above the initial 3-of-20 prompt baseline.
- Engines: presence expands beyond ChatGPT and Google AI Overview.
- Citations: more than three Hometown URLs cited, including at least one core service or case study.
- Authority: at least one independent source mentions Hometown.
- Accuracy: pricing, service area, and offer descriptions remain correct.
- Business outcome: AI referral sessions and leads are tracked separately from ordinary organic search.

## API Reference

- [SE Visible overview](https://seranking.com/api/se-visible/)
- [Projects API](https://seranking.com/api/se-visible/projects/)
- [Brands and metrics API](https://seranking.com/api/se-visible/brands/)
- [Prompts and results API](https://seranking.com/api/se-visible/prompts/)
- [Sources API](https://seranking.com/api/se-visible/sources/)
