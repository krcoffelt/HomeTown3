import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/ui/page-transition";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const faqItems = [
  {
    question: "How much does a small-business website cost in Kansas City?",
    answer:
      "Hometown custom websites start at $800. The final cost depends on page count, content needs, integrations, booking tools, SEO scope, and how much existing material is ready to use."
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
    question: "Is a cheaper website builder enough?",
    answer:
      "DIY builders can work for simple temporary pages, but many small businesses outgrow them when they need stronger messaging, better local SEO structure, faster lead flow, and a more credible first impression."
  }
];

export const metadata = createPageMetadata(
  "Website Design Cost Kansas City | Custom Websites from $800",
  "Learn what small-business website design costs in Kansas City, what Hometown's $800 starting price includes, and when a project may cost more.",
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
      { name: "Website Design Cost Kansas City", path: "/website-design-cost-kansas-city" }
    ]),
    faqItemsSchema(faqItems)
  ];

  const included = [
    "Custom mobile-first website design",
    "Homepage and core internal pages",
    "Contact form or quote-request path",
    "Basic SEO setup and metadata",
    "Google Analytics installation",
    "Launch support and two revision rounds"
  ];

  const costDrivers = [
    "More service or location pages",
    "Copywriting from scratch",
    "Booking, payment, or CRM integrations",
    "Large content migration",
    "Advanced SEO strategy",
    "Custom photography or creative production"
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Website Design Cost</p>
            <h1 className="mt-6 font-display text-[2.4rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              How much does a website cost in Kansas City?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              Hometown custom websites start at $800 for small businesses that need a credible, fast, lead-focused site without agency bloat.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact#form" className="h-14 px-8">
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
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Starting Price</p>
            <p className="mt-4 text-6xl font-bold tracking-tight text-primary-foreground">$800</p>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              Best for a small business that needs a professional custom website, clear services, mobile polish, and a working contact path.
            </p>
          </aside>

          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What Is Included</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              The baseline package covers the essentials most local businesses need first.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">When It Costs More</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Scope changes the price.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Transparent pricing works best when the project scope is clear. These are the common reasons a small-business website moves beyond the starting price.
            </p>
            <div className="mt-8 grid gap-3">
              {costDrivers.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-secondary px-5 py-4 text-sm leading-relaxed text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">How to Compare</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
              Compare on business outcome, not just the page count.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              A good website should make the business easier to trust, easier to understand, and easier to contact. That is why the build focuses on messaging, structure, speed, mobile usability, and lead flow before extra decoration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services/website-redesign" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-primary-foreground transition hover:border-accent hover:text-accent">
                Redesign an old site
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-bold text-primary-foreground transition hover:border-accent hover:text-accent">
                See website examples
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQs</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Website pricing questions.
            </h2>
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

      <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-bold tracking-tight md:text-5xl">Want a real number for your website?</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/72">
            Send the basics about your business, current site, and what needs to change. We will map the cleanest scope before you spend money.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact#form" className="h-14 px-8">
              Start a Website Quote
            </Button>
            <Button href="/services/website-design" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
              Website Design Service
            </Button>
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
