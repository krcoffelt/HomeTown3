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

const includedItems = [
  {
    title: "Custom site up to 5 pages",
    body: "Enough room for the homepage, service, about, contact, and core supporting pages most businesses actually need."
  },
  {
    title: "Designed around your business",
    body: "It looks polished, credible, and specific to your business instead of feeling like a generic template."
  },
  {
    title: "Clean on every screen",
    body: "The site is built to look sharp and work properly on phones, tablets, and desktop screens."
  },
  {
    title: "Clear path to contact you",
    body: "Calls to action and page flow are built to make it easy for people to reach out when they are ready."
  },
  {
    title: "Copy help where needed",
    body: "You bring the basics and I shape the wording so the site sounds cleaner, clearer, and more trustworthy."
  },
  {
    title: "Launch support included",
    body: "I help get the essentials connected and live so the project does not stall right at the finish line."
  }
];

const fitItems = [
  "Service businesses with no real website yet",
  "Businesses stuck with an outdated site that no longer feels credible",
  "Owners who want something professional without agency bloat",
  "Businesses that need a stronger first impression fast"
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
  const offerSectionClass = "py-16 md:py-20";

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
              Built for service businesses that need a clean, credible website fast. Flat-rate pricing. Clear process. Response in under 24 hours.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#claim-form" className="h-14 px-8" dataAnalytics="cta-offer-800">
                Get My $800 Website
              </Button>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-primary-foreground/72">
              Flat-rate pricing • Launch in about 7 days • Built for service businesses • Clear follow-up in under 24 hours
            </p>
          </div>
        </div>
      </section>

      <SectionShell className={`${offerSectionClass} noise bg-gradient-subtle text-foreground`}>
        <div className="max-w-3xl">
          <p className="section-badge">What You Get</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Everything most small businesses need to get online without dragging the project out.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            This is a focused website package for service businesses that want something clean, credible, and ready to launch fast.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Up to 5 core pages, 2 revision rounds, and a typical turnaround of about 7 business days once the essentials are clear.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {includedItems.map((item) => (
            <article key={item.title} className="light-panel flex h-full items-start gap-4 p-6">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <CheckCircleIcon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.03] px-6 py-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Simple scope.</span> Hosting and domain are separate, and if your project needs more pages or more complex functionality, I will tell you up front before anything moves forward.
          </p>
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
              This page is for businesses that need a sharper website and want the process to stay simple. It is not trying to sell you every service the agency offers.
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
        <div className="max-w-3xl">
          <p className="section-badge">Selected Proof</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A few recent websites that show what this offer can look like in the real world.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The point is not to send you browsing. It is to show enough real work that submitting the form feels like a reasonable next step.
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
              Tell me about your business and I&apos;ll follow up within 24 hours to confirm whether the project is a fit for the $800 package and what the next step should be.
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
