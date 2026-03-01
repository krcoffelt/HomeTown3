# HometownKC Website

## Google Tag Manager (GTM) Setup

1. In Netlify, set environment variable `NEXT_PUBLIC_GTM_ID` to `GTM-5DWRG7GW` for the deployed site.
2. Redeploy the site after saving the variable.
3. Verify tracking:
   - GTM intentionally loads after consent or first interaction (`pointerdown`, `keydown`, or `scroll`), not immediately at first paint.
   - Open GTM Preview (Tag Assistant), connect to the site, interact with the page, and confirm container load + fired tags.
   - In GA4 (`G-4FYSV8WK5P`), open Realtime and confirm active page views/events while preview is connected.
   - Optional consent integration: dispatch `window.dispatchEvent(new Event("analytics-consent-granted"))` after consent acceptance to load GTM immediately.
   - Do not paste the raw GTM `<script>`/`<noscript>` snippets directly in code; this project loads GTM via `@next/third-parties/google`.

## GTM Configuration To Create

- Google tag:
  - Measurement ID: `G-4FYSV8WK5P`
  - Trigger: `All Pages`
- Event tags:
  - `cta_click`
  - `phone_click`
  - `email_click`
  - `generate_lead` (form submit)
