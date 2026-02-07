# QA Report

Date: 2026-02-07
Project: HometownKC (`HomeTown3`)

## Scope Covered

- Homepage parity implementation through editorial sections and global shell.
- Metadata/SEO/social validation for core routes and dynamic detail routes.
- Route behavior checks for legacy URL redirects.
- Build and targeted lint checks on changed files.

## Results

### Build

- `npm run build`: PASS
- Production server validation on `http://127.0.0.1:3020`: PASS after rebuild/start sequence.

### Lint

- `npx eslint src/components/site/MenuOverlay.tsx src/components/sections/Home/HomeHeroSection.tsx src/components/sections/Home/ProgramsPreviewSection.tsx src/components/sections/Home/CaseStudiesPreviewSection.tsx src/app/page.tsx src/components/pages/HomePageClient.tsx src/app/(routes)/contact/page.tsx src/app/(routes)/team/page.tsx src/app/(routes)/careers/page.tsx src/app/(routes)/press/page.tsx e2e/transition.spec.ts`: PASS
- Full-repo lint has pre-existing legacy violations outside this parity scope (not introduced in this pass).

### E2E

- `npx playwright test e2e/transition.spec.ts`: BLOCKED by browser launch permission issue in this environment (`Target page, context or browser has been closed`, process `SIGTRAP` / `kill EPERM`).
- Test scenarios were updated and are ready to run in a permissive CI/local environment.

### Manual Browser QA (Playwright MCP)

- Menu overlay opens/closes and responds to Escape.
- Focused menu dialog appears with navigation and utility links.
- Homepage section order and information architecture align with parity plan.
- Route redirects verified:
  - `/services -> /programs`
  - `/projects -> /case-studies`
  - `/blog -> /arts-culture`
- Metadata fields validated on:
  - `/`
  - `/programs/website-launch`
  - `/case-studies/artisan-bakery`
  - `/contact`
  - Redirect targets (`/services`, `/projects`, `/blog`) via final URL checks.
- Social card endpoints validated:
  - `/opengraph-image` returns `200 image/png`
  - `/twitter-image` returns `200 image/png`

## Residual Risks

- Full-repo lint baseline remains noisy due older components not touched by this parity implementation.
- Visual parity is now structurally close, but exact pixel-level replication still depends on final asset set and typography tuning.
- Automated e2e execution requires a runtime where Playwright can launch Chromium without sandbox process-kill restrictions.

## Release Recommendation

- Functionally: READY for stakeholder review on parity implementation.
- For production freeze: run updated e2e suite in CI (or local machine with full browser launch permissions) and complete final media replacement pass.
