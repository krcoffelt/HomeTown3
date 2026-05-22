import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon, TrendingUpIcon, ZapIcon } from "@/components/ui/site-icons";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "small-business-websites": GlobeIcon,
  "website-redesign": GlobeIcon,
  "google-ads-management": TargetIcon,
  "social-media-management": ZapIcon,
  "graphic-design": CheckCircleIcon,
  "search-engine-optimization": GlobeIcon,
  "analytics-and-tracking": TrendingUpIcon,
  "brand-identity": ZapIcon
};

export const metadata = createPageMetadata(
  "Website Design & Marketing Services Kansas City",
  "Website design, SEO, paid ads, social media, and design services for Kansas City small businesses.",
  "/services"
);

export default function ServicesPage() {
  const schema = [
    webPageSchema({
      name: "Services",
      description: "Website design, SEO, paid ads, social media, and design services for Kansas City small businesses.",
      path: "/services"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="site-container relative">
          <PageHero
            badge="Our Services"
            title="Everything you need. Nothing you don't."
            subtitle="Start with Kansas City website design, then add SEO, paid ads, social media, and design support when the business is ready."
            light
          />
        </div>
      </section>

      <SectionShell className="pt-20 pb-0 md:pt-28">
        <div className="light-panel p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Best First Step</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                Most small businesses need the website foundation first.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A clearer website makes SEO, Google Ads, social media, and referral traffic work harder because customers have a better place to land.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Website Design Kansas City", href: "/services/website-design" },
                { label: "Small Business Websites", href: "/services/small-business-websites" },
                { label: "Website Redesign Services", href: "/services/website-redesign" },
                { label: "Website Pricing", href: "/pricing" },
                { label: "Website Design Cost", href: "/website-design-cost-kansas-city" },
                { label: "View Website Work", href: "/work" },
                { label: "Contact Hometown", href: "/contact#form" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background px-5 py-4 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {link.label}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? GlobeIcon;
            const reverse = index % 2 === 1;

            return (
              <Reveal key={service.slug}>
                <article className={`flex flex-col gap-10 lg:items-start ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  <div className="flex-1">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">{service.title}</h2>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-accent">{service.price}</p>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{service.description}</p>
                    <Link href={`/services/${service.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">
                      View Service Details
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="light-panel flex-1 p-7 md:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What&apos;s Included</p>
                    <ul className="mt-6 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                          <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-bold tracking-tight md:text-5xl">Not sure what you need? That&apos;s totally fine.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact#form" className="h-14 px-8">
            Let&apos;s Talk
          </Button>
          <Button href="/locations" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
            Browse Service Areas
          </Button>
          <Button href="/about" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
            Meet Hometown
          </Button>
        </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
