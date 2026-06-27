import Image from "next/image";
import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ClockIcon, MapPinIcon, PhoneIcon, TargetIcon, ZapIcon } from "@/components/ui/site-icons";
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
    eyebrow: "Discovery",
    title: "Share your business",
    desc: "Walk us through what you do, who you serve, and what success looks like.",
    duration: "30 min call",
    bullets: ["Goals & audience", "Brand voice", "What success looks like"]
  },
  {
    eyebrow: "Craft",
    title: "We design and build",
    desc: "A custom site, crafted around your brand and tuned for the people you want to reach.",
    duration: "2-3 weeks",
    bullets: ["Custom design", "Mobile-first build", "Copy that converts"]
  },
  {
    eyebrow: "Launch",
    title: "Launch with confidence",
    desc: "Review, refine, approve. We go live the moment it feels right.",
    duration: "Same week",
    bullets: ["Final revisions", "QA & analytics", "Go live together"]
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

const trustItems = [
  { label: "Strategic design", icon: TargetIcon },
  { label: "Crafted to convert", icon: ZapIcon },
  { label: "Made in Kansas City", icon: MapPinIcon },
  { label: "Starts at $800", icon: ClockIcon }
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
                <span className="whitespace-nowrap">Kansas City</span>
              </div>

              <h1 className="mt-5 max-w-[11ch] font-display text-[2.15rem] font-bold leading-[0.98] tracking-[-0.04em] text-foreground sm:max-w-[12ch] sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Websites that make your business look <span className="text-accent">established.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Custom-built sites for small businesses ready to look the part and win the work.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
                <Button
                  href="#claim-form"
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
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
              <div
                key={item.label}
                className={`px-4 text-center md:text-left ${index < 3 ? "md:border-r md:border-background/10" : ""}`}
              >
                <div className="flex items-baseline justify-center font-display text-4xl font-bold tracking-tight text-background md:justify-start md:text-5xl">
                  <Icon className="h-7 w-7 text-accent md:h-8 md:w-8" />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-background/50">
                  {item.label}
                </div>
              </div>
              );
            })}
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
                    href="#claim-form"
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

      <section className="relative overflow-hidden bg-foreground py-20 text-background md:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8rem] top-[-6rem] h-[22rem] w-[22rem] rounded-full bg-accent/10 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-8rem] right-[-6rem] h-[20rem] w-[20rem] rounded-full bg-accent/8 blur-[120px]"
        />

        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/12 bg-background/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-background/72 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                How It Works
              </span>
              <h2 className="mt-5 font-display text-[2rem] font-bold leading-[1.05] tracking-tight text-background sm:text-5xl sm:leading-[1.02] lg:text-6xl">
                Three steps.
                <br />
                <span className="text-accent">Zero guesswork.</span>
              </h2>
            </div>

            <div className="pt-0 lg:col-span-5 lg:pt-4">
              <p className="max-w-md text-base leading-relaxed text-background/68 sm:text-lg">
                A simple, transparent process from first call to launch day. No back-and-forth, no surprises, no jargon.
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-12 max-w-6xl md:mt-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 right-8 top-6 hidden h-px bg-gradient-to-r from-transparent via-background/20 to-transparent md:block"
            />
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="group relative h-full rounded-2xl border border-background/10 bg-background/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-background/20 hover:bg-background/[0.06] hover:shadow-[0_25px_50px_-12px_rgb(0_0_0_/_0.28)] md:p-8"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-7 top-6 hidden h-3 w-3 rounded-full border-[5px] border-foreground bg-accent shadow-[0_0_0_8px_hsl(var(--accent)/0.12)] md:block"
                  />
                  <div className="flex items-center justify-between gap-4 md:pt-3">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
                      {step.eyebrow}
                    </p>
                    <span className="rounded-full border border-background/12 bg-background/[0.05] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-background/55">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-background md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/60">
                    {step.desc}
                  </p>

                  <div className="mt-6 border-t border-background/10 pt-5">
                    <ul className="grid gap-2.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-background/72">
                          <span className="mt-[0.42rem] h-2 w-2 shrink-0 rounded-full bg-accent" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center md:mt-12 md:flex-row">
            <p className="text-sm text-background/65 sm:text-base">
              Ready to start? Step one is just a conversation.
            </p>
            <Button
              href="#claim-form"
              className="h-12 rounded-full px-7"
              dataAnalytics="cta-offer-800-process"
            >
              Get Started →
            </Button>
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left font-display text-base font-bold text-card-foreground hover:no-underline md:pl-4 md:text-lg">
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

      <section id="claim-form" className="relative overflow-hidden py-20 md:py-32" style={{ background: "var(--gradient-dark)" }}>
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />

        <div className="site-container relative">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center md:mb-12">
              <span className="mb-5 inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
                Start the Conversation
              </span>
              <h2 className="mx-auto max-w-[13ch] font-display text-[1.9rem] font-bold leading-[1.04] tracking-tight text-primary-foreground sm:max-w-none sm:text-5xl sm:leading-[1.02] md:text-6xl">
                Let&apos;s build something worth showing off.
              </h2>
              <p className="mx-auto mt-5 max-w-[24ch] text-lg leading-relaxed text-primary-foreground sm:max-w-xl sm:text-xl">
                Tell us about your business. We&apos;ll take it from there.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
              <OfferLeadForm />
            </div>

            <div className="mt-10 flex flex-col items-center gap-6 text-center">
              <a
                href={`tel:${site.contactPhone}`}
                className="inline-flex items-center gap-3 text-[1.1rem] font-semibold text-primary-foreground transition hover:text-primary-foreground"
              >
                <PhoneIcon className="h-5 w-5 text-accent" />
                <span>{site.contactPhone}</span>
              </a>

              <div className="flex flex-wrap items-center justify-center gap-3 text-base text-primary-foreground">
                <div className="flex items-center gap-1 text-[#efb11d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
                <span>5.0 from KC business owners</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
