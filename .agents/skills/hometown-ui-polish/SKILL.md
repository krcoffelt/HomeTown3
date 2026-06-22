---
name: hometown-ui-polish
description: Polish HometownKC responsive UI, visual consistency, accessibility, motion behavior, and page composition. Use when changing layouts, Tailwind classes, shared UI components, page sections, animations, mobile behavior, screenshots, or design-system conventions.
---

# Hometown UI Polish

Use this skill to make frontend changes that preserve the HometownKC design language and verify the result with real rendering evidence.

## Read First

- `BUILD_PLAN.md`
- `docs/phase-progress.md`
- `app/globals.css`
- `tailwind.config.ts`
- `components/layout/*`
- `components/ui/*`
- `components/sections/*`
- relevant route files under `app/(site)`
- existing screenshots under `output/playwright` when comparing visual states

## Design Rules

- Prefer existing tokens, utilities, section shells, buttons, icons, and panel patterns before inventing new primitives.
- Preserve the current high-contrast black/white/accent-blue brand system unless the user explicitly requests a redesign.
- Keep marketing pages conversion-focused: clear offer, proof, pricing cues, and contact path.
- Avoid decorative complexity that weakens loading, readability, or mobile fit.
- Keep mobile text, buttons, forms, and cards from overflowing or overlapping.
- Respect `prefers-reduced-motion` and avoid motion that blocks content comprehension.
- Use `next/image` for production images where practical.
- Keep form controls accessible with real labels or `sr-only` labels, focus states, and valid input semantics.

## Workflow

1. Identify the exact route, section, component, and viewport affected.
2. Inspect existing neighboring components for layout, spacing, radius, typography, animation, and interaction patterns.
3. Make one coherent UI improvement at a time.
4. Verify with browser screenshots for mobile and desktop when the visual surface is meaningful.
5. Check keyboard focus and reduced-motion behavior when touching nav, forms, accordions, animation, or interactive components.
6. Keep before/after evidence when visual regressions are possible.

## Validation

Run:

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

For visual changes, also run a local browser check or Playwright screenshot pass across the affected breakpoints. Report any viewport or browser state not tested.

Ask before replacing brand assets, changing pricing/offer copy, or making a broad visual redesign outside the requested surface.
