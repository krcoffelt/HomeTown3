# Collins Parity Implementation Plan

Date: 2026-02-06
Project: HometownKC (`HomeTown3`)
Primary target reference: https://www.wearecollins.com/

## Progress Tracker

- [x] Step 1: Create route shells and update navigation.
- [x] Step 2: Extract page content into structured data.
- [x] Step 3: Refactor globals to tokenized design system.
- [x] Step 4: Build reusable site shell (header/menu/footer).
- [x] Step 5: Recompose homepage from section components.
- [x] Step 6: Build listing/detail templates for programs and case studies.
- [x] Step 7: Add story and arts/culture templates.
- [x] Step 8: Implement metadata and social cards.
- [x] Step 9: Run QA, fix regressions, and freeze for release.

## 1. Objective and Scope

### Objective
Rebuild the HometownKC web experience so it matches the structure, pacing, and premium editorial feel of wearecollins.com while keeping Hometown branding and business goals.

### Scope
- Full homepage architecture and design system alignment.
- Multi-page content structure (programs, case studies, arts and culture, stories).
- Menu, footer, metadata, motion, and responsive behavior parity.
- Content model and component architecture that supports ongoing updates.

### Non-goals
- Literal copy of Collins copywriting or brand assets.
- One-time visual patching only in CSS.
- Keeping all current sales sections on homepage (pricing/process/long contact form will move).

## 2. Current-State Findings (from live audit)

### Live implementation
- Homepage is monolithic and hardcoded in `src/app/page.tsx`.
- Styles are concentrated in one large global stylesheet `src/app/globals.css`.
- Many homepage links route to local anchors instead of dedicated pages.
- Overlay menu exists but includes placeholder and non-functional items.

### Primary gaps vs Collins
- Information architecture depth is shallow (mostly one-page) vs Collins multi-page editorial depth.
- Typography system is single-family heavy vs Collins serif/sans contrast hierarchy.
- Homepage has conversion-heavy sections that reduce premium editorial positioning.
- Case and program content lacks deep detail pages.

## 3. Implementation Strategy (Phased)

## Phase 0 - Baseline and Guardrails

### Goal
Create measurable baselines and implementation guardrails before refactor.

### Deliverables
- Baseline screenshots (desktop and mobile) for old and new pages.
- Baseline technical metrics and QA checklist.
- Migration branch and task board.

### Tasks
1. Create branch: `codex/collins-parity-plan` (or equivalent working branch).
2. Capture baseline screenshots for:
   - `/`
   - `/services`
   - `/projects`
   - `/blog`
   - `/contact`
3. Capture baseline metrics:
   - FCP/LCP approximations.
   - CLS checks (manual + tooling).
   - Basic accessibility scan (menu, forms, contrast, keyboard).
4. Write baseline checklist file:
   - `docs/parity/baseline-checklist.md`

### Components and files used
- Existing pages in `src/app/`.
- Existing e2e setup in `e2e/transition.spec.ts`.

### Research needed
- None external required for this phase.

### Done criteria
- Baseline artifacts exist in `output/` and `docs/parity/`.
- Team can compare before/after visually and functionally.

---

## Phase 1 - Information Architecture and Routing

### Goal
Shift from one-page anchor architecture to Collins-like multi-page editorial architecture.

### Deliverables
- Route map and content map.
- New app routes with initial page shells.
- Updated navigation structure.

### Route structure to implement
- `/` (homepage index)
- `/programs`
- `/programs/[slug]`
- `/case-studies`
- `/case-studies/[slug]`
- `/arts-culture`
- `/story/[slug]`
- `/team`, `/careers`, `/press` (if kept in menu)

### Tasks
1. Create route directories in `src/app/(routes)/`.
2. Add shell pages for each route with placeholder headings and metadata.
3. Replace anchor links in homepage and menu with route links.
4. Update `src/data/navigation.ts` with real route definitions.
5. Remove or repurpose legacy routes that conflict with new IA.

### Components and files used
- `src/app/page.tsx`
- `src/data/navigation.ts`
- `src/components/ui/Navigation.tsx`

### Research needed
- Review Next.js App Router docs for dynamic segments, metadata, and static params.

### Done criteria
- Main nav routes to real pages, not hash anchors.
- No placeholder `#` links in global nav/footer/social.

---

## Phase 2 - Content Model and Data Layer

### Goal
Move from hardcoded JSX strings to a structured content model suitable for editorial depth.

### Deliverables
- Type-safe content models for programs, case studies, stories, and arts/culture.
- Central data files and seed content.
- Utilities for route generation by slug.

### Data structure to implement
- `src/types/program.ts`
- `src/types/caseStudy.ts`
- `src/types/story.ts`
- `src/types/culture.ts`
- `src/data/programs.ts`
- `src/data/caseStudies.ts`
- `src/data/stories.ts`
- `src/data/culture.ts`

### Task details
1. Define interfaces with required fields:
   - `slug`, `title`, `subtitle`, `description`, `heroMedia`, `tags`, `ctaLabel`, `ctaHref`.
2. Add listing and detail dataset entries (minimum 8-12 per category target).
3. Implement lookup utilities:
   - `getProgramBySlug`, `getCaseStudyBySlug`, etc.
4. Wire new routes to content models using slug params.
5. Replace homepage hardcoded rows/cards with mapped content from data files.

### Components and files used
- Current hardcoded blocks in `src/app/page.tsx`.
- Route templates from Phase 1.

### Research needed
- Optional: evaluate if data remains local TS or moves to CMS later.
- Decision checkpoint output in `docs/parity/content-source-decision.md`.

### Done criteria
- Homepage and detail pages pull content from structured data.
- No case/program/story text hardcoded in route JSX.

---

## Phase 3 - Design Tokens and Typography System

### Goal
Establish a reusable visual foundation that supports Collins-like editorial hierarchy.

### Deliverables
- Tokenized color, spacing, radius, shadow, and motion variables.
- Serif + sans typography system with explicit scale.
- Updated global CSS architecture.

### Tasks
1. Refactor `src/app/globals.css` into layered sections or split files:
   - `styles/tokens.css`
   - `styles/typography.css`
   - `styles/layout.css`
   - `styles/components/*.css` (optional)
2. Define core tokens in `:root` and responsive variants.
3. Configure font loading in `src/app/layout.tsx` using local/next font strategy.
4. Establish semantic text classes:
   - display hero
   - section label
   - body copy
   - caption
5. Replace ad-hoc sizes with tokenized scale usage.

### Components and files used
- `src/app/layout.tsx`
- `src/app/globals.css`
- `public/fonts/*`

### Research needed
- Font loading strategy and performance best practices in Next.js.
- Verify font licensing for any newly introduced typefaces.

### Done criteria
- Typography styles are consistent across home, listing, and detail pages.
- Global style rules are tokenized and not page-specific hacks.

---

## Phase 4 - Global Shell: Header, Menu Overlay, Footer

### Goal
Make global navigation and footer behavior match Collins-like editorial polish and functionality.

### Deliverables
- Reusable site shell components.
- Fully functional overlay menu with keyboard accessibility.
- Footer with real links and newsletter pattern.

### Components to build/refactor
- `src/components/site/SiteHeader.tsx`
- `src/components/site/MenuOverlay.tsx`
- `src/components/site/SiteFooter.tsx`
- Optional primitives:
  - `MenuStoryCard`
  - `NewsletterInlineForm`
  - `SocialLinks`

### Tasks
1. Extract current header/menu/footer from `src/app/page.tsx` into reusable site components.
2. Add focus trap and ESC-close in overlay menu.
3. Replace non-link buttons (`Team`, `Careers`, `Press`) with route links.
4. Replace social `#` hrefs with real destinations.
5. Add consistent nav states for mobile/desktop and active route styles.

### Research needed
- Accessibility patterns for full-screen menu overlays and focus management.

### Done criteria
- Site shell is shared across pages.
- Menu is fully keyboard accessible and link-complete.

---

## Phase 5 - Homepage Rebuild (Editorial Index Model)

### Goal
Transform homepage into a high-level editorial index with restrained CTAs and strong visual sequencing.

### Deliverables
- New homepage component composition.
- Section-level parity with Collins structure and pacing.

### Homepage component map
- `HomeHeroSection`
- `ProofStrip` (awards/credibility line)
- `HeroMediaFeature`
- `ProgramsPreviewSection`
- `CaseStudiesPreviewSection`
- `StoryLinkRow`
- `ArtsCulturePreviewSection`
- `NewsletterFooterBlock` (if not in global footer)

### Tasks
1. Replace pricing/process/long contact sections on homepage with editorial previews.
2. Keep one restrained CTA per section (mostly `Explore`).
3. Ensure each preview section links to dedicated routes.
4. Rebuild section spacing rhythm and typographic hierarchy for editorial pacing.
5. Implement mobile-specific ordering and spacing to mirror desktop intent.

### Files touched
- `src/app/page.tsx`
- `src/components/sections/Home/*`
- `src/app/globals.css` or split stylesheet files

### Research needed
- Component-level research is internal (reuse patterns from current menu/carousel/section primitives).

### Done criteria
- Homepage has only index-level sections and outbound links to deeper pages.
- Visual and information density aligns with Collins benchmark.

---

## Phase 6 - Programs, Case Study, and Story Templates

### Goal
Provide depth pages that make the homepage previews credible and useful.

### Deliverables
- Listing pages for programs and case studies.
- Detail page templates with reusable section blocks.
- Story and arts/culture page patterns.

### Components to implement
- `ProgramCard`, `ProgramList`
- `CaseStudyCard`, `CaseStudyRail`
- `DetailHero`, `DetailMeta`, `MediaGallery`, `ResultsSection`, `NextItemNav`
- `StoryCard`, `StoryList`

### Tasks
1. Build `/programs` listing from data model.
2. Build `/programs/[slug]` detail template.
3. Build `/case-studies` listing and `/case-studies/[slug]` detail template.
4. Build `/arts-culture` and `/story/[slug]` templates.
5. Add previous/next links for detail page progression.

### Research needed
- None external if templates are custom built.
- Optional: review editorial case-study layouts for section sequencing.

### Done criteria
- All homepage preview items resolve to complete detail pages.
- Detail templates share reusable components and consistent layout.

---

## Phase 7 - Motion System and Interaction Polish

### Goal
Create deliberate, restrained motion sequencing similar to Collins style.

### Deliverables
- Central motion tokens and variants.
- Standardized reveal, hover, and section transition behavior.

### Implementation approach
- Keep simple transitions in CSS.
- Use Framer Motion only where timeline control is needed.

### Tasks
1. Define motion tokens (`duration`, `easing`, `delay`) at global level.
2. Build utility variants in `src/lib/animations/`:
   - reveal-up
   - stagger-children
   - fade-scale
3. Apply motion consistently to:
   - menu open/close
   - hero entrance
   - section title masks
   - card hover states
4. Ensure reduced-motion handling for all animated sequences.

### Research needed
- Framer Motion reduced-motion and sequencing best practices.

### Done criteria
- Motion feels cohesive and intentional.
- Reduced-motion mode remains fully usable.

---

## Phase 8 - Media and Asset Pipeline

### Goal
Replace placeholder imagery with real, optimized media that supports premium perception.

### Deliverables
- Organized media directory.
- Optimized image/video usage with predictable loading behavior.

### Tasks
1. Create media structure:
   - `public/media/home/*`
   - `public/media/case-studies/*`
   - `public/media/programs/*`
2. Replace unsplash and random placeholders with approved assets.
3. Use `next/image` where possible for responsive image optimization.
4. Add poster images and lazy-loading for video content.
5. Document media specs in `docs/parity/media-spec.md`.

### Research needed
- Confirm asset rights/licensing for all final media.

### Done criteria
- No placeholder imagery remains in production routes.
- Media quality and loading behavior meet parity goals.

---

## Phase 9 - Metadata, SEO, and Social Previews

### Goal
Upgrade metadata and route-level SEO to match editorial professionalism.

### Deliverables
- Global and per-route metadata.
- OG images and social card consistency.

### Tasks
1. Expand `src/app/layout.tsx` metadata:
   - title template
   - description
   - openGraph
   - twitter
   - robots
2. Add route-level metadata to core pages and dynamic detail routes.
3. Add canonical patterns where needed.
4. Validate with preview tools for Open Graph output.

### Research needed
- Next.js Metadata API best practices for dynamic routes.

### Done criteria
- Rich social previews for all key routes.
- Metadata complete and consistent across the site.

---

## Phase 10 - QA, Accessibility, and Performance Hardening

### Goal
Ship parity work with quality gates and low regression risk.

### Deliverables
- Test coverage for critical flows.
- Accessibility and performance checklists.
- Launch-ready QA report.

### Tasks
1. Add/update e2e scenarios:
   - menu open/close and keyboard nav
   - homepage to listing to detail navigation
   - mobile layout checks
2. Add manual QA checklist for:
   - responsive breakpoints
   - focus states
   - hover/active states
   - broken links
3. Run lint/build and fix regressions.
4. Run performance checks and tune large media/components.
5. Produce final report: `docs/parity/qa-report.md`.

### Research needed
- Optional tooling comparison for automated accessibility scans.

### Done criteria
- All critical routes pass QA and navigation tests.
- No known blocker-level regressions.

---

## 4. Component Decision Log (Build vs Research vs Reuse)

### A. Components to reuse with light refactor
- Existing menu overlay logic and animation scaffolding from `src/app/page.tsx`.
- Existing carousel drag behavior (if retained) from `src/app/page.tsx`.
- Existing animation utilities in `src/lib/animations/` where suitable.

### B. Components to build fresh
- Site shell components (`SiteHeader`, `MenuOverlay`, `SiteFooter`).
- Homepage editorial sections (`ProgramsPreviewSection`, `CaseStudiesPreviewSection`, etc).
- Program and case-study listing/detail templates.

### C. Components requiring research before implementation
1. Carousel/rail engine
- Option 1: keep custom drag/scroll rail.
- Option 2: adopt Embla Carousel for better accessibility and snapping behavior.
- Research output: `docs/parity/component-research/carousel.md`.

2. Newsletter integration
- Option 1: simple internal form endpoint.
- Option 2: provider integration (Mailchimp, ConvertKit, etc).
- Research output: `docs/parity/component-research/newsletter.md`.

3. CMS strategy (future-proofing)
- Option 1: local TS data for speed.
- Option 2: CMS integration (Sanity/Contentful) for editorial workflows.
- Research output: `docs/parity/component-research/cms.md`.

## 5. File-by-File Work Plan

### Immediate high-impact edits
1. `src/app/page.tsx`
- Replace monolithic markup with section composition.
- Remove conversion-heavy sections from home.
- Route all preview cards to dedicated pages.

2. `src/app/globals.css`
- Tokenize and simplify.
- Remove page-specific overrides that belong in section/component styles.

3. `src/data/navigation.ts`
- Replace legacy nav map with new IA.

4. `src/app/layout.tsx`
- Add full metadata model and font integration.

### New files to add
- `src/components/site/SiteHeader.tsx`
- `src/components/site/MenuOverlay.tsx`
- `src/components/site/SiteFooter.tsx`
- `src/components/sections/Home/*`
- `src/components/sections/Programs/*`
- `src/components/sections/CaseStudies/*`
- `src/data/programs.ts`
- `src/data/caseStudies.ts`
- `src/data/stories.ts`
- `src/data/culture.ts`
- `src/types/program.ts`
- `src/types/caseStudy.ts`
- `src/types/story.ts`
- `src/types/culture.ts`

## 6. Execution Timeline (Suggested)

### Sprint 1 (Architecture)
- Phase 0, Phase 1, Phase 2.
- Output: route map live, structured data in place.

### Sprint 2 (Design system and shell)
- Phase 3, Phase 4.
- Output: global shell and visual tokens finalized.

### Sprint 3 (Homepage and depth pages)
- Phase 5, Phase 6.
- Output: editorial homepage and detail templates live.

### Sprint 4 (Polish and release)
- Phase 7, Phase 8, Phase 9, Phase 10.
- Output: animation polish, media, SEO, QA, release report.

## 7. Risks and Mitigations

### Risk: visual drift while refactoring
- Mitigation: use baseline screenshots and parity checkpoints each phase.

### Risk: over-animation causing performance regressions
- Mitigation: centralize motion tokens, limit JS animations, verify reduced-motion.

### Risk: unfinished route depth leads to broken homepage links
- Mitigation: implement listing and detail route shells before homepage rewiring.

### Risk: content bottleneck
- Mitigation: start with structured seed content and swap content progressively.

## 8. Acceptance Criteria for Final Delivery

1. Homepage matches Collins-like editorial structure:
- Hero, programs preview, case studies preview, arts/culture preview.

2. Navigation depth matches target IA:
- Programs, case studies, stories, and arts/culture have real pages.

3. Design system parity:
- Clear serif/sans hierarchy, restrained palette, and deliberate spacing.

4. Functional parity:
- Overlay menu, newsletter, and social links are fully functional.

5. Quality gates:
- Responsive behavior verified, no major accessibility blockers, and clean build/lint.

## 9. Recommended Implementation Order (Daily Checklist)

1. Create route shells and update navigation.
2. Extract page content into structured data.
3. Refactor globals to tokenized design system.
4. Build reusable site shell (header/menu/footer).
5. Recompose homepage from section components.
6. Build listing/detail templates for programs and case studies.
7. Add story and arts/culture templates.
8. Implement metadata and social cards.
9. Run QA, fix regressions, and freeze for release.
