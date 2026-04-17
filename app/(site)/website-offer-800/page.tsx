import Image from "next/image";
import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { OfferExamplesCarousel } from "@/components/sections/offer-examples-carousel";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, PhoneIcon, ArrowRightIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { testimonials } from "@/data/copy";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema, websiteOfferSchema } from "@/lib/seo/schema";

const includedItems = [
  {
    title: "Custom Website Design",
    body: "A clean, modern website tailored to your business so you make a stronger first impression and look more established online."
  },
  {
    title: "Mobile-First Experience",
    body: "Your site is built to look polished and professional on phones, tablets, and desktops, so trust does not drop on smaller screens."
  },
  {
    title: "Lead-Focused Structure",
    body: "Clear sections, strong page flow, and smart calls to action help the website do more than just sit there and look good."
  },
  {
    title: "Contact & Inquiry Setup",
    body: "Forms and contact paths are built in cleanly so potential customers can reach out without friction."
  },
  {
    title: "SEO-Ready Foundation",
    body: "The site is structured with strong on-page fundamentals so your business has a better starting point for visibility and future growth."
  },
  {
    title: "Fast Turnaround",
    body: "The process is streamlined to get your site live quickly without dragging the project into weeks of unnecessary back-and-forth."
  }
];

const fitItems = [
  "Service businesses with no real website yet",
  "Businesses stuck with an outdated site that no longer feels credible",
  "Owners who want something professional without agency bloat",
  "Businesses that need a stronger first impression fast"
];

const proofItems = [
  {
    label: "Real Google reviews",
    body: "Client feedback from actual website projects, not generic trust copy."
  },
  {
    label: "Live client websites",
    body: "You can preview recent builds and see the quality for yourself."
  },
  {
    label: "Flat-rate clarity",
    body: "One focused offer for businesses that need a professional site fast."
  },
  {
    label: "Fast follow-up",
    body: "Most inquiries get a direct response within 24 hours."
  }
];

const whyOfferItems = [
  {
    title: "You get looked up first",
    body: "Most referrals, searches, and recommendations end with someone checking your website before they decide whether to trust you."
  },
  {
    title: "Outdated sites cost confidence",
    body: "If the site feels old, thin, or unfinished, people hesitate even when the business itself is great."
  },
  {
    title: "This fixes that quickly",
    body: "The $800 offer is built to give small businesses a cleaner first impression without dragging them into a bloated agency project."
  }
];

const processSteps = [
  {
    step: "01",
    title: "Send the basics",
    body: "Tell me what your business does, what pages you need, and anything important the site should communicate."
  },
  {
    step: "02",
    title: "We design and build it",
    body: "We shape the structure, design the pages, and build the site around your business instead of forcing a generic template."
  },
  {
    step: "03",
    title: "We review and launch",
    body: "After revisions and approval, I get the site live and make sure the essentials are connected so it is ready to work."
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
      "It includes a custom website, mobile-friendly design, contact form setup, lead-focused layout, two rounds of revisions, and launch support."
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
  const heroReviews = testimonials.slice(0, 2);
  const featuredProjects = ["wrapped-up-moving", "zj-carpentry-and-more", "plate-kc", "lupi-docs"]
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));
  const featuredWorkProjects = featuredProjects.slice(0, 3);
  const offerSectionClass = "py-10 md:py-20";
  const offerContainerClass = "px-5 sm:px-8";
  const schema = [
    webPageSchema({
      name: "Professional Small Business Websites for $800",
      description: "A focused landing page for service businesses that need a clean, credible website fast.",
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
    <div className="overflow-x-clip">
      <StructuredData data={schema} />
      <OfferPageTracker />

      <section className="relative overflow-hidden bg-black pt-24 pb-12 text-primary-foreground md:pt-40 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute left-[-6rem] top-[2rem] h-[360px] w-[360px] rounded-full bg-accent/12 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute right-[-4rem] top-[8rem] h-[320px] w-[320px] rounded-full bg-white/6 blur-[110px]" />
        <div className="site-container relative px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-10">
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Flat-Rate Website Package</p>
              <h1 className="mt-4 text-[2.2rem] font-bold leading-[0.96] tracking-tight sm:mt-7 sm:text-balance sm:text-5xl md:text-6xl">
                A website that makes your business look credible and gets people to reach out.
              </h1>
              <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-primary-foreground/76 sm:mt-5 sm:text-lg md:text-xl">
                Hometown Marketing Agency builds clean, modern websites for small businesses that need to look more professional online without paying bloated agency prices. Flat-rate pricing, fast turnaround, and a simple process.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
                <Button href="#claim-form" className="h-12 w-full px-6 sm:h-14 sm:w-auto sm:px-8" dataAnalytics="cta-offer-800">
                  Get My $800 Website
                </Button>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2 text-[0.7rem] text-primary-foreground/72 min-[390px]:grid-cols-2 sm:mt-8 sm:flex sm:flex-wrap sm:gap-3 sm:text-sm">
                {["Flat-rate pricing", "Around 7 business days", "Reply within 24 hours", "No pressure if it is not a fit"].map((item) => (
                  <span
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center sm:rounded-full sm:px-4"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {heroReviews.map((testimonial) => (
                  <article key={testimonial.name} className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center gap-1 text-sm text-yellow-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-snug text-primary-foreground">{testimonial.highlight}</p>
                    <p className="mt-3 text-sm leading-relaxed text-primary-foreground/68">{testimonial.name}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_20px_80px_hsl(var(--foreground)/0.18)] sm:rounded-[2rem] sm:p-5">
              <div className="mb-4 flex items-end justify-between gap-4 sm:mb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Recent Website Work</p>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-primary-foreground/68 sm:text-sm">
                    Real client websites designed to help small businesses look more established and easier to trust.
                  </p>
                </div>
              </div>

              <OfferExamplesCarousel projects={featuredProjects} compact introText={null} />
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="border-y border-border/70 bg-background py-6 text-foreground md:py-8" containerClassName={offerContainerClass}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {proofItems.map((item) => (
            <div key={item.label} className="rounded-[1.4rem] border border-border bg-card px-5 py-4 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} noise bg-gradient-subtle text-foreground`} containerClassName={offerContainerClass}>
        <div className="max-w-3xl">
          <p className="section-badge">Featured Recent Work</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-balance md:text-5xl">
            Real websites that make small businesses look sharper, cleaner, and more legitimate online.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            These are not mockups or filler examples. They are recent client websites built to create trust fast and make it easier for people to reach out.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredWorkProjects.map((project) => (
            <article key={project.slug} className="light-panel overflow-hidden p-0">
              <div className="relative h-[13.5rem] overflow-hidden border-b border-border bg-secondary sm:h-[16rem]">
                <Image src={project.featuredImageUrl} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top" />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{project.clientName}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                {project.quote ? <p className="mt-4 text-sm leading-relaxed text-foreground/80">&ldquo;{project.quote}&rdquo;</p> : null}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground transition hover:text-accent"
                  >
                    Preview Website
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`} containerClassName={offerContainerClass}>
        <div className="max-w-3xl">
          <p className="section-badge">Why This Works</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-balance md:text-5xl">
            Small business owners are usually not missing talent. They are missing a website that makes people trust them fast.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Referrals still check you out online. Searchers compare you to competitors in seconds. If the website feels weak, outdated, or unfinished, it can quietly cost you trust before you ever get the chance to talk to them.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="dark-panel p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/60">Built for service businesses</p>
            <div className="mt-6 grid gap-4">
              {whyOfferItems.map((item) => (
                <div key={item.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-bold tracking-tight text-primary-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">{item.body}</p>
                </div>
              ))}
            </div>
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

      <SectionShell className={`${offerSectionClass} noise bg-gradient-subtle text-foreground`} containerClassName={offerContainerClass}>
        <div className="max-w-3xl">
          <p className="section-badge">What You Get for $800</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-balance md:text-5xl">
            Everything you need for a clean, credible, lead-focused website.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            This is a streamlined, professionally designed website package built to help small businesses look established online without paying for bloated agency pricing.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Package includes custom website design, 2 revision rounds, contact form setup, foundational on-page SEO structure, and launch support.
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
            <span className="font-semibold text-foreground">Clear scope.</span> Hosting and domain are separate, and if your project needs more pages or more advanced functionality, I will tell you before we start and point you toward the right next step.
          </p>
        </div>
      </SectionShell>

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`} containerClassName={offerContainerClass}>
        <div className="max-w-3xl">
          <p className="section-badge">How It Works</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-balance md:text-5xl">
            Three clear steps to get your site live.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            No bloated discovery phase and no endless back-and-forth. Just a clean process that gets a professional site built and launched.
          </p>
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

      <SectionShell className={`${offerSectionClass} bg-background text-foreground`} containerClassName={offerContainerClass}>
        <div className="max-w-3xl">
          <p className="section-badge">FAQ</p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-balance md:text-5xl">
            The common questions people ask before they hit submit.
          </h2>
        </div>
        <div className="mt-12">
          <Accordion items={offerFaqs} />
        </div>
      </SectionShell>

      <SectionShell className="noise bg-black py-16 pb-28 text-primary-foreground md:py-24 md:pb-32" containerClassName={offerContainerClass}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-start lg:gap-10">
          <div>
            <p className="section-badge">Start Here</p>
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-balance md:text-5xl">
              Ready for a website that makes your business look more credible and easier to trust?
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
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
            data-analytics="phone_click"
            aria-label={`Call ${site.contactPhone}`}
          >
            <PhoneIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          <Button href="#claim-form" className="h-12 flex-1 text-sm" dataAnalytics="cta-offer-800">
            <span className="min-[390px]:hidden">Start My Website</span>
            <span className="hidden min-[390px]:inline">Get My $800 Website</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
