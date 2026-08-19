import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { StructuredData } from "@/components/seo/structured-data";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "search-engine-optimization": GlobeIcon,
  "google-ads-management": TargetIcon
};

export const metadata = createPageMetadata(
  "Small Business Marketing Services Kansas City",
  "Conversion-focused websites, SEO, and Google and Meta ads for Kansas City small businesses—with real lead and conversion tracking.",
  "/services"
);

export default function ServicesPage() {
  const description =
    "Websites, SEO, and Google and Meta ads for small businesses, connected by conversion tracking and clear reporting.";

  return (
    <PageTransition>
      <StructuredData
        data={[
          webPageSchema({ name: "Small Business Marketing Services", description, path: "/services" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" }
          ])
        ]}
      />

      <section className="border-b-2 border-foreground/90 bg-background">
        <PageHero
          badge="Small Business Marketing"
          title="Three services. One measurable growth system."
          subtitle="Build a website that converts, earn qualified visibility through SEO, and use Google and Meta ads to create demand—then track which work produces real leads."
          artwork="/images/brand-art/connected-growth-v2.png"
          artworkAlt="Three growth paths rising together above the Kansas City skyline"
          artworkLayout="background"
        />
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? GlobeIcon;
            return (
              <Reveal key={service.slug} delay={index * 0.06}>
                <article className="light-panel flex h-full flex-col p-7 md:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground">{service.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                  <ul className="mt-7 space-y-3">
                    {service.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-foreground transition hover:text-accent"
                  >
                    Explore {service.title}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="dark-panel p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">How It Connects</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
                Traffic only matters when the experience can convert it.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Website", "Turn attention into trust and action."],
                ["SEO", "Earn visibility from qualified searches."],
                ["Paid Ads", "Create demand and measure the response."]
              ].map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] p-5">
                  <p className="font-bold text-primary-foreground">{title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/68">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title="Not sure which channel is holding growth back?"
        accentText="holding growth back?"
        body="Start with a free marketing audit. We’ll look at the available data, identify the biggest opportunity, and explain what should come first."
        links={[{ href: "/work", label: "See Our Work" }]}
      />
    </PageTransition>
  );
}
