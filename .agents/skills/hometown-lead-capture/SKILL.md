---
name: hometown-lead-capture
description: Maintain and debug HometownKC contact and offer lead capture, including form UX, validation, spam/timing guards, attribution fields, Supabase inserts, Resend notifications, analytics events, and privacy-safe structured logging.
---

# Hometown Lead Capture

Use this skill when changing or debugging lead forms, lead validation, attribution, analytics events, Supabase lead writes, Resend notifications, or lead-related logging.

## Read First

- `app/(site)/contact/actions.ts`
- `components/sections/contact-form.tsx`
- `components/sections/offer-lead-form.tsx`
- `components/analytics/lead-attribution-fields.tsx`
- `lib/validations/lead.ts`
- `lib/analytics/events.ts`
- `lib/analytics/lead-attribution.ts`
- `lib/logging/logger.ts`
- `lib/email/resend.ts`
- `lib/env.ts`
- `lib/supabase/server.ts`
- `supabase/migrations/0001_schema.sql`
- `supabase/migrations/0003_lead_attribution.sql`
- `tests/analytics.test.ts`
- `tests/logging.test.ts`

## Workflow

1. Classify the issue as UX, validation, attribution, database insert, email notification, analytics, spam guard, timing guard, or logging.
2. Reproduce locally with safe data or a unit-level test before changing production-facing code.
3. Trace the request through form fields, Zod schema, server action, `insertLead`, Supabase fallback behavior, Resend, analytics events, and logs.
4. Make the smallest fix that preserves fallback behavior for missing attribution columns.
5. Add or update regression tests for validation, lead source classification, dataLayer events, or log redaction where applicable.
6. Run the relevant checks and summarize before/after evidence.

## Privacy And Safety Rules

- Do not log raw names, email addresses, phone numbers, project messages, tokens, API keys, or email bodies.
- Preserve logger redaction behavior and prefer safe metadata such as `serviceNeeded`, `leadSource`, `hasPhone`, `hasReferrer`, `hasUtmSource`, `form`, and validation `field`.
- Treat email notification failure as non-fatal if the lead insert succeeds.
- Preserve spam and timing guard success responses unless the user explicitly changes anti-spam behavior.
- Keep canonical env var names from README: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `LEAD_NOTIFY_EMAIL`.
- Keep `FROM_EMAIL` and `LEAD_NOTIFICATION_EMAIL` as legacy aliases unless intentionally removed.

## Validation

Run the narrowest relevant tests first, then broaden:

```bash
npm run test
npm run typecheck
npm run build
```

Run `npm run verify` before release-facing lead form changes.

Ask before sending real email, inserting production Supabase rows, changing production env vars, or using live GTM/GA4 previews.
