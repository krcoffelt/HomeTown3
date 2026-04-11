import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { services } from "@/data/services";

const serviceMeta: Record<string, string[]> = {
  "website-design": ["Conversion Layouts", "Mobile Build", "Lead Capture"],
  "google-business-profile-setup": ["Profile Setup", "Category Tuning", "Local Visibility"],
  "social-media-management": ["Monthly Planning", "Post Design", "Content Direction"],
  "graphic-design": ["Campaign Graphics", "Social Assets", "Print Collateral"],
  "logo-and-brand-work": ["Logo System", "Color Direction", "Brand Kit"]
};

export function ServicesPreview() {
  const featuredService = services.find((service) => service.slug === "website-design");
  const allRows = services;

  return (
    <SectionShell className="text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
          <h2 className="editorial-display max-w-4xl">What We Do</h2>
          <Link href="/services" className="section-eyebrow text-white/75 transition hover:text-white">
            Explore service pages
          </Link>
        </div>

        <section className="rounded-[1.6rem] border border-[#dfe4ef] bg-white px-7 py-7 text-[#10172b] shadow-[0_18px_45px_rgba(7,13,26,0.16)] md:px-10 md:py-10">
          <div className="service-row border-b-[#d9deea]">
            <div>
              <Link href={`/services/${featuredService?.slug}`} className="block">
                <h3 className="editorial-headline !text-[#305cde]">{featuredService?.title}</h3>
              </Link>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#33415f]">
                {featuredService?.fullDescription}
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold text-[#305cde]">$800</p>
              <p className="mt-1 text-sm text-[#44506b] line-through">$1,000</p>
            </div>
          </div>

          {allRows
            .filter((service) => service.slug !== "website-design")
            .map((service) => {
              return (
                <div
                  key={service.slug}
                  className="service-row group border-b-[#d9deea]"
                >
                  <div>
                    <Link href={`/services/${service.slug}`} className="text-[clamp(1.2rem,2.4vw,1.8rem)] font-medium text-[#10172b]">
                      {service.title}
                    </Link>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#44506b]">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="hidden items-center gap-2 md:flex">
                    {(serviceMeta[service.slug] ?? []).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#d3daea] bg-[#f4f6fb] px-3 py-1 text-xs uppercase tracking-[0.09em] text-[#5c6684] transition group-hover:border-[#305cde] group-hover:bg-[#305cde] group-hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </SectionShell>
  );
}
