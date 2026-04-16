import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { OfferExamplesCarousel } from "@/components/sections/offer-examples-carousel";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { CheckCircleIcon, PhoneIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { testimonials } from "@/data/copy";
import { createPageMetadata } from "@/lib/seo/metadata";
import { websiteOfferSchema } from "@/lib/seo/schema";

const trustItems = [
  "Flat $800 package",
  "About 7 business days",
  "2 revision rounds",
  "No pressure"
];

const packageDetails = [
  {
    label: "Page Count",
    value: "Up to 5 core pages",
    body: "Enough room for a homepage plus the main service, about, contact, and supporting pages most small businesses actually need."
  },
  {
    label: "Revisions",
    value: "2 rounds included",
    body: "You get real feedback loops without the project dragging into endless edits."
  },
  {
    label: "Copy Support",
    value: "You bring the basics",
    body: "You do not need polished website copy. I shape the wording around your business once the essentials are clear."
  },
  {
    label: "Hosting",
    value: "Separate from the $800",
    body: "Domain and hosting are billed separately, but I help point you to the right setup and get everything connected."
  }
];

const includedItems = [
  {
    title: "Up to five core pages",
    body: "The package covers the core pages most small businesses need to look complete and credible online."
  },
  {
    title: "Custom design, not a template",
    body: "The site is designed around your business so it feels polished, intentional, and worth trusting."
  },
  {
    title: "Built for mobile first",
    body: "It is designed to look clean and work properly on phones, tablets, and desktop screens."
  },
  {
    title: "Lead-focused structure",
    body: "The layout is built to guide people toward calling, filling out the form, or taking the next step."
  },
  {
    title: "Clear contact flow",
    body: "Calls to action and form placement are set up so customers know exactly how to reach you."
  },
  {
    title: "Search-ready page setup",
    body: "The site is structured cleanly so your business has a better shot at showing up and making sense in search."
  },
  {
    title: "Fast turnaround window",
    body: "Most projects in this package launch in about 7 business days once the essentials are in place."
  },
  {
    title: "Launch help included",
    body: "You get a clean handoff and help connecting the basics so the site can actually go live without confusion."
  }
];

const fitItems = [
  "Small businesses with no real website yet",
  "Businesses with an outdated website",
  "Local service businesses that need more credibility",
  "Owners who want something affordable and done fast"
];

const processSteps = [
  {
    step: "01",
    title: "Tell me about your business",
    body: "Share the basics about what you do and what you need the website to help with."
  },
  {
    step: "02",
    title: "I design and build your site",
    body: "I map the structure, build the pages, and keep the process simple from start to finish."
  },
  {
    step: "03",
    title: "We launch your new website fast",
    body: "After revisions and approvals, the site goes live with a cleaner, more credible first impression."
  }
];

const offerFaqs = [
  {
    question: "Why is the website package only $800?",
    answer:
      "Because it is a focused offer with a clear scope. It is meant for small businesses that need a strong website without paying agency-level pricing for a larger custom project."
  },
  {
    question: "What is included in the $800 package?",
    answer:
      "It includes a custom website with up to 5 core pages, mobile-friendly design, contact form setup, lead-focused layout, two rounds of revisions, and launch support."
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects in this package are completed in about 7 business days once the business details, photos, and direction are clear."
  },
  {
    question: "Do I need to provide all the copy?",
    answer:
      "No. You need to provide the key facts about your business, services, and anything important you want included, but I help shape the copy into something website-ready."
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting and domain costs are separate, but I can help point you to the right setup and get everything connected as part of launch."
  },
  {
    question: "What if I need more than the base package?",
    answer:
      "If you need more pages, more complex functionality, or a broader scope, I will tell you that up front and give you a clearer next-best option instead of forcing the wrong package."
  },
  {
    question: "Is this only for Kansas City businesses?",
    answer:
      "No. Kansas City is the main market, but the offer can work for businesses outside KC too if the scope is still a fit."
    }
];

export const metadata: Metadata = {
  ...createPageMetadata(
    "Professional Small Business Websites for $800",
    "A focused landing page for small businesses that need a clean, credible website fast. Flat-rate pricing, simple process, and a response within 24 hours.",
    "/website-offer-800",
    site.brand.shortName
  )
};

export default function WebsiteOfferLandingPage() {
  const [featuredTestimonial, ...supportingTestimonials] = testimonials;
  const featuredProjects = projects.slice(0, 3);
  const offerSectionClass = "py-20 md:py-24";

  return (
    <>
      <StructuredData data={websiteOfferSchema()} />
      <OfferPageTracker />

      <section className="relative overflow-hidden bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-[-6rem] top-[2rem] h-[360px] w-[360px] rounded-full bg-accent/12 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[320px] w-[320px] rounded-full bg-white/6 blur-[110px]" />
        <div className="site-container relative">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Flat-Rate Website Package</p>
            <h1 className="mt-7 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Professional Small Business Websites for $800
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              Built for small businesses that need a clean, credible website fast. Simple process. Flat-rate pricing. Response in under 24 hours.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#claim-form" className="h-14 px-8" dataAnalytics="cta-offer-800">
                Get My $800 Website
              </Button>
              <Button
                href="#examples"
                variant="secondary"
                className="h-14 border-primary-foreground/20 bg-black/25 px-8 text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/8"
              >
                View Examples
              </Button>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-primary-foreground/72">
              Flat-rate pricing • Fast turnaround • Built for small businesses • No pressure
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="site-container grid gap-4 py-6 md:grid-cols-4 md:py-7">
          {trustItems.map((item) => (
            <div key={item} className="rounded-full border border-border bg-card px-5 py-3 text-center text-sm font-bold text-foreground shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <SectionShell className={`${offerSectionClass} noise bg-gradient-subtle text-foreground`}>
        <div className="max-w-3xl">
          <p className="section-badge">What&apos;s Included for $800</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A clear package with real boundaries, real deliverables, and no mystery pricing.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            This works best when you need a clean, credible website quickly and do not need a huge custom build right out of the gate.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packageDetails.map((item) => (
            <article key={item.label} className="light-panel h-full p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{item.label}</p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground">{item.value}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {includedItems.map((item) => (
            <article key={item.title} className="light-panel h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <CheckCircleIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <p className="section-badge">Who This Is For</p>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
              Best fit for owners who need something credible, affordable, and fast.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              This page is not selling every service we offer. It is for businesses that need a stronger website and want the process to stay straightforward.
            </p>
          </div>

          <div className="grid gap-4">
            {fitItems.map((item) => (
              <div key={item} className="light-panel flex items-start gap-4 p-6">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <CheckCircleIcon className="h-4 w-4" />
                </div>
                <p className="text-base leading-relaxed text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`}>
        <div className="max-w-3xl">
          <p className="section-badge">Real Reviews</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Real business owners trust the process because it stays simple and the work looks sharp.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            These are the same real Google reviews that support the rest of the Hometown site. The page should feel trustworthy before it asks for the form.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <TestimonialCard
              name={featuredTestimonial.name}
              text={featuredTestimonial.text}
              highlight={featuredTestimonial.highlight}
              featured
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {supportingTestimonials.slice(0, 4).map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                text={testimonial.text}
                highlight={testimonial.highlight}
              />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0 pb-20 md:pb-24 bg-background text-foreground">
        <div id="examples" className="scroll-mt-32" />
        <div className="max-w-3xl">
          <p className="section-badge">Examples</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A few real websites built for real businesses.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The goal is not to drop you into a generic template. It is to give your business a website that feels established and makes people trust you faster.
          </p>
        </div>

        <div className="mt-10">
          <OfferExamplesCarousel projects={featuredProjects} />
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} noise bg-gradient-subtle text-foreground`}>
        <div className="max-w-3xl">
          <p className="section-badge">Simple Process</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A low-friction path from form submit to launch.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.step} className="light-panel h-full p-7">
              <p className="text-6xl font-bold leading-none text-accent/20">{step.step}</p>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`}>
        <div className="max-w-3xl">
          <p className="section-badge">FAQ</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            The common questions people ask before they hit submit.
          </h2>
        </div>
        <div className="mt-12">
          <Accordion items={offerFaqs} />
        </div>
      </SectionShell>

      <SectionShell className="noise bg-black py-20 pb-28 text-primary-foreground md:py-24 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start">
          <div>
            <p className="section-badge">Start Here</p>
            <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              If the offer feels like a fit, send the form and I&apos;ll review it within 24 hours.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/72">
              Tell me about your business and I&apos;ll follow up within 24 hours to see if your project is a fit for the $800 package.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-primary-foreground/78">
              {["No pressure", "Clear next steps", "Fast response"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="claim-form" className="scroll-mt-32">
            <OfferLeadForm />
          </div>
        </div>
      </SectionShell>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/92 p-3 backdrop-blur-xl md:hidden">
        <div className="mx-auto flex max-w-shell items-center gap-3">
          <a
            href={`tel:${site.contactPhone}`}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary-foreground/12 bg-primary-foreground/[0.04] text-primary-foreground"
            data-analytics="phone_click"
            aria-label={`Call ${site.contactPhone}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <Button href="#claim-form" className="h-12 flex-1" dataAnalytics="cta-offer-800">
            Get My $800 Website
          </Button>
        </div>
      </div>
    </>
  );
}
