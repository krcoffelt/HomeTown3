import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { OfferFeaturedWork } from "@/components/sections/offer-featured-work";
import { OfferFinalCta } from "@/components/sections/offer-final-cta";
import { OfferHero } from "@/components/sections/offer-hero";
import { OfferPackage } from "@/components/sections/offer-package";
import { OfferTrustBand } from "@/components/sections/offer-trust-band";
import { StructuredData } from "@/components/seo/structured-data";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema, websiteOfferSchema } from "@/lib/seo/schema";

const processSteps = [
  {
    step: "01",
    title: "Send the basics",
    body: "A few details about your business, what you offer, and what the site needs to do."
  },
  {
    step: "02",
    title: "We design and build it",
    body: "A clean, custom website built to make your business look established — no templates."
  },
  {
    step: "03",
    title: "Review and launch",
    body: "Two rounds of revisions, then we connect the essentials and get it live."
  }
];

const offerFaqs = [
  {
    question: "Is this really custom?",
    answer: "Yes. Every site is designed around your business and goals, not dropped into a generic template."
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
    "Custom websites for Kansas City small businesses. $800 flat rate, built in about 7 business days. 50+ KC projects, 5.0 Google reviews, no contracts.",
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
    <div className="overflow-x-clip bg-white text-foreground">
      <StructuredData data={schema} />
      <OfferPageTracker />

      <OfferHero />
      <OfferTrustBand />
      <OfferFeaturedWork />
      <OfferPackage />

      <section className="bg-white py-16 md:py-20">
        <div className="site-container px-5 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">
                  How it works
                </p>
                <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-[2.2rem]">
                  Simple. Clear. Fast.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/64">
                Three steps from first message to launch. No long onboarding, no waiting.
              </p>
            </div>

            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((step) => (
                <li
                  key={step.step}
                  className="relative border-t border-black/12 pt-5"
                >
                  <span className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-foreground/40">
                    Step {step.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/64">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f0] py-16 md:py-20">
        <div className="site-container px-5 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent">FAQ</p>
              <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.06] tracking-tight text-foreground sm:text-[2.2rem]">
                Quick answers before you reach out.
              </h2>
            </div>

            <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {offerFaqs.map((item) => (
                <div key={item.question} className="py-6">
                  <dt className="text-base font-bold tracking-tight text-foreground sm:text-lg">
                    {item.question}
                  </dt>
                  <dd className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/68">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <OfferFinalCta />
    </div>
  );
}
