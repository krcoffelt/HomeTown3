import { FAQSection } from "@/components/sections/faq-section";
import { SectionShell } from "@/components/layout/section-shell";
import { PageHero } from "@/components/layout/page-hero";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Transparent pricing. No surprise invoices.",
  "Website package pricing and supporting marketing services for Kansas City small businesses.",
  "/pricing"
);

export default function PricingPage() {
  const schema = [
    webPageSchema({
      name: "Pricing",
      description: "Website package pricing and supporting marketing services for Kansas City small businesses.",
      path: "/pricing"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/pricing" }
    ]),
    faqSchema("pricing")
  ];
  const websiteService = services.find((service) => service.slug === "website-design");
  const additionalServices = services.filter((service) => service.slug !== "website-design");

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Pricing"
            title="Simple pricing. Clear next steps."
            subtitle="Start with the website. Add the marketing support that makes sense for your business after that."
            light
          />
        </div>
      </section>

      <SectionShell className="noise bg-gradient-subtle">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <section className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-elevated)]">
              <div className="border-b border-border bg-foreground px-7 py-7 text-primary-foreground md:px-10">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/50">
                  Website Package
                </p>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">Custom Website</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/65 md:text-base">
                      A clean, credible site built to make your business look established and easier to trust.
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground/45">From</p>
                    <p className="mt-2 font-display text-5xl font-bold leading-none md:text-6xl">$800</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 px-7 py-7 md:grid-cols-2 md:px-10">
                {(websiteService?.deliverables ?? []).slice(0, 6).map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-border px-7 py-6 sm:flex-row md:px-10">
                <Button href="/website-offer-800" className="h-12 px-7">
                  See the $800 Offer
                </Button>
                <Button href="/contact#form" variant="secondary" className="h-12 px-7">
                  Talk Through Pricing
                </Button>
              </div>
            </section>

            <aside className="rounded-[2rem] border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">Also Available</p>
              <div className="mt-5 space-y-4">
                {additionalServices.map((service) => (
                  <div key={service.slug} className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-bold text-foreground">{service.title}</p>
                      <p className="text-sm font-bold text-foreground">{service.price}</p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </SectionShell>

      <FAQSection page="pricing" />
    </PageTransition>
  );
}
