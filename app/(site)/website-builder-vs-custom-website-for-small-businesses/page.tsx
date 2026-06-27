import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const faqItems = [
  {
    question: "Are website builders good for small businesses?",
    answer:
      "Website builders can work for simple temporary pages. A custom website is usually better when the business needs stronger messaging, local SEO structure, lead tracking, and a more credible first impression."
  },
  {
    question: "When should a small business stop using a DIY website builder?",
    answer:
      "It is time to move on when the site looks generic, is hard to update, does not explain services clearly, or is not generating calls, bookings, or quote requests."
  },
  {
    question: "How much does a custom small-business website cost?",
    answer:
      "Hometown custom websites start at $800. Larger projects can cost more when they need more pages, integrations, copywriting, or deeper SEO work."
  }
];

export const metadata = createPageMetadata(
  "Website Builder vs Custom Website",
  "A practical comparison for small businesses deciding between a DIY website builder and a custom website built around credibility, local SEO, and leads.",
  "/website-builder-vs-custom-website-for-small-businesses"
);

export default function WebsiteBuilderComparisonPage() {
  const schema = [
    webPageSchema({
      name: "Website Builder vs Custom Website for Small Businesses",
      description:
        "A comparison guide for small businesses choosing between DIY website builders and custom website design.",
      path: "/website-builder-vs-custom-website-for-small-businesses"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Website Builder vs Custom Website", path: "/website-builder-vs-custom-website-for-small-businesses" }
    ]),
    faqItemsSchema(faqItems)
  ];

  const builderFit = [
    "You need a temporary one-page placeholder",
    "You already have time to write and organize the content",
    "You do not need local SEO structure yet",
    "The business is not relying on the site for leads"
  ];

  const customFit = [
    "You need the business to look credible quickly",
    "You want service pages structured for local search",
    "You need calls, bookings, or quote requests",
    "You have outgrown generic templates and DIY limitations"
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Small Business Websites</p>
            <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              Website builder vs custom website for small businesses
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              DIY builders can get a page online. A custom site is built to explain the business, support local SEO, and turn visitors into leads.
            </p>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">A Builder May Work If</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">You only need the basics online.</h2>
            <div className="mt-8 grid gap-3">
              {builderFit.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Go Custom If</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
              The website needs to help win customers.
            </h2>
            <div className="mt-8 grid gap-3">
              {customFit.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/78">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Decision Guide</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            The real question is whether the site is just a page or a sales asset.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            A good small-business website should make the business easier to trust, easier to understand, and easier to contact. If the site is part of how customers decide who to call, custom design usually gives you more control over messaging, proof, search structure, and conversion tracking.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/services/small-business-websites"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Small business websites
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/services/website-design"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Website design Kansas City
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/website-design-cost-kansas-city"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Website design cost
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className={`group border-b border-border ${index === faqItems.length - 1 ? "border-b-0" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left text-base font-bold text-card-foreground md:pl-4 md:text-lg">
                {item.question}
                <span className="text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</div>
            </details>
          ))}
        </div>
      </SectionShell>

      <ContactCta
        title="Ready to move past the DIY site?"
        accentText="DIY site?"
        body="Hometown builds custom websites for Kansas City small businesses starting at $800."
        links={[{ href: "/work", label: "See Website Work" }]}
      />
    </div>
  );
}
