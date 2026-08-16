# AI Discovery Rapid Rollout

This rollout keeps AI discovery work evidence-based and separate from ordinary search indexing, model-training permissions, and content licensing.

## Current Decision

- Publish one concise `/llms.txt` endpoint generated from canonical site data.
- Do not publish `/llms-full.txt` unless verified demand or a direct agent workflow justifies it.
- Do not publish `/ai.txt` while competing specifications use that filename for different context, behavior, training, and licensing purposes.
- Preserve the current crawler behavior until Hometown explicitly chooses a separate model-training policy.

## Compressed Timeline

### Phase 1: Same-Day Local Release

- Generate `/llms.txt` from services, industries, completed case studies, guides, core company pages, and locations.
- Keep live canonical pages as the source of truth.
- Remove internal performance metrics, recommendation instructions, and manually duplicated contact details.
- Validate format, canonical URLs, current positioning, caching, and response content type in automated tests.
- Run `npm run verify` before deployment.

### Phase 2: Production Validation — Day 1 After Approval

These checks require approval because they touch the live site or external systems.

- Confirm `/llms.txt` returns `200` and `text/plain; charset=utf-8` in production.
- Confirm `robots.txt`, sitemap files, priority service pages, and completed case studies return `200`.
- Review CDN or WAF behavior for Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, and PerplexityBot.
- Record whether verified crawlers receive a challenge, block, redirect, or successful response.
- Do not change GPTBot, ClaudeBot, or Google-Extended access until the model-training policy is explicitly approved.

### Phase 3: Measurement — Days 2–7

- Record requests to `/llms.txt` by verified user agent.
- Record AI crawler requests to the canonical pages linked from the file.
- Track AI referral sessions, contact starts, submissions, phone clicks, and email clicks.
- Re-run the existing buyer-intent prompt set and record brand mentions, links, cited domains, and cited Hometown URLs.
- Keep the August 3 baseline in this operations document, not in `/llms.txt`: 0% AI mention presence and 40% AI link presence.

### Phase 4: Decision Gate — Day 7

Pilot `/llms-full.txt` only when at least one condition is true:

- A verified agent requests or follows `/llms.txt` links.
- Hometown has a customer-facing or internal agent workflow that needs consolidated context.
- A major target platform documents support.
- A controlled accuracy test shows a meaningful improvement from the consolidated file.

If approved, generate `/llms-full.txt` from the same canonical data sources, exclude legal boilerplate and internal metrics, add a size limit and freshness tests, and measure it separately for 14 days.

### Phase 5: `ai.txt` Review — Quarterly

Publish `ai.txt` only after Hometown has approved its training, inference, citation, and licensing preferences and the target format has documented support from the systems Hometown wants to influence.

## Success Metrics

Primary outcomes:

- Qualified AI referral leads.
- Brand mention presence for buyer-intent prompts.
- Link presence and correct canonical URL rate.
- Accurate service, free-audit, and location descriptions.

Diagnostic outcomes:

- Verified crawler `2xx` rate.
- Requests to `/llms.txt` and followed canonical pages.
- AI referral sessions and conversion events.
- Stale or incorrect citations.

Guardrails:

- No unreviewed change to public positioning or keyword-to-URL mapping.
- No duplicate or thin SEO pages.
- No internal performance metrics in public machine-readable content.
- No AI training or licensing policy change without explicit approval.
