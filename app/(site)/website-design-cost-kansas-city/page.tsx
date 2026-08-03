import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/page-transition";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { blogPostingSchema, breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const faqItems = [
  {
    question: "How much does a small-business website cost in Kansas City?",
    answer:
      "A focused custom small-business website can start at $800 with Hometown. Larger projects cost more when they need more pages, copywriting, integrations, SEO strategy, or content migration."
  },
  {
    question: "What is normal website design pricing in Kansas City?",
    answer:
      "Website design pricing in Kansas City depends on scope. A focused custom site can start at $800 with Hometown, while larger builds cost more when they need extra service pages, location pages, copywriting, booking tools, or deeper SEO planning."
  },
  {
    question: "What is included in the $800 starting price?",
    answer:
      "The starting package includes a custom mobile-first website, core pages, contact flow, basic SEO setup, analytics installation, launch support, and two rounds of revisions."
  },
  {
    question: "When does a website cost more than $800?",
    answer:
      "A project can cost more when it needs deeper copywriting, more service pages, advanced forms, booking or payment integrations, a larger content migration, or ongoing SEO support."
  },
  {
    question: "Is website design cost different from web design cost?",
    answer:
      "Most Kansas City buyers use those phrases for the same decision. The real cost difference comes from strategy, content, page count, integrations, SEO depth, and how much the website needs to help with lead generation."
  },
  {
    question: "Is a cheaper website builder enough?",
    answer:
      "DIY builders can work for simple temporary pages, but many small businesses outgrow them when they need stronger messaging, better local SEO structure, faster lead flow, and a more credible first impression."
  }
];

const costFactors = [
  {
    title: "Page count",
    text: "A simple site with core pages is easier to scope than a site with many services, locations, landing pages, or team pages."
  },
  {
    title: "Copywriting",
    text: "Costs rise when the message, service descriptions, FAQs, and calls to action need to be written from scratch."
  },
  {
    title: "Design complexity",
    text: "A clean small-business site is different from a highly custom visual system with extra layouts, motion, and creative direction."
  },
  {
    title: "Booking or payment tools",
    text: "Calendars, payments, menus, quote forms, CRMs, and other integrations add setup and testing time."
  },
  {
    title: "SEO setup",
    text: "Basic metadata is included, but deeper keyword planning, city pages, and ongoing content strategy are separate scopes."
  },
  {
    title: "Photography or content migration",
    text: "Pulling usable content from an old site, organizing photos, or cleaning up outdated pages can add meaningful work."
  }
];

const pricingOptions = [
  {
    title: "DIY builder",
    cost: "Lowest cash cost",
    text: "Good for a temporary placeholder, but the owner usually spends more time on layout, copy, mobile issues, and SEO decisions."
  },
  {
    title: "Freelancer",
    cost: "Flexible budget",
    text: "Can be a fit for smaller projects, but process, strategy, launch support, and long-term reliability vary a lot."
  },
  {
    title: "Small agency",
    cost: "Practical custom build",
    text: "Usually the best fit when a local business needs sharper strategy, stronger execution, and a website built to create leads."
  },
  {
    title: "Larger agency",
    cost: "Highest process and cost",
    text: "Useful for complex brands and large teams, but often more process and budget than a small Kansas City business needs first."
  }
];

const websitePricingRows = [
  {
    scope: "Starter custom website",
    range: "From $800",
    bestFor: "New or small businesses that need a credible custom website, core pages, mobile polish, and a clear contact path."
  },
  {
    scope: "Website redesign",
    range: "$800+",
    bestFor: "Businesses with an outdated website that needs clearer messaging, better mobile layout, cleaner SEO structure, and stronger lead flow."
  },
  {
    scope: "Growth website",
    range: "Custom quote",
    bestFor: "Businesses that need more service pages, location pages, copywriting, integrations, advanced SEO planning, or content migration."
  }
];

const exactMatchGuides = [
  {
    keyword: "website design pricing Kansas City",
    body: "Pricing should be tied to the amount of strategy, content, design, and conversion work the site needs, not just a generic page count."
  },
  {
    keyword: "web design cost Kansas City",
    body: "A practical small-business web design cost usually starts with the core website foundation, then increases when the scope adds pages, integrations, or deeper SEO."
  },
  {
    keyword: "how much does a website cost in Kansas City",
    body: "For a focused custom site, Hometown starts at $800. The final number depends on how much the website has to explain, prove, and connect."
  }
];

const included = [
  "Custom design built around the business",
  "Core pages for the offer, proof, and contact path",
  "Mobile-first build for phone-first visitors",
  "Basic SEO setup and page metadata",
  "Contact form or quote-request flow",
  "Analytics installation",
  "Launch support and two revision rounds"
];

const costDrivers = [
  "More service or location pages",
  "Redesigning messy existing content",
  "Advanced SEO planning and content expansion",
  "Booking, payment, CRM, or menu integrations",
  "Custom photography, graphics, or creative production"
];

const budgetPriorities = [
  "Credibility: the site should make the business look real, current, and trustworthy.",
  "Clarity: visitors should understand services, locations, pricing cues, and next steps fast.",
  "Mobile usability: calls, forms, menus, and quote paths should work cleanly from a phone.",
  "Lead flow: every page should make it easy to call, request a quote, or start a conversation."
];

export const metadata = createPageMetadata(
  "Website Design Cost Kansas City | From $800",
  "Compare website design pricing in Kansas City, what Hometown's $800 starting point includes, and when a web design project may cost more.",
  "/website-design-cost-kansas-city"
);

export default function WebsiteDesignCostPage() {
  const schema = [
    webPageSchema({
      name: "Website Design Cost Kansas City",
      description:
        "A practical pricing guide for Kansas City small businesses comparing custom website design, redesigns, and DIY website builders.",
      path: "/website-design-cost-kansas-city"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "Website Design Cost Kansas City", path: "/website-design-cost-kansas-city" }
    ]),
    faqItemsSchema(faqItems),
    blogPostingSchema({
      headline: "How Much Does a Website Cost in Kansas City?",
      description:
        "A practical pricing guide for Kansas City small businesses comparing custom website design, redesigns, and DIY website builders.",
      path: "/website-design-cost-kansas-city",
      datePublished: "2026-05-12",
      dateModified: "2026-08-03"
    })
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Website Pricing</p>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em] text-primary-foreground/58">Updated August 2026</p>
            <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              How much does a website cost in Kansas City?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              Hometown custom websites start at $800. The final price depends on scope, content, integrations, and how much strategy the website needs to turn visitors into leads.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#form" className="h-14 px-8">
                Get a Website Quote
              </Button>
              <Button href="/services/website-design" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
                View Website Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">The Short Answer</p>
            <p className="mt-4 text-6xl font-bold tracking-tight text-primary-foreground">$800</p>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              That is Hometown&apos;s August 2026 starting point for a focused custom website for a Kansas City small business.
            </p>
            <Link href="/services/website-design" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-primary-foreground">
              See the website design service
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </aside>

          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Small-Business Range</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Most pricing differences come down to how much the site has to do.</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A basic custom small-business website can start under $1,000 when the scope is focused: clear pages, mobile polish, a contact path, and basic SEO setup.
              </p>
              <p>
                Larger custom sites cost more when they need deeper copy, more service pages, location pages, redesign work, booking tools, payment tools, or a heavier SEO plan.
              </p>
              <p>
                If your business has outgrown a DIY builder, the better question is not just &quot;what is the cheapest website?&quot; It is what website will make the business easier to trust, understand, and contact.
              </p>
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel overflow-hidden p-0">
          <div className="border-b border-border p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Website Design Pricing Kansas City</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">A clearer way to compare website design cost in Kansas City.</h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
              If you are searching for website design pricing Kansas City, web design cost Kansas City, or how much does a website cost in Kansas City, the table below gives a practical starting point.
            </p>
          </div>
          <div className="divide-y divide-border">
            {websitePricingRows.map((row) => (
              <article key={row.scope} className="grid gap-4 p-6 md:grid-cols-[0.8fr_0.45fr_1.2fr] md:items-center md:p-7">
                <h3 className="text-xl font-bold tracking-tight text-foreground">{row.scope}</h3>
                <p className="text-2xl font-bold text-accent">{row.range}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{row.bestFor}</p>
              </article>
            ))}
          </div>
          <div className="grid gap-4 border-t border-border p-6 md:grid-cols-3 md:p-7">
            {exactMatchGuides.map((guide) => (
              <article key={guide.keyword} className="rounded-2xl border border-border bg-background p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{guide.keyword}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{guide.body}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What Affects Cost</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Six things that change a website quote.</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Website pricing gets clearer when the scope is tied to real business needs instead of vague page counts.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {costFactors.map((factor) => (
            <article key={factor.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">{factor.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{factor.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="dark-panel p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Website Pricing Options</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">The cheapest route is not always the lowest-cost decision.</h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
                Kansas City owners usually compare four paths: DIY builder, freelancer, small agency, and larger agency. The right choice depends on time, risk, and how important the site is to lead generation.
              </p>
              <Link href="/website-builder-vs-custom-website-for-small-businesses" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent transition hover:text-primary-foreground">
                Compare builders and custom websites
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pricingOptions.map((option) => (
                <article key={option.title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{option.cost}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-primary-foreground">{option.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">{option.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What $800 Includes</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Hometown&apos;s starting point covers the essentials most local businesses need first.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent">
                Full pricing
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/services/small-business-websites" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent">
                Small business website design Kansas City
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent">
                View website work
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </section>

          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">When It Costs More</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">A bigger scope should have a clear reason.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The starting package is meant to get the website foundation right. Projects move higher when they need more strategy, more content, or more technical setup.
            </p>
            <div className="mt-8 grid gap-3">
              {costDrivers.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-secondary px-5 py-4 text-sm leading-relaxed text-foreground">
                  {item}
                </div>
              ))}
            </div>
            <Link href="/services/website-redesign" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-foreground transition hover:text-accent">
              Planning a redesign?
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What to Budget For First</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Start with the website foundation before buying more marketing.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              For most Kansas City small businesses, the first website budget should go toward the pieces that make every later SEO, Google Ads, or social campaign work harder.
            </p>
          </div>
          <div className="grid gap-3">
            {budgetPriorities.map((priority) => (
              <div key={priority} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground shadow-[var(--shadow-card)]">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                <span>{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQs</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Website pricing questions.</h2>
          </div>
          <div className="rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
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
        </div>
      </SectionShell>

      <ContactCta
        title="Want a real number for your website?"
        accentText="real number"
        body="Send the basics about your business, current site, and what needs to change. We will map the cleanest scope before you spend money."
        links={[{ href: "/services/website-design", label: "Website Design Kansas City Service" }]}
      />
    </PageTransition>
  );
}
