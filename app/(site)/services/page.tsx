import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Marketing Agency Services | Websites, Branding, Social and Local Visibility",
  "Marketing agency services from Hometown including website design, Google Business Profile setup, branding, graphic design, and social media support.",
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
              Marketing support built around{" "}
              <span className="serif italic font-normal">web, brand, and local visibility</span>
            </>
          }
          subtitle="A focused service stack for businesses that need a stronger presence, cleaner messaging, and better creative execution."
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="surface-primary px-7 py-7 md:px-10 md:py-10">
            <p className="kicker">Featured Service</p>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-5">
              <div>
                <h2 className="text-[clamp(2rem,4vw,3.35rem)] font-semibold leading-[0.98] tracking-tight text-white">
                  {featuredService?.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/78">
                  {featuredService?.fullDescription}
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold text-[#9bb6ff]">{featuredService?.price}</p>
                <p className="mt-1 text-sm text-white/65 line-through">$1,000</p>
              </div>
            </div>
            <div className="mt-7 grid gap-3">
              {(featuredService?.deliverables ?? []).map((item) => (
                <div
                  key={item}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-base leading-relaxed text-white"
                >
                  {item}
                </div>
              ))}
            </div>
            <Button href={`/services/${featuredService?.slug}`} className="mt-7">
              View Website Design Details
            </Button>
          </section>

          <aside className="surface-secondary px-7 py-7 md:px-8 md:py-9">
            <p className="kicker">Agency Stack</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold leading-[1] tracking-tight text-white">
              More than a website shop.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/74">
              Websites lead the offer, but the agency is built to support the brand and marketing pieces around them.
            </p>
            <div className="mt-7 grid gap-3">
              {supportingServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-5 transition hover:border-white/18 hover:bg-white/[0.06]"
                >
                  <p className="text-xl font-medium text-white">{service.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/72">{service.shortDescription}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#9bb6ff]">
                    {service.price ?? "Custom quote"}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-6">
        <div className="surface-plain flex flex-col items-start justify-between gap-5 px-7 py-7 md:flex-row md:items-center md:px-10">
          <div>
            <p className="kicker">Next Step</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/84">
              If you&apos;re not sure which service is the right starting point, send a message and we&apos;ll point you in the right direction.
            </p>
          </div>
          <Button href="/contact#form">Talk With Hometown</Button>
        </div>
      </SectionShell>
    </>
  );
}
