# Media Specification

Date: 2026-02-07

## Directory Convention

- Home media: `public/media/home/*`
- Program media: `public/media/programs/*`
- Case-study media: `public/media/case-studies/*`
- Story media: `public/media/stories/*`

## Current State

- Program, case, and story cards currently use remote image URLs from dataset records.
- UI now supports card/image slots that can be switched to local assets without component refactors.

## Target Production Requirements

- Replace remote placeholders with licensed local assets under `public/media/*`.
- Keep source dimensions at or above 2000px on the long edge for key hero/case visuals.
- Use progressive formats where possible:
  - Primary: `webp`
  - Fallback: `jpg` (85 quality baseline)
- Maintain editorial crop consistency:
  - Case rail cards: near 4:5 to 16:10 depending on layout variant.
  - Story feature card: 16:10.

## Loading and Performance

- Prefer `next/image` for production image rendering paths where practical.
- Keep above-the-fold media budget conservative (hero + first rail only eager).
- Lazy-load lower sections by default.

## Rights and Governance

- Every final production asset should have a source-of-truth note (photographer/license) in project documentation before launch.

