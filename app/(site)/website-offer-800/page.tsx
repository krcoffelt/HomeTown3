import Image from "next/image";
import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema, websiteOfferSchema } from "@/lib/seo/schema";

function requireProject(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Missing project for offer page: ${slug}`);
  }
  return project;
}

const heroBackProject = requireProject("plate-kc");
const heroFrontProject = requireProject("wrapped-up-moving");

const featuredWork = [
  requireProject("wrapped-up-moving"),
  requireProject("zj-carpentry-and-more"),
  requireProject("plate-kc")
];

const inclusions = [
  "Custom website design",
  "Mobile-friendly build",
  "Clear messaging and structure",
  "Contact form integration",
  "Basic SEO setup",
  "Google Analytics installation",
  "Launch support",
  "Revision rounds included"
];

const processSteps = [
  {
    title: "Share your business",
    desc: "Walk us through what you do, who you serve, and what success looks like."
  },
  {
    title: "We design and build",
    desc: "A custom site, crafted around your brand and tuned for the people you want to reach."
  },
  {
    title: "Launch with confidence",
    desc: "Review, refine, approve. We go live the moment it feels right."
  }
];

const offerFaqs = [
  {
    question: "Is this just for businesses on a budget?",
    answer: "No. It is for owners who want serious quality without getting dragged into a bloated agency project."
  },
  {
    question: "What kind of businesses is this for?",
    answer: "Small service businesses that want to look more established online and make it easier for people to reach out."
  },
  {
    question: "What does pricing look like?",
    answer: "This package starts at $800 for a focused custom site. If your project needs more scope, we will tell you clearly before anything moves forward."
  },
  {
    question: "Is the website custom?",
    answer: "Yes. No templates and no recycled layouts. The site is designed around your business."
  },
  {
    question: "Will it help with leads?",
    answer: "Yes. The structure is built to make your business look credible, guide visitors clearly, and make it easy to reach out."
  }
];

const trustLabels = [
  "Strategic design",
  "Crafted to convert",
  "Made in Kansas City",
  "Starts at $800"
];

export const metadata: Metadata = {
  ...createPageMetadata(
    "Custom Small Business Websites for $800",
    "Custom websites for Kansas City small businesses. $800 flat rate, built in about 7 business days. 23+ projects, 5.0 Google reviews, no contracts.",
    "/website-offer-800",
    site.brand.shortName
  )
};

export default function WebsiteOfferLandingPage() {
  const schema = [
    webPageSchema({
      name: "Custom Small Business Websites for $800",
      description:
        "A focused landing page for Kansas City small businesses that need a custom, credible website fast — $800 flat rate, about 7 business days.",
      path: "/website-offer-800"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "$800 Website Offer", path: "/website-offer-800" }
    ]),
    faqItemsSchema(offerFaqs),
    websiteOfferSchema()
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />
      <OfferPageTracker />

      <section className="relative flex min-h-[88vh] items-center bg-background sm:min-h-[92vh]">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[120px]" />

        <div className="site-container relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="whitespace-nowrap">For growing small businesses</span>
              </div>

              <h1 className="mt-5 max-w-[15ch] font-display text-[1.85rem] font-bold leading-[1] tracking-[-0.03em] text-foreground sm:max-w-[12ch] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                <span className="block">Websites that make</span>
                <span className="block">your business look</span>
                <span className="block text-accent">established.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Custom-built sites for small businesses ready to look the part and win the work.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
                <Button
                  href="#start"
                  className="h-14 px-8 text-base shadow-[var(--shadow-elevated)]"
                  dataAnalytics="cta-offer-800"
                >
                  Get Started
                </Button>
                <Button
                  href="#work"
                  variant="ghost"
                  className="h-14 rounded-full bg-[#e1e6ee] px-6 text-base text-foreground hover:bg-[#d7dde7]"
                  dataAnalytics="cta-offer-view-work"
                >
                  View Our Work ↓
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-[#efb11d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <span className="font-semibold text-foreground">5.0</span>
                <span>· Trusted by Kansas City businesses</span>
              </div>
            </div>

            <div className="relative h-[360px] lg:col-span-6 sm:h-[480px] md:h-[560px]">
              <div className="absolute right-0 top-0 w-[78%] rotate-[3deg] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elevated)]">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="relative h-[200px] sm:h-[260px] md:h-[320px]">
                  <Image
                    src={heroBackProject.featuredImageUrl}
                    alt={`${heroBackProject.clientName} website`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 70vw, 32vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-[82%] -rotate-[2deg] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-hero)]">
                <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-3 py-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="relative h-[220px] sm:h-[300px] md:h-[360px]">
                  <Image
                    src={heroFrontProject.featuredImageUrl}
                    alt={`${heroFrontProject.clientName} website`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 74vw, 34vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 right-2 rounded-2xl bg-foreground px-5 py-3 text-background shadow-[var(--shadow-hero)] sm:right-4 sm:px-6 sm:py-3.5 md:right-8">
                <div className="text-[9px] font-bold uppercase tracking-widest text-background/50 sm:text-[10px]">
                  Starting at
                </div>
                <div className="mt-0.5 font-display text-2xl font-bold leading-none sm:text-3xl">
                  $800
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-12 text-background md:py-14">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {trustLabels.map((label, index) => (
              <div
                key={label}
                className={`px-4 text-center md:text-left ${index < 3 ? "md:border-r md:border-background/10" : ""}`}
              >
                <div className="flex items-baseline justify-center font-display text-4xl font-bold tracking-tight text-background md:justify-start md:text-5xl">
                  <span className="text-accent">✓</span>
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-background/50">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="bg-background py-20 md:py-32">
        <div className="site-container">
          <div className="mb-10 max-w-2xl md:mb-14">
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
              Recent Work
            </span>
            <h2 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
              Real businesses. Real results.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {featuredWork.map((project) => (
              <a
                key={project.slug}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.featuredImageUrl}
                    alt={`${project.clientName} website`}
                    fill
                    sizes="(max-width: 768px) 92vw, 31vw"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">{project.category}</span>
                  <h3 className="mt-2 font-display text-xl font-bold text-card-foreground">
                    {project.clientName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                    View live site
                    <span aria-hidden="true">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="noise bg-gradient-subtle py-20 md:py-36">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
              What You Get
            </span>
            <h2 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
              One package. Everything you need.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              No upsells, no surprise add-ons. Just a complete site, ready to do its job from day one.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elevated)] transition duration-300 hover:-translate-y-1">
              <div className="flex flex-col justify-between gap-5 bg-foreground px-6 py-7 text-background sm:px-8 sm:py-8 md:flex-row md:items-end md:px-12 md:py-10">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                    The Offer
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl md:text-4xl">
                    A premium website
                  </h3>
                  <p className="mt-2 text-sm text-background/60">
                    Custom design. Strategic structure. Built to last.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-background/50 sm:text-sm">
                    From
                  </span>
                  <span className="font-display text-4xl font-bold leading-none sm:text-5xl md:text-6xl">
                    $800
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 md:p-12">
                <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
                  {inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                        <span aria-hidden="true">✓</span>
                      </div>
                      <span className="pt-1 text-sm leading-relaxed text-card-foreground md:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-6 sm:mt-10 sm:flex-row sm:items-center sm:pt-8">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">✓</span>
                    No contracts. No hidden fees.
                  </div>
                  <Button
                    href="#start"
                    className="h-12 rounded-full px-8"
                    dataAnalytics="cta-offer-800-package"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-32">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
              How It Works
            </span>
            <h2 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
              Three steps. No guesswork.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A simple process built to skip the back-and-forth and get you a site you actually love.
            </p>
          </div>

          <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:shadow-[var(--shadow-card-hover)] md:p-8"
              >
                <div className="mb-6">
                  <span className="text-sm font-bold tracking-widest text-accent">
                    {step.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-32">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <span className="mb-4 inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
              FAQs
            </span>
            <h2 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl sm:leading-tight lg:text-5xl">
              Good questions, straight answers.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
            {offerFaqs.map((item, index) => (
              <details
                key={item.question}
                className={`group border-b border-border ${index === offerFaqs.length - 1 ? "border-b-0" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left font-display text-base font-bold text-card-foreground hover:no-underline md:text-lg">
                  {item.question}
                  <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--gradient-dark)" }}>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />

        <div className="site-container relative">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center md:mb-10">
              <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
                Start the Conversation
              </span>
              <h2 className="font-display text-[1.875rem] font-bold leading-[1.15] tracking-tight text-primary-foreground sm:text-4xl sm:leading-tight md:text-5xl">
                Let&apos;s build something worth showing off.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/60 sm:text-lg">
                Tell us about your business. We&apos;ll take it from there.
              </p>
            </div>

            <OfferLeadForm />

            <div className="mt-8 flex flex-col items-center justify-center gap-6 text-sm text-primary-foreground/60 sm:flex-row">
              <a href={`tel:${site.contactPhone}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary-foreground">
                <span className="text-accent">☎</span>
                <span className="font-semibold">{site.contactPhone}</span>
              </a>
              <span className="hidden h-3 w-px bg-primary-foreground/20 sm:inline" />
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 text-[#efb11d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <span className="ml-1">5.0 from KC business owners</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
