import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHero } from "@/components/layout/page-hero";
import { PageTransition } from "@/components/ui/page-transition";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/site-icons";
import { locations } from "@/data/locations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Kansas City Area Location Pages",
  "Website design, SEO, and paid ads support for businesses across the Kansas City metro.",
  "/locations"
);

export default function LocationsHubPage() {
  const schema = [
    webPageSchema({
      name: "Locations",
      description: "Service area pages for Kansas City metro businesses.",
      path: "/locations"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />

      <section className="paper-texture border-b-2 border-foreground/90 bg-background pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="site-container">
          <PageHero
            badge="Service Areas"
            title="Website design and local marketing pages built for the Kansas City metro."
            subtitle="Explore city-specific pages for businesses across Kansas City, Johnson County, Jackson County, and nearby service areas."
            centered={false}
            artwork="/images/brand-art/search-discovery.png"
            artworkAlt="Illustrated local search map, route, storefront, and compass"
          />
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  {location.city}, {location.state}
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{location.heroTitle}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{location.localAngle}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                  View city page
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href="#form" className="px-8">
              Get a Free Marketing Audit
            </Button>
          </div>
        </div>
      </section>

      <ContactCta
        title="Want local customers to find and choose you?"
        accentText="find and choose you?"
        body="Start with a free marketing audit. We’ll review your local visibility, website conversion path, and tracking to find the clearest opportunity."
        links={[{ href: "/services", label: "Explore Services" }]}
      />
    </PageTransition>
  );
}
