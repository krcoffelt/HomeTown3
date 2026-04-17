import Image from "next/image";
import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { StructuredData } from "@/components/seo/structured-data";
import { OfferExamplesCarousel } from "@/components/sections/offer-examples-carousel";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, QuoteIcon } from "@/components/ui/site-icons";
import { testimonials } from "@/data/copy";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema, websiteOfferSchema } from "@/lib/seo/schema";

const featuredProjects = projects.filter((project) => Boolean(project.liveUrl));

const heroReview = testimonials[0] ?? {
  name: "Recent client",
  highlight: "Real 5-star feedback from local businesses."
};

const includedItems = [
  {
    title: "Custom website design",
    body: "A polished site designed around your business instead of a generic template."
  },
  {
    title: "Mobile-first build",
    body: "Built to look sharp and trustworthy on the phone screens most people use first."
  },
  {
    title: "Lead-focused structure",
    body: "Clear messaging, calls to action, and contact flow so people know how to reach you."
  },
  {
    title: "SEO-ready setup",
    body: "Structured cleanly so your business has a stronger foundation online."
  },
  {
    title: "Launch support",
    body: "We help connect the essentials so the site can actually go live without confusion."
  }
];

const processSteps = [
  {
    title: "Send the basics",
    body: "Tell us what your business does, what you offer, and what the site needs to do."
  },
  {
    title: "We design and build it",
    body: "We turn that into a clean, custom website built to make your business look more established."
  },
  {
    title: "Review and launch",
    body: "We tighten the details, connect the essentials, and get it live."
  }
];

const offerFaqs = [
  {
    question: "Is this really custom?",
    answer: "Yes. It is designed around your business and goals, not dropped into a generic template."
  },
  {
    question: "How fast can it launch?",
    answer: "Most projects in this package are finished in about 7 business days once we have the basics."
  },
  {
    question: "Are hosting and domain included?",
    answer: "No. Those are separate, but we help point you to the right setup and get everything connected."
  }
];

export const metadata: Metadata = {
  ...createPageMetadata(
    "Custom Small Business Websites for $800",
    "A clean, mobile-first landing page for service businesses that need a more credible website fast.",
    "/website-offer-800",
    site.brand.shortName
  )
};

export default function WebsiteOfferLandingPage() {
  const schema = [
    webPageSchema({
      name: "Custom Small Business Websites for $800",
      description: "A focused landing page for service businesses that need a more credible website fast.",
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
    <div className="overflow-x-clip bg-white text-foreground">
      <StructuredData data={schema} />
      <OfferPageTracker />

      <section className="relative overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-18">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-6rem] top-[-5rem] h-[18rem] w-[18rem] rounded-full bg-accent/8 blur-[120px]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-[-6rem] bottom-[-7rem] h-[16rem] w-[16rem] rounded-full bg-foreground/5 blur-[120px]" />

        <div className="site-container relative px-5 sm:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="min-w-0">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-accent">Hometown Website Offer</p>
              <h1 className="mt-5 max-w-xl text-[2.35rem] font-bold leading-[0.94] tracking-tight text-foreground sm:text-[3.2rem] md:text-[4.1rem]">
                Custom small business websites from $800.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/72 sm:text-lg">
                Built for local service businesses that need to look more credible online without a bloated agency project.
              </p>

              <div className="mt-7">
                <Button href="#claim-form" className="w-full sm:w-auto sm:px-8" dataAnalytics="cta-offer-800">
                  Claim My $800 Website
                </Button>
                <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-foreground/46">
                  Flat-rate $800 • Around 7 business days • Reply within 24 hours
                </p>
              </div>

              <article className="mt-7 max-w-lg rounded-[1.5rem] border border-black/8 bg-[#f7f9fc] p-5 shadow-[0_18px_50px_rgba(17,24,39,0.06)]">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <QuoteIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-sm text-[#efb11d]">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-snug text-foreground">
                      {heroReview.highlight}
                    </p>
                    <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-foreground/42">
                      {heroReview.name} • Real client review
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="min-w-0">
              <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-[#0d1016] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                <div className="relative aspect-[0.94/1.06] sm:aspect-[1.08/1] lg:aspect-[0.96/1.04]">
                  <Image
                    src="/images/kyle.remini-enhanced.jpg"
                    alt="Kyle Coffelt of Hometown Marketing Agency"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover object-[center_16%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/48 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/52">Hometown Marketing Agency</p>
                    <p className="mt-3 max-w-sm text-xl font-bold leading-tight tracking-tight sm:text-[1.8rem]">
                      Clean websites that make local businesses look established.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-container px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="section-badge">Selected Work</p>
            <h2 className="mt-5 text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.8rem]">
              Real sites we&apos;ve built for local businesses.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-foreground/64">
              Swipe through every live website we have on this page and open any of them live.
            </p>
          </div>

          <div className="mt-8">
            <OfferExamplesCarousel projects={featuredProjects} />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-12 md:py-16">
        <div className="site-container px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <p className="section-badge">The $800 Foundation</p>
              <h2 className="mt-5 max-w-2xl text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.8rem]">
                A premium-looking site without a bloated process.
              </h2>

              <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                {includedItems.map((item) => (
                  <article key={item.title} className="flex items-start gap-4 py-5">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <CheckCircleIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-foreground/64">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/54">
                Best for service businesses that need a cleaner online presence without turning this into a giant agency project.
              </p>
            </div>

            <div>
              <p className="section-badge">How It Works</p>
              <h2 className="mt-5 max-w-lg text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.8rem]">
                Simple. Clear. Fast.
              </h2>

              <div className="mt-8 space-y-7">
                {processSteps.map((step) => (
                  <article key={step.title} className="border-t border-black/10 pt-5 first:border-t-0 first:pt-0">
                    <h3 className="text-lg font-bold tracking-tight text-foreground">{step.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-foreground/64">{step.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d10] py-14 text-white md:py-18">
        <div className="site-container px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/42">Start Here</p>
              <h2 className="mt-5 max-w-lg text-[2rem] font-bold leading-tight tracking-tight sm:text-[2.8rem]">
                See if your business is a fit.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/66">
                Start with your email and we&apos;ll send the clearest next step within 24 hours.
              </p>

              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {offerFaqs.map((item) => (
                  <div key={item.question} className="py-4">
                    <p className="text-sm font-semibold tracking-tight text-white">{item.question}</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/62">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="claim-form" className="scroll-mt-28">
              <OfferLeadForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
