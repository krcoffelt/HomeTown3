# Baseline Checklist

Date: 2026-02-07
Project: HometownKC (`HomeTown3`)

## Visual Baseline Artifacts

- [x] Homepage desktop reference screenshot (`/output/collins-reference-home-top.png`)
- [x] Local homepage capture (`/output/playwright/local-home-after-step1.png`)
- [x] Program listing screenshot (`/output/step6-programs.png`)
- [x] Program detail screenshot (`/output/step6-program-detail.png`)
- [x] Case studies listing screenshot (`/output/step6-case-studies.png`)
- [x] Case study detail screenshot (`/output/step6-case-detail.png`)
- [x] Arts & Culture screenshot (`/output/step7-arts-culture.png`)
- [x] Story detail screenshot (`/output/step7-story-detail.png`)

## Technical Baseline

- [x] Routes exist for `/`, `/programs`, `/programs/[slug]`, `/case-studies`, `/case-studies/[slug]`, `/arts-culture`, `/story/[slug]`
- [x] Legacy IA routes remapped: `/services -> /programs`, `/projects -> /case-studies`, `/blog -> /arts-culture`
- [x] Shared shell in place (`SiteHeader`, `MenuOverlay`, `SiteFooter`)
- [x] Homepage rebuilt as editorial index composition

## Accessibility and Interaction Baseline

- [x] Overlay menu opens/closes from header button
- [x] Escape closes overlay
- [x] Focus trap active while overlay is open
- [x] Body scroll locks while overlay is open
- [x] Keyboard focus restored after overlay closes

## Metadata Baseline

- [x] Global metadata in `src/app/layout.tsx`
- [x] Route metadata for home, list pages, detail pages, and utility pages
- [x] Canonical links and OG/Twitter fields validated through Playwright DOM inspection

