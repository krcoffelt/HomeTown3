import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { services } from "@/data/services";

export function ServicesPreview() {
  const featuredService = services.find((service) => service.slug === "website-design");
  const supportingServices = services.filter((service) => service.slug !== "website-design");

  return (
    <SectionShell className="bg-base text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="kicker">Services</p>
            <h2 className="mt-4 editorial-display max-w-4xl">
              Website-first services with focused marketing support.
            </h2>
          </div>
          <Link href="/services" className="section-eyebrow text-white/75 transition hover:text-white">
            View all services
          </Link>
        </div>
        <section className="surface-primary px-7 py-7 md:px-10 md:py-10">
          <div className="service-row">
            <div>
              <p className="kicker">Primary Service</p>
              <h3 className="mt-3 editorial-headline">{featuredService?.title}</h3>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-[#7da2ff]">$800</p>
              <p className="mt-1 text-sm text-white/65 line-through">$1,000</p>
            </div>
          </div>
          {supportingServices.map((service) => (
            <div key={service.slug} className="service-row">
              <h4 className="text-[clamp(1.2rem,2.4vw,1.8rem)] font-medium text-white">
                {service.title}
              </h4>
            </div>
          ))}
        </section>
      </div>
    </SectionShell>
  );
}
