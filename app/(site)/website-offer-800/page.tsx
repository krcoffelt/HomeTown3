import Image from "next/image";
import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { StructuredData } from "@/components/seo/structured-data";
import { OfferExamplesCarousel } from "@/components/sections/offer-examples-carousel";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/data/copy";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema, websiteOfferSchema } from "@/lib/seo/schema";

const featuredProjects = ["wrapped-up-moving", "zj-carpentry-and-more", "plate-kc"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

const heroReview = testimonials[0] ?? {
  name: "Recent client",
  highlight: "Real 5-star feedback from local businesses."
};

const includedItems = [
  {
    number: "01",
    title: "Custom website design",
    body: "A polished site designed around your business instead of a generic template."
  },
  {
    number: "02",
    title: "Mobile-first build",
    body: "Built to look sharp and trustworthy on the phone screens most people use first."
  },
  {
    number: "03",
    title: "Lead-focused structure",
    body: "Clear messaging, calls to action, and contact flow so people know how to reach you."
  },
  {
    number: "04",
    title: "SEO-ready setup",
    body: "Structured cleanly so your business has a stronger foundation online."
  },
  {
    number: "05",
    title: "Launch support",
    body: "We help connect the essentials so the site can actually go live without confusion."
  }
];

const processSteps = [
  {
    number: "1",
    title: "Send the basics",
    body: "Tell us what your business does, what you offer, and what the site needs to do."
  },
  {
    number: "2",
    title: "We design and build it",
    body: "We turn that into a clean, custom website built to make your business look more established."
  },
  {
    number: "3",
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

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white">
        <Image
          src="/images/kyle.remini-enhanced.jpg"
          alt="Kyle Coffelt of Hometown Marketing Agency"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_16%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,0.28)_0%,rgba(3,8,18,0.34)_24%,rgba(3,8,18,0.74)_62%,rgba(3,8,18,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(33,81,218,0.28),transparent_28%)]" />

        <div className="site-container relative flex min-h-[100svh] items-end px-5 pb-10 pt-28 sm:px-8 sm:pb-14">
          <div className="max-w-xl">
            <p className="text-[3.15rem] font-bold leading-none tracking-[-0.06em] text-white sm:text-[4.8rem] md:text-[6rem]">
              Hometown
            </p>
            <h1 className="mt-3 max-w-lg text-[2.15rem] font-bold leading-[0.95] tracking-tight sm:text-[3rem] md:text-[3.7rem]">
              Websites that make your business look credible.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/72 sm:text-lg">
              Clean, modern websites for service businesses that need to look more established online fast.
            </p>

            <div className="mt-7">
              <Button href="#claim-form" className="w-full sm:w-auto sm:px-8" dataAnalytics="cta-offer-800">
                Claim My $800 Website
              </Button>
              <p className="mt-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/52">
                Flat-rate $800 • Around 7 business days • Reply within 24 hours
              </p>
            </div>

            <div className="mt-7 max-w-sm border-t border-white/14 pt-5">
              <div className="flex items-center gap-1 text-sm text-[#efb11d]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="mt-3 text-sm font-semibold leading-snug text-white/92">
                {heroReview.highlight}
              </p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-white/44">
                {heroReview.name} • Real client review
              </p>
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
              Swipe through a few recent projects and open any of them live.
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
                  <article key={item.title} className="grid gap-2 py-5 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-4">
                    <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-accent">{item.number}</p>
                    <div>
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

              <div className="mt-8 space-y-7 border-l border-black/10 pl-6">
                {processSteps.map((step) => (
                  <article key={step.number} className="relative">
                    <div className="absolute left-[-2.1rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                      {step.number}
                    </div>
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
                {offerFaqs.map((item, index) => (
                  <details key={item.question} className="group py-4" open={index === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                      <span className="text-sm font-semibold tracking-tight text-white">{item.question}</span>
                      <span className="text-white/48 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-white/62">{item.answer}</p>
                  </details>
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
