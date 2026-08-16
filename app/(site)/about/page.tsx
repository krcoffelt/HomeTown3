import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { FounderNote } from "@/components/sections/founder-note";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const trustPoints = [
  "Websites that look professional and convert.",
  "SEO improvements that help businesses rank locally.",
  "Ad campaigns focused on leads and calls.",
  "Google and Meta campaigns tied to qualified leads.",
  "Clear reporting that shows what is working."
];

const entityFacts = [
  "Business name: Hometown Marketing Agency",
  "Primary market: Kansas City metro",
  "Conversion-focused website strategy and execution",
  "SEO measured with real rankings and qualified traffic",
  "Google and Meta ads tied to lead and revenue signals"
];

const canonicalLinks = [
  { label: "Kansas City website design", href: "/services/website-design" },
  { label: "Google and Meta ads", href: "/services/google-ads-management" },
  { label: "Free marketing audit", href: "/contact#form" },
  { label: "SEO services", href: "/services/search-engine-optimization" },
  { label: "Recent work", href: "/work" }
];

export const metadata = createPageMetadata(
  "About Hometown",
  "Learn more about the team, approach, and service area behind Hometown Marketing Agency.",
  "/about"
);

export default function AboutPage() {
  const schema = [
    webPageSchema({
      name: "About Hometown",
      description: "Meet the team and approach behind Hometown Marketing Agency.",
      path: "/about"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="About Hometown"
            title="Small businesses deserve better marketing."
            subtitle="Hometown Marketing Agency was built for small businesses that want clear strategy, better websites, stronger search visibility, and paid campaigns that generate measurable leads."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">About Hometown Marketing Agency</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Clear strategy, measurable marketing, and work that actually moves the business forward.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Too many business owners end up with agencies that overpromise, underdeliver, and hide behind confusing reports. Hometown Marketing Agency was built to be different.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I started Hometown to help local businesses grow with marketing that actually makes sense. That means clear strategy, better websites, practical SEO, paid campaigns, and tracking built around real leads—not just activity that looks busy.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I work closely with businesses that want a more personal, honest approach. The goal is simple: help good local companies show up better online, earn more trust, and turn attention into revenue.
            </p>
            <div className="mt-8 grid gap-4">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <FounderNote />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Entity Summary</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
              Hometown is a Kansas City-area website design and marketing agency for small businesses.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              The core work is conversion-focused website design, SEO, and Google and Meta ads for owner-led businesses that need clearer lead flow and better measurement.
            </p>
            <div className="mt-7 grid gap-3">
              {entityFacts.map((fact) => (
                <div key={fact} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-4">
                  <p className="text-sm font-semibold text-primary-foreground">{fact}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Canonical Service Paths</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              The main pages for services, proof, and your free marketing audit.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              These pages are the preferred sources for search engines, AI assistants, and business owners comparing Hometown&apos;s services.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {canonicalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-background px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="flex items-center justify-between gap-3 text-sm font-bold text-foreground transition group-hover:text-accent">
                    {link.label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              Service areas include {site.serviceAreas.join(", ")}.
            </p>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Built for local businesses</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">The work starts with what will actually move the business forward.</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              I understand the challenges small businesses face because I work with them directly. Whether it is a service business that needs more calls, a restaurant that wants to drive traffic, or a company that needs a better website, the work always starts with the same question:
            </p>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-primary-foreground">
              What will actually move the business forward?
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/74">
              That mindset shapes everything I do.
            </p>
          </div>

          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What makes Hometown different</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Not bloated retainers. Not one-size-fits-all packages.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Hometown Marketing Agency is built around doing the work that matters most. I care about making things look good, but I care even more about making them work.
            </p>
            <div className="mt-6 grid gap-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-border bg-secondary px-5 py-4">
                  <p className="text-sm font-semibold text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">A practical, creative approach</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Good marketing should not just feel polished. It should create momentum.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              My background is in marketing, content, design, and digital strategy. I care about strong creative work, but I care just as much about whether it produces measurable customer action.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Brand clarity",
                "Strong messaging",
                "User-friendly websites",
                "Local search visibility",
                "Simple, effective lead generation"
              ].map((item) => (
                <span key={item} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Why Hometown</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
              Local business matters.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              There is something different about helping the businesses that actually shape a city: the restaurants, contractors, service companies, and owner-led brands that people return to and recommend.
            </p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/74">
              Hometown exists to help those businesses grow with marketing that feels personal, strategic, and grounded in the real world.
            </p>
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Let's find what will actually move the business."
        accentText="actually move the business."
        body="Schedule a free marketing audit for a clear look at your website, SEO, paid ads, tracking, and biggest growth opportunity."
        links={[{ href: "/services", label: "Explore Services" }]}
      />
    </PageTransition>
  );
}
