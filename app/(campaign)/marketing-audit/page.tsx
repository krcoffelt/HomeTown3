import Image from "next/image";
import Link from "next/link";
import { MarketingAuditPageTracker } from "@/components/analytics/marketing-audit-page-tracker";
import { StructuredData } from "@/components/seo/structured-data";
import { ContactForm } from "@/components/sections/contact-form";
import { MarketingAuditStickyCta } from "@/components/sections/marketing-audit-sticky-cta";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeIcon,
  PhoneIcon,
  TargetIcon,
  TrendingUpIcon
} from "@/components/ui/site-icons";
import { testimonials } from "@/data/copy";
import { site } from "@/data/site";
import { analyticsEvents } from "@/lib/analytics/events";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const auditAreas = [
  {
    number: "01",
    title: "Website conversion path",
    body: "We look for the friction between a visitor landing and taking action—message clarity, calls to action, mobile experience, speed, and forms.",
    icon: TargetIcon
  },
  {
    number: "02",
    title: "Search visibility",
    body: "We review how customers can find you today, where local and organic visibility is thin, and which searches deserve attention first.",
    icon: GlobeIcon
  },
  {
    number: "03",
    title: "Paid traffic efficiency",
    body: "If you run ads, we examine the path from targeting to landing page so clicks have a better chance of becoming qualified leads.",
    icon: TrendingUpIcon
  },
  {
    number: "04",
    title: "Tracking and lead signals",
    body: "We check whether calls, forms, bookings, and other meaningful actions are being measured clearly enough to guide decisions.",
    icon: CheckCircleIcon
  }
];

const steps = [
  {
    title: "Share the basics",
    body: "Tell us what you sell, where leads come from today, and what feels unclear."
  },
  {
    title: "We review the evidence",
    body: "We inspect the channels and conversion path that are available to evaluate."
  },
  {
    title: "Get a focused next step",
    body: "We explain what looks healthy, what may be leaking opportunity, and what to prioritize."
  }
];

const faqItems = [
  {
    question: "Is the marketing audit really free?",
    answer: "Yes. The audit is a no-cost first conversation designed to identify the clearest opportunity in your current marketing."
  },
  {
    question: "What can you audit?",
    answer: "We can review your website, local and organic search visibility, Google or Meta ads, and conversion tracking based on what is currently available."
  },
  {
    question: "Do I need to be running ads already?",
    answer: "No. The audit can help determine whether your website, SEO, paid ads, or tracking should be the first priority."
  },
  {
    question: "Who will I speak with?",
    answer: "You will speak directly with Kyle, Hometown's founder and the person who reviews the work and builds the strategy."
  }
];

export const metadata = createPageMetadata(
  "Free Kansas City Marketing Audit",
  "Get a free, focused audit of your website, SEO, ads, and conversion tracking. See what is working, where leads may be leaking, and what to fix first.",
  "/marketing-audit"
);

export default function MarketingAuditPage() {
  const featuredReview = testimonials.find((item) => item.featured) ?? testimonials[0];
  const schema = [
    webPageSchema({
      name: "Free Marketing Audit for Kansas City Small Businesses",
      description: "A focused review of website conversion, search visibility, paid media, and lead tracking from Hometown Marketing Agency.",
      path: "/marketing-audit"
    }),
    faqItemsSchema(faqItems)
  ];

  return (
    <>
      <MarketingAuditPageTracker />
      <StructuredData data={schema} />

      <section className="relative isolate min-h-[860px] overflow-hidden bg-[#03050a] text-white md:min-h-[100svh]">
        <Image
          src="/images/hero-bg-desktop.jpg"
          alt="Kansas City skyline at sunset"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="-z-20 object-cover object-[62%_center] animate-scale-in md:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,5,10,0.97)_0%,rgba(3,5,10,0.91)_40%,rgba(3,5,10,0.46)_72%,rgba(3,5,10,0.22)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,5,10,0.32)_0%,rgba(3,5,10,0.08)_55%,rgba(3,5,10,0.82)_100%)]" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:80px_80px]"
        />

        <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10">
          <div className="mx-auto flex h-24 w-full max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
            <div aria-label="Hometown Marketing Agency">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/HometownLogoWhite2026-sm.png"
                alt="Hometown Marketing Agency"
                width={360}
                height={144}
                className="h-11 w-auto sm:h-12"
              />
            </div>
            <div className="flex items-center gap-3">
              <a
                href={"tel:" + site.contactPhone}
                aria-label={"Call Hometown at " + site.contactPhone}
                className="hidden h-12 items-center gap-2 rounded-full border border-white/18 px-5 text-sm font-bold text-white/82 transition hover:border-white/45 hover:text-white sm:inline-flex"
                data-analytics="phone_click"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.contactPhone}
              </a>
              <Button href="#audit-form" dataAnalytics="cta-audit-header" className="h-12 px-5 sm:px-6">
                Get My Audit
              </Button>
            </div>
          </div>
        </header>

        <div className="mx-auto flex min-h-[860px] w-full max-w-[1380px] items-end px-5 pb-16 pt-36 sm:px-8 md:min-h-[100svh] md:items-center md:pb-20 md:pt-36 lg:px-12">
          <div className="max-w-[1020px]">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/25 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_16px_hsl(var(--accent))]" />
                Free marketing audit · Kansas City
              </span>
            </div>
            <h1
              className="mt-7 max-w-[1020px] animate-fade-in-up text-balance font-display text-[clamp(3rem,6.2vw,5.9rem)] font-bold leading-[0.9] tracking-[-0.055em]"
              style={{ animationDelay: "100ms" }}
            >
              Find out where your marketing is <span className="text-[#377df1]">losing leads.</span>
            </h1>
            <p
              className="mt-7 max-w-2xl animate-fade-in-up text-base leading-7 text-white/76 sm:text-lg sm:leading-8 md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              We&apos;ll review your website, search visibility, ads, and tracking—then show you what is working, where opportunity may be leaking, and what to fix first.
            </p>
            <div
              id="hero-audit-cta"
              className="mt-9 flex animate-fade-in-up flex-col items-start gap-4 sm:flex-row sm:items-center"
              style={{ animationDelay: "260ms" }}
            >
              <Button href="#audit-form" dataAnalytics="cta-audit-hero" className="group h-[3.75rem] w-full px-8 text-base sm:w-auto">
                Get My Free Marketing Audit
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <p className="text-sm leading-6 text-white/62">Free. No obligation. Directly with the person doing the work.</p>
            </div>
            <div
              className="mt-10 flex animate-fade-in-up flex-wrap gap-x-7 gap-y-3 border-t border-white/14 pt-6 text-sm font-medium text-white/72"
              style={{ animationDelay: "340ms" }}
            >
              <span className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#4b8cff]" /> 5.0 Google rating</span>
              <span className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#4b8cff]" /> 23+ projects delivered</span>
              <span className="inline-flex items-center gap-2"><CheckCircleIcon className="h-4 w-4 text-[#4b8cff]" /> Built for small businesses</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/8 bg-white py-8">
        <div className="mx-auto grid w-full max-w-[1380px] gap-5 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            ["5.0", "Google review rating"],
            ["23+", "Projects delivered"],
            ["1:1", "Direct founder access"]
          ].map(([value, label], index) => (
            <div key={label} className={"flex items-baseline justify-center gap-3 py-2 " + (index < 2 ? "sm:border-r sm:border-black/10" : "")}>
              <span className="text-3xl font-bold tracking-[-0.04em] text-black">{value}</span>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-black/50">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f3ee] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-12 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">What we look for</p>
              <h2 className="mt-5 max-w-lg text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
                One audit. Four places leads get lost.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-black/62">
                The goal is not to hand you a longer to-do list. It is to find the clearest, highest-impact place to start.
              </p>
            </div>

            <div className="border-t border-black/16">
              {auditAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article key={area.number} className="group grid gap-5 border-b border-black/16 py-8 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:py-10">
                    <span className="text-sm font-bold tracking-[0.18em] text-accent">{area.number}</span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.025em] text-black sm:text-3xl">{area.title}</h3>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-black/60">{area.body}</p>
                    </div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 text-black transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-20 lg:px-12">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="relative mx-auto aspect-[4/5] max-w-[500px] overflow-hidden rounded-[2rem] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
              <Image
                src="/images/kyle.remini-enhanced.jpg"
                alt="Kyle Coffelt, founder of Hometown Marketing Agency"
                fill
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="object-cover object-[center_28%] transition duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/92 via-black/55 to-transparent p-6 pt-24 text-white sm:p-8 sm:pt-32">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/58">Your audit is reviewed by</p>
                <p className="mt-2 text-2xl font-bold tracking-tight">Kyle Coffelt</p>
                <p className="mt-1 text-sm text-white/70">Founder, Hometown Marketing Agency</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Human insight, not a score generator</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold leading-[1] tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
              You&apos;ll talk to the person actually reviewing the work.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-black/62">
              No handoff to a sales team. Kyle reviews the available evidence, explains it in plain language, and helps you separate urgent fixes from expensive distractions.
            </p>

            <figure className="mt-12 border-l-2 border-accent pl-6 sm:pl-8">
              <div className="flex gap-1 text-[#e8a91b]" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className="mt-5 max-w-2xl text-2xl font-bold leading-[1.25] tracking-[-0.025em] text-black sm:text-3xl">
                “{featuredReview.highlight}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-black/48">
                {featuredReview.name} · Google review
              </figcaption>
            </figure>

            <div className="mt-12">
              <Button href="#audit-form" dataAnalytics="cta-audit-founder" className="group h-14 px-8 text-base">
                Request My Audit
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071127] py-20 text-white sm:py-24 lg:py-28">
        <div aria-hidden="true" className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-accent/18 blur-[120px]" />
        <div className="relative mx-auto w-full max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#68a0ff]">What happens next</p>
              <h2 className="mt-5 text-4xl font-bold leading-none tracking-[-0.045em] sm:text-5xl">Simple on purpose.</h2>
            </div>
            <div className="border-t border-white/16">
              {steps.map((step, index) => (
                <div key={step.title} className="grid gap-4 border-b border-white/16 py-7 sm:grid-cols-[4rem_1fr] sm:py-8">
                  <span className="font-bold text-[#68a0ff]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-white/62">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audit-form" className="scroll-mt-4 bg-[#f5f3ee] py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid w-full max-w-[1380px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20 lg:px-12">
          <div className="lg:sticky lg:top-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white">
              <ClockIcon className="h-4 w-4" /> Start here
            </span>
            <h2 className="mt-6 max-w-xl text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-black sm:text-5xl lg:text-6xl">
              Stop guessing. Find the first move.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-black/62">
              Share a little context and we&apos;ll follow up to schedule your free marketing audit.
            </p>
            <ul className="mt-8 space-y-4 text-sm font-medium text-black/70">
              <li className="flex items-center gap-3"><CheckCircleIcon className="h-5 w-5 text-accent" /> Website, SEO, ads, and tracking review</li>
              <li className="flex items-center gap-3"><CheckCircleIcon className="h-5 w-5 text-accent" /> Plain-language findings</li>
              <li className="flex items-center gap-3"><CheckCircleIcon className="h-5 w-5 text-accent" /> A prioritized next step</li>
            </ul>
          </div>

          <ContactForm
            formId="marketing-audit-form"
            heading="Where should we send your audit follow-up?"
            helperText="Next, we'll ask for a few details so the review starts with useful context."
            serviceNeeded="Ad Landing Page — Free Marketing Audit"
            detailsLabel="Website and biggest marketing question"
            detailsPlaceholder="Share your website, what you sell, where leads come from today, and what you are unsure is working."
            submitLabel="Get My Free Marketing Audit"
            successEvent={analyticsEvents.auditLeadSubmitSuccess}
            successTitle="Your audit request is in."
            successBody="We'll review your details and reach out to schedule the audit."
          />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">Questions before you start?</p>
            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-black sm:text-5xl">A few straight answers.</h2>
          </div>
          <div className="mt-12 border-t border-black/12">
            {faqItems.map((item) => (
              <details key={item.question} className="group border-b border-black/12 py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left text-lg font-bold text-black sm:text-xl">
                  {item.question}
                  <span className="text-2xl font-normal text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-7 text-base leading-7 text-black/60">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#03050a] py-8 text-white">
        <div className="mx-auto flex w-full max-w-[1380px] flex-col gap-5 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/HometownLogoWhite2026-sm.png"
              alt="Hometown Marketing Agency"
              width={360}
              height={144}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/52">
            <span>© {new Date().getFullYear()} Hometown Marketing Agency</span>
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="transition hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>

      <MarketingAuditStickyCta />
    </>
  );
}
