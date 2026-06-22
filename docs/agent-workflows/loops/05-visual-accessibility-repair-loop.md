# Hometown Visual And Accessibility Repair Loop

Use for mobile polish, animation issues, layout regressions, accessibility barriers, visual inconsistency, or component/page-section cleanup.

## Prompt

Run the Hometown Visual And Accessibility Repair Loop on the requested route or component. Inspect the current implementation, neighboring components, design tokens, and existing screenshots. Confirm the highest-impact visual, responsive, motion, or accessibility issue with browser evidence where possible, make one bounded fix if approved, then re-check mobile and desktop plus keyboard or reduced-motion behavior when relevant. Run `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build`. Stop when the issue is fixed, no confirmed blocker remains, verification is unavailable, or progress stalls.

## Workflow

1. Observe the affected route/component, existing UI conventions, viewport behavior, focus states, and motion behavior.
2. Confirm one issue with screenshot, DOM inspection, keyboard test, or code evidence.
3. Make one coherent UI fix using existing tokens/components where possible.
4. Re-run visual checks at affected breakpoints.
5. Run project validation.
6. Report tested viewports, evidence, and residual untested states.

## Validation

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build`
- Browser screenshots or manual browser checks for affected mobile and desktop viewports.
- Keyboard/focus and reduced-motion checks when interactive or animated surfaces change.

## Stop Conditions

- Success: the confirmed issue is fixed and validation passes.
- Clean no-op: no confirmed visual/accessibility blocker remains in the requested scope.
- Blocked: browser verification cannot run and code-only evidence is insufficient.
- Approval-required: broad redesign, asset replacement, offer/pricing copy, or production-only validation is needed.
- No-progress: repeated changes do not improve the same confirmed issue.

## Approval Boundary

Ask before broad redesigns, replacing brand assets, changing offer/pricing copy, deleting image assets, or making production changes.
