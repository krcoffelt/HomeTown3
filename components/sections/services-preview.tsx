import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { services } from "@/data/services";

export function ServicesPreview() {
  const featuredService = services.find((service) => service.isFeatured);
  const secondaryServices = services.filter((service) => !service.isFeatured);

  if (!featuredService) {
    return null;
  }

  return (
    <SectionShell className="bg-base text-ink">
      <div className="mb-10 flex items-end justify-between gap-5">
        <div>
          <p className="section-eyebrow text-muted">Services</p>
          <h2 className="display-lg mt-4 font-semibold">What We Build</h2>
        </div>
        <Link href="/services" className="section-eyebrow text-white/70 hover:text-white">
          View all
        </Link>
      </div>
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-8">
        <article className="relative overflow-hidden rounded-lg border border-white/15 bg-canvas p-8 text-[#0f1219] shadow-soft lg:col-span-7 lg:p-10">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#305CDE]/80 via-black/20 to-transparent" />
          <p className="section-eyebrow text-black/55">{featuredService.price}</p>
          <h3 className="mt-5 text-[clamp(2.2rem,4.8vw,4.5rem)] font-medium leading-[0.95] tracking-tight">
            {featuredService.title}
          </h3>
          <p className="mt-6 max-w-[42ch] text-xl leading-relaxed text-black/70">
            {featuredService.fullDescription}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center rounded-md bg-[#305CDE] px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#3d67e4]"
            >
              Get Started
            </Link>
            <span className="section-eyebrow text-black/55">Now Only $800</span>
          </div>
        </article>
        <div className="rounded-lg border border-line bg-surface lg:col-span-5">
          {secondaryServices.map((service, index) => (
            <article
              key={service.slug}
              className="group relative border-b border-line px-5 py-6 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03] md:px-7"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#305CDE]/70 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-eyebrow text-muted">{service.price}</p>
                  <h4 className="mt-3 text-3xl font-medium leading-[1.02] tracking-tight text-ink">
                    {service.title}
                  </h4>
                  <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                </div>
                <span className="text-[2.2rem] font-semibold leading-none tracking-tight text-white/20">
                  {String(index + 2).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
