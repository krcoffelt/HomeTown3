# Hometown Production Build Plan

## Objective
Build a premium, conversion-focused, multi-page marketing website for **Hometown**, a Kansas City website studio serving local service businesses.

## Core Priorities
1. Design system quality over speed.
2. Typography quality and spacing consistency.
3. Premium visual hierarchy and section rhythm.
4. Conversion clarity and lead capture.
5. Scalable but simple architecture.

## v1 Scope
- Pages: Home, Services, Work, Pricing, Contact
- Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend: Supabase (leads + projects first)
- Email notifications: Resend
- SEO/AEO: page metadata, structured headings, schema-ready FAQ content, sitemap, robots

## Information Architecture
- `/` Home
- `/services`
- `/work`
- `/pricing`
- `/contact`

## Core Messaging
- Main offer: **Custom Website Package — $800 this month ($999 regular)**
- Add-ons:
  - Google Business Profile Setup — $250
  - Logo Design + Mini Brand Kit — $250
  - Social Media Management — $499/month
- Primary CTA: **Get Started**

## Visual Direction
- Light editorial base with selective dark contrast sections.
- Controlled palette: near-black, warm off-white, sand neutral, deep green accents.
- Oversized typography with selective serif accents.
- No generic SaaS visuals, no template-feel card repetition.
- Strong section identity and composition variety.

## Supabase v1 Tables
- `leads`
  - id, created_at, name, business_name, email, phone, service_needed, project_details, status, notes
  - status values: new, contacted, quoted, won, lost
- `projects`
  - id, created_at, title, slug, client_name, industry, summary, services_provided, featured_image_url, gallery, live_url, is_featured, sort_order
- `services`
  - id, title, slug, short_description, full_description, price, is_featured, sort_order
- `faqs`
  - id, question, answer, page, sort_order
- `settings`
  - id, site_title, site_description, contact_email, contact_phone, hero_price, regular_price, announcement_text

## Lead Form Flow
1. User submits form.
2. Client and server validation run.
3. Lead inserted into Supabase `leads`.
4. Notification email sent through Resend.
5. Success or failure UI state shown.

## Folder Structure
```txt
/app
  /(site)
    /page.tsx
    /services/page.tsx
    /work/page.tsx
    /pricing/page.tsx
    /contact/page.tsx
/components
  /ui
  /layout
  /sections
/lib
  /supabase
  /seo
  /utils
/data
/public
  /images
/supabase
  /migrations
/docs
/references
```

## Build Phases

### Phase 1 - Brand direction and copy outline
- Lock positioning, message pillars, page copy skeleton, and offer hierarchy.

### Phase 2 - Visual system and core design logic
- Build tokens, typography scale, spacing system, and base UI components.

### Phase 3 - Homepage build
- Implement hero, social proof, why section, services preview, featured work, pricing preview, FAQ, and contact CTA.

### Phase 4 - Remaining pages
- Build Services, Work, Pricing, Contact with consistent design language.

### Phase 5 - Supabase leads integration
- Add database schema, validation, server action/API route, and Resend notifications.

### Phase 6 - Portfolio content
- Populate projects and refine visual showcase quality.

### Phase 7 - SEO and FAQ structure
- Add metadata, internal links, alt text, sitemap, robots, and FAQ support.

### Phase 8 - Motion and mobile polish
- Tune animation restraint, responsive rhythm, and interactive quality.

### Phase 9 - Launch readiness pass
- Verify forms, performance, metadata, conversion flow, and indexability.

## QA Requirements
- Responsive checks across mobile/tablet/desktop.
- Form submission success/failure handling.
- Accessibility: keyboard, contrast, focus states.
- Core pages load with strong performance and no layout regressions.

## Explicit Exclusions
- Hosting/domain/DNS/GitHub-Netlify configuration.
- Heavy admin dashboard/authentication in v1.

## Future Expansion (Post v1)
- Testimonials
- Dynamic project detail pages
- Blog/content engine
- Improved CRM workflow
- Analytics implementation (deferred for now)
