# Testing

This repo uses Vitest with `jsdom` for lightweight quality checks. The goal is to catch SEO data mistakes, helper regressions, and lead-tracking drift without maintaining a large browser test suite.

## Commands

- `npm run test`: run all tests once.
- `npm run test:watch`: run tests in watch mode.
- `npm run test:coverage`: run tests with V8 coverage.
- `npm run verify`: run typecheck, lint, tests, and production build.

## Current Coverage

- Data integrity for services, locations, industries, blog posts, and projects.
- Priority SEO route presence in data and sitemap output.
- Positioning alignment for the three public services and free marketing audit funnel.
- Lead attribution behavior.
- Analytics dataLayer event pushes.
- Metadata, schema, and sitemap helper output.
- Structured logging JSON shape and redaction behavior.

## What Is Not Covered Yet

- Full browser flows.
- Netlify production behavior.
- Supabase or Resend network calls.
- Google Search Console indexing state.

Add Playwright only when there is a real UI workflow that needs browser automation.
