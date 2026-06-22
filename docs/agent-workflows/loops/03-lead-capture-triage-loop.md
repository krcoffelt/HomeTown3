# Hometown Lead Capture Triage Loop

Use for missing leads, form errors, attribution problems, email notification failures, analytics event drift, or privacy/logging concerns.

## Prompt

Run the Hometown Lead Capture Triage Loop. Classify the issue as form UX, validation, attribution, Supabase insert, Resend notification, analytics event, spam/timing guard, or structured logging. Reproduce it locally with safe data or a unit-level test, trace the smallest root cause through the contact/offer forms and server action, then make one bounded fix if approved. Validate with relevant tests plus `npm run typecheck` and `npm run build`. Stop when the issue is fixed, cannot be reproduced after two serious attempts, or live production approval is required.

## Workflow

1. Observe the reported symptom, changed files, form components, server action, env usage, Supabase migrations, Resend helper, analytics events, and logging tests.
2. Reproduce safely without production data where possible.
3. Choose one root cause and one smallest credible fix.
4. Preserve attribution-column fallback behavior and privacy-safe logging.
5. Add or update a regression test for the affected behavior.
6. Re-run the original reproduction and relevant checks.

## Validation

- `npm run test`
- `npm run typecheck`
- `npm run build`
- Add targeted tests for validation, analytics events, lead-source classification, or log redaction when relevant.

## Stop Conditions

- Success: the reproduced issue no longer occurs and relevant checks pass.
- Clean no-op: the reported issue cannot be reproduced after two serious attempts and no code evidence supports a defect.
- Blocked: production-only evidence, credentials, or logs are unavailable.
- Approval-required: live email, live Supabase insert, production env var, or production analytics work is needed.
- No-progress: root cause remains unclear after local reproduction attempts and code tracing.

## Approval Boundary

Ask before sending real email, inserting production rows, viewing or exposing lead PII, changing production environment variables, or using live GTM/GA4.
