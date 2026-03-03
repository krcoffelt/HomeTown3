import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { services } from "@/data/services";

export function ServicesPreview() {
  const featuredService = services.find((service) => service.isFeatured);
  const supportingServices = services.filter((service) => !service.isFeatured);

  if (!featuredService) return null;

  return (
    <SectionShell className="bg-base text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-[#9bb6ff]">Services</p>
            <h2 className="mt-4 text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.92] tracking-tight text-white">
              Website-first services,
              <span className="block text-white/75">with marketing support built in.</span>
            </h2>
          </div>
          <Link href="/services" className="section-eyebrow text-white/65 transition hover:text-white">
            View all services
          </Link>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.012)_35%,rgba(7,11,20,0.92)_100%)]">
          <div className="grid lg:grid-cols-12">
            <article className="border-b border-white/12 px-8 py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:border-white/12 lg:px-10 lg:py-12">
              <p className="section-eyebrow text-[#9bb6ff]">Primary Focus</p>
              <h3 className="mt-4 text-[clamp(2.1rem,4.7vw,4.6rem)] font-medium leading-[0.95] tracking-tight text-white">
                {featuredService.title}
              </h3>
              <p className="mt-6 max-w-[38ch] text-[1.28rem] leading-relaxed text-white/78">
                {featuredService.fullDescription}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#form"
                  className="inline-flex items-center justify-center rounded-md bg-[#305CDE] px-6 py-3 text-sm font-medium uppercase tracking-[0.08em] text-white transition hover:bg-[#3d67e4]"
                >
                  Start Website Project
                </Link>
                <p className="section-eyebrow text-white/68">{featuredService.price}</p>
              </div>
            </article>

            <aside className="lg:col-span-5">
              <div className="border-b border-white/12 px-8 py-7 lg:px-9">
                <p className="section-eyebrow text-[#9bb6ff]">Marketing Add-ons</p>
                <p className="mt-3 text-lg leading-relaxed text-white/72">
                  Keep your website as the center, then layer in focused growth services.
                </p>
              </div>
              <div className="divide-y divide-white/12">
                {supportingServices.map((service) => (
                  <article key={service.slug} className="px-8 py-7 lg:px-9">
                    <p className="section-eyebrow text-white/55">{service.price}</p>
                    <h4 className="mt-2 text-[2rem] font-medium leading-[1.02] tracking-tight text-white">
                      {service.title}
                    </h4>
                    <p className="mt-3 max-w-[34ch] text-base leading-relaxed text-white/68">
                      {service.shortDescription}
                    </p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    </SectionShell>
  );
}
