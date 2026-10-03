import Link from "next/link";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/layout/page-hero";
import { Accordion } from "@/components/ui/accordion";
import { PageTransition } from "@/components/ui/page-transition";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { locations } from "@/data/locations";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const locationFaqItems = [
  {
    question: "Do you provide website design across Johnson County?",
    answer:
      "Yes. Hometown serves Overland Park, Olathe, Leawood, Lenexa, Shawnee, Prairie Village, and nearby Johnson County businesses. The city pages explain the local fit and connect visitors to the primary website-design service."
  },
  {
    question: "Should every Johnson County city have a separate website-design page?",
    answer:
      "No. A separate page should exist only when it can answer distinct local intent with useful city context and relevant proof. Nearby areas can be covered naturally from the closest strong page instead of creating thin duplicates."
  }
];

export const metadata = createPageMetadata(
  "Web Design Service Areas Across Kansas City",
  "Website design, SEO, and paid ads support for businesses across the Kansas City metro.",
  "/locations"
);

export default function LocationsHubPage() {
  const schema = [
    webPageSchema({
      name: "Web Design Service Areas Across Kansas City",
      description: "Service area pages for Kansas City metro businesses.",
      path: "/locations"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" }
    ]),
    faqItemsSchema(locationFaqItems)
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />

      <PageIntro
        badge={`Service areas — ${locations.length} cities`}
        title="Website design and local marketing pages built for the Kansas City metro."
        subtitle="Explore city-specific pages for businesses across Kansas City, Johnson County, Jackson County, and nearby service areas."
      />

      <section aria-label="Cities" className="bg-background py-20 md:py-28">
        <div className="site-container">
          <ul className="border-b border-foreground/12">
            {locations.map((location) => (
              <li key={location.slug} className="border-t border-foreground/12">
                <Link href={`/locations/${location.slug}`} className="group grid gap-3 py-7 md:grid-cols-12 md:items-center md:gap-6 md:py-9">
                  <span className="text-[clamp(2rem,4.4vw,4rem)] font-semibold leading-none tracking-[-0.05em] transition-transform duration-700 ease-out-expo md:col-span-5 md:group-hover:translate-x-3">
                    {location.city}
                    <span className="serif-accent ml-3 text-[0.6em] text-muted-foreground">{location.state}</span>
                  </span>
                  <span className="md:col-span-6">
                    <span className="block font-medium">{location.heroTitle}</span>
                    <span className="mt-1 block leading-relaxed text-muted-foreground">{location.localAngle}</span>
                  </span>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-foreground/15 transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <section aria-labelledby="jocos-heading" className="mt-24 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Johnson County website design</p>
              <h2 id="jocos-heading" className="section-title mt-6">
                Support across Johnson County <span className="serif-accent">without thin city pages.</span>
              </h2>
              <div className="mt-8">
                <Button href="#form" variant="dark">
                  Get a free marketing audit
                </Button>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Accordion items={locationFaqItems} />
            </div>
          </section>
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
