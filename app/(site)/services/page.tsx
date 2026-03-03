import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Website Design and Marketing Services | Hometown Marketing Agency Kansas City",
  "Service offerings from Hometown Marketing Agency including website design, GBP setup, logo kits, and social media management.",
  "/services"
);

export default function ServicesPage() {
  const services = [
    "Website Design",
    "Google Business Profile Setup",
    "Social Media",
    "Graphic Design",
    "Logo and Brand Work"
  ];

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
        <section className="overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015)_35%,rgba(8,12,22,0.93)_100%)]">
          <div className="border-b border-white/12 px-7 py-6 md:px-9">
            <p className="section-eyebrow text-[#9bb6ff]">Featured</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-medium tracking-tight text-white">
                Website Design
              </h2>
              <p className="text-lg font-semibold text-[#82a7ff]">
                $800 <span className="ml-2 text-base font-medium text-white/55 line-through">$1,000</span>
              </p>
            </div>
          </div>
          <ul className="divide-y divide-white/12 px-7 md:px-9">
            {services.slice(1).map((service) => (
              <li key={service} className="py-5 text-[clamp(1.3rem,2.7vw,2rem)] font-medium tracking-tight text-white/92">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </SectionShell>
      <SectionShell className="pt-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-line bg-surface p-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-3xl font-medium text-ink">Ready to get started?</h3>
            <p className="mt-3 max-w-xl text-text">
              Tell us what you need and we will send a clear next-step plan.
            </p>
          </div>
          <Button href="/contact#form">
            Get Started
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
