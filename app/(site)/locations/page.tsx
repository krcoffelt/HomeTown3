import Link from "next/link";
import { PageTransition } from "@/components/ui/page-transition";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, MapPinIcon } from "@/components/ui/site-icons";
import { locations } from "@/data/locations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Kansas City Area Location Pages",
  "Marketing support for businesses across Overland Park, Olathe, Leawood, Lenexa, and Shawnee.",
  "/locations"
);

export default function LocationsHubPage() {
  const schema = [
    webPageSchema({
      name: "Locations",
      description: "Service area pages for Kansas-side Kansas City metro businesses.",
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

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-badge">Service Areas</span>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.04] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Local marketing pages built for the Kansas side of the KC metro.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">
              Explore city-specific pages for businesses in Overland Park, Olathe, Leawood, Lenexa, and Shawnee.
            </p>
          </div>
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
            <Button href="/contact#form" className="px-8">
              Talk About Your Business
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
