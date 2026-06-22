# Logging

Lead submission failures use structured JSON logs from `lib/logging/logger.ts`.

## Event Names

- `lead_database_insert_failed`
- `lead_email_notification_failed`
- `lead_submission_failed`
- `lead_validation_failed`
- `lead_spam_guard_matched`
- `lead_timing_guard_matched`

## Format

Each log payload includes:

- `level`
- `event`
- `message`
- `timestamp`
- `requestId`
- `route`
- `metadata`
- `error`, when available

## Privacy Rules

Do not log raw lead messages, phone numbers, email addresses, names, tokens, secrets, API keys, or full email bodies. The logger redacts sensitive metadata keys, but callers should still avoid passing unnecessary user data.

Safe metadata examples:

- `serviceNeeded`
- `leadSource`
- `hasPhone`
- `hasReferrer`
- `hasUtmSource`
- `form`
- validation `field`

Email notification failures are logged as warnings because the lead can still be saved successfully.
