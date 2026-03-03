import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Website Design and Marketing Services | Hometown Marketing Agency Kansas City",
  "Service offerings from Hometown Marketing Agency including website design, GBP setup, logo kits, and social media management.",
  "/services"
);

export default function ServicesPage() {
  const featuredService = services.find((service) => service.slug === "website-design");
  const supportingServices = services.filter((service) => service.slug !== "website-design");

  return (
    <>
      <SectionShell className="pb-8 pt-16 md:pt-24">
        <PageHero
          eyebrow="Services"
          title={
            <>
              Website-first services for Kansas City{" "}
              <span className="serif italic font-normal">businesses</span>
            </>
          }
          subtitle="Clean execution across web and supporting marketing services."
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-primary px-7 py-7 md:px-10 md:py-10">
          <div className="service-row">
            <div>
              <p className="kicker">Featured</p>
              <h2 className="mt-3 editorial-headline">{featuredService?.title}</h2>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-[#7da2ff]">$800</p>
              <p className="mt-1 text-sm text-white/65 line-through">$1,000</p>
            </div>
          </div>
          {supportingServices.map((service) => (
            <div key={service.slug} className="service-row">
              <h3 className="text-[clamp(1.2rem,2.5vw,1.85rem)] font-medium text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-8">
        <div className="surface-secondary flex flex-col items-start justify-between gap-6 px-7 py-7 md:flex-row md:items-center md:px-10">
          <div>
            <p className="kicker">Next Step</p>
            <h3 className="mt-3 text-3xl font-medium text-white md:text-4xl">
              Ready to start your project?
            </h3>
          </div>
          <Button href="/contact#form">Get Started</Button>
        </div>
      </SectionShell>
    </>
  );
}
