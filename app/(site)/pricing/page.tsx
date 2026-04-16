import { FAQSection } from "@/components/sections/faq-section";
import { SectionShell } from "@/components/layout/section-shell";
import { PageHero } from "@/components/layout/page-hero";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";
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
            title="Transparent pricing. No surprise invoices."
            subtitle="A clear website package up front, plus the rest of the services we offer when you need more than the site."
            light
          />
        </div>
      </section>

      <SectionShell className="noise bg-gradient-subtle">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="gradient-border relative rounded-2xl bg-card p-8 shadow-elevated">
            <span className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">
              Website Package
            </span>
            <div className="mt-6 flex flex-wrap items-end gap-4">
              <p className="gradient-text text-6xl font-bold tracking-tight">$800</p>
              <p className="pb-2 text-lg text-muted-foreground line-through">$1,000</p>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Custom, premium-looking website design for small businesses that need a stronger first impression and a clearer path to leads.
            </p>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {(websiteService?.features ?? homepageCopy.pricingFeatures).map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact#form" className="mt-8 h-12 rounded-xl px-8">
              Get Started
            </Button>
          </div>

          <aside className="light-panel p-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Other Services</p>
            <div className="mt-6 space-y-5">
              {additionalServices.map((service) => (
                <div key={service.slug} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-sm font-bold text-foreground">{service.title}</p>
                    <p className="text-sm font-bold text-foreground">{service.price}</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                </div>
              ))}
            </div>
            <Button href="/website-offer-800#claim-form" className="mt-7 w-full">
              See the $800 Offer
            </Button>
          </aside>
        </div>
      </SectionShell>

      <FAQSection page="pricing" />
    </PageTransition>
  );
}
