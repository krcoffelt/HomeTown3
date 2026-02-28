import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Website Design and Marketing Services | Hometown Marketing Agency Kansas City",
  "Service offerings from Hometown Marketing Agency including website design, GBP setup, logo kits, and social media management.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-16 md:pt-24">
        <PageHero
          eyebrow="Services"
          title={
            <>
              Website and branding services for Kansas City{" "}
              <span className="serif italic font-normal">small businesses</span>
            </>
          }
          subtitle="Each service is structured to improve visibility, trust, and local lead generation."
        />
      </SectionShell>
      <SectionShell className="pt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const isFeatured = service.isFeatured;
            return (
              <Card
                key={service.slug}
                className={isFeatured ? "relative overflow-hidden md:col-span-2 bg-canvas text-[#0f1219]" : "relative overflow-hidden"}
              >
                <span
                  className={
                    isFeatured
                      ? "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#305CDE]/75 via-black/25 to-transparent"
                      : "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#305CDE]/55 via-white/20 to-transparent"
                  }
                />
                <p
                  className={
                    isFeatured
                      ? "text-sm uppercase tracking-[0.12em] text-black/55"
                      : "text-sm uppercase tracking-[0.12em] text-muted"
                  }
                >
                  {service.price}
                </p>
                <h2 className={isFeatured ? "mt-2 text-3xl font-medium text-black" : "mt-2 text-3xl font-medium text-ink"}>
                  {service.title}
                </h2>
                <p className={isFeatured ? "mt-4 text-lg leading-relaxed text-black/70" : "mt-4 text-lg leading-relaxed text-muted"}>
                  {service.fullDescription}
                </p>
                <ul className={isFeatured ? "mt-6 space-y-2 text-base text-black/85" : "mt-6 space-y-2 text-base text-text"}>
                  <li>What it is: {service.shortDescription}</li>
                  <li>Who it is for: Kansas City service businesses</li>
                  <li>Result: stronger local trust and more inquiries</li>
                </ul>
              </Card>
            );
          })}
        </div>
      </SectionShell>
      <SectionShell className="pt-8">
        <Card className="flex flex-col items-start justify-between gap-6 bg-surface md:flex-row md:items-center">
          <div>
            <h3 className="text-3xl font-medium text-ink">Ready to get started?</h3>
            <p className="mt-3 max-w-xl text-text">
              Tell us what you need and we will send a clear next-step plan.
            </p>
          </div>
          <Button href="/contact#form">
            Get Started
          </Button>
        </Card>
      </SectionShell>
    </>
  );
}
