import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, ClockIcon, MessageCircleIcon, PhoneIcon, TargetIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { testimonials } from "@/data/copy";
import { createPageMetadata } from "@/lib/seo/metadata";
import { websiteOfferSchema } from "@/lib/seo/schema";

const trustItems = [
  "Flat-rate pricing",
  "Fast turnaround",
  "Built for small businesses",
  "No pressure"
];

const proofBullets = [
  {
    title: "Fast turnaround",
    body: "Most sites in this package launch in about 7 business days once the basics are clear.",
    icon: ClockIcon
  },
  {
    title: "Clear communication",
    body: "You work directly with the person building the site, so revisions stay simple and fast.",
    icon: MessageCircleIcon
  },
  {
    title: "Lead-focused design",
    body: "The structure is built to make your business look credible and make it easy to contact you.",
    icon: TargetIcon
  }
];

const includedItems = [
  "Custom multi-page website",
  "Mobile-friendly design",
  "Lead-focused layout",
  "Contact form setup",
  "Basic SEO structure",
  "Fast launch process",
  "Simple post-launch handoff"
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
    question: "What is included in the $800 package?",
    answer:
      "The package includes a custom multi-page website, mobile-friendly design, contact form setup, lead-focused page structure, basic SEO setup, and a simple handoff after launch."
  },
  {
    question: "How long does it take?",
    answer:
      "Most projects in this package are completed in about 7 business days once the business details, photos, and direction are clear."
  },
  {
    question: "Do I need to provide content?",
    answer:
      "You do not need perfect copy ready on day one. I still need the core facts about your business, services, and anything important you want on the site, but I can help shape the wording."
  },
  {
    question: "What if I need more than a basic site?",
    answer:
      "If your project needs more pages, extra functionality, or a more complex scope, I will tell you that up front and outline the next-best option clearly."
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting and domain costs are separate, but I can help point you to the right setup and get everything connected as part of launch."
  },
  {
    question: "Can you help after launch?",
    answer:
      "Yes. I can help with updates and support after launch if you need it. The offer is focused on getting the site live fast first."
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
  const featuredTestimonials = testimonials.slice(0, 2);
  const featuredProjects = projects.slice(0, 3);

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

      <SectionShell className="bg-background text-foreground">
        <div className="max-w-3xl">
          <p className="section-badge">Real Reviews</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Real business owners trust the process because it stays simple and the work looks sharp.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_24rem]">
          {featuredTestimonials.map((testimonial) => (
            <article key={testimonial.name} className="light-panel p-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Google Review</p>
              <p className="mt-5 text-2xl font-bold leading-tight text-foreground">{testimonial.highlight}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{testimonial.text}</p>
              <p className="mt-6 text-sm font-bold text-foreground">{testimonial.name}</p>
            </article>
          ))}

          <aside className="dark-panel p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why Owners Move Forward</p>
            <div className="mt-6 space-y-5">
              {proofBullets.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-foreground/8 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-base font-bold text-primary-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{item.body}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 grid gap-3 text-sm text-primary-foreground/72">
              <p>50+ projects delivered</p>
              <p>About 7 business days to launch</p>
              <p>5.0 review reputation</p>
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-0 bg-background text-foreground">
        <div id="examples" className="scroll-mt-32" />
        <div className="max-w-3xl">
          <p className="section-badge">Examples</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A few real websites built for real businesses.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The point of this offer is not to give you a template. It is to get your business a site that looks established and makes people trust you faster.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="light-panel overflow-hidden p-0">
              <div className="relative h-56 overflow-hidden rounded-t-[1.5rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.featuredImageUrl}
                  alt={`${project.clientName} project preview`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="inline-flex rounded-full bg-accent/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {project.category}
                </p>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">{project.clientName}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                {project.quote ? (
                  <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground/72">
                    &ldquo;{project.quote}&rdquo;
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="noise bg-gradient-subtle text-foreground">
        <div className="max-w-3xl">
          <p className="section-badge">What&apos;s Included for $800</p>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            A clear package that gets your business online quickly without feeling cheap.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {includedItems.map((item) => (
            <article key={item} className="light-panel h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <CheckCircleIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{item}</h3>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-background text-foreground">
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

      <SectionShell className="noise bg-gradient-subtle text-foreground">
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

      <SectionShell className="bg-background text-foreground">
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

      <SectionShell className="noise bg-black pb-28 text-primary-foreground md:pb-32">
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
