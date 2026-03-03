import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";

const servicesList = [
  "Website Design",
  "Google Business Profile Setup",
  "Social Media",
  "Graphic Design",
  "Logo and Brand Work"
];

export function ServicesPreview() {
  return (
    <SectionShell className="bg-base text-ink">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="section-eyebrow text-[#9bb6ff]">Services</p>
            <h2 className="mt-4 text-[clamp(2.2rem,5vw,4.8rem)] font-semibold leading-[0.94] tracking-tight text-white">
              What we do
            </h2>
          </div>
          <Link href="/services" className="section-eyebrow text-white/65 transition hover:text-white">
            View all services
          </Link>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(150deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015)_35%,rgba(8,12,22,0.93)_100%)]">
          <div className="border-b border-white/12 px-7 py-6 md:px-9">
            <p className="section-eyebrow text-[#9bb6ff]">Featured</p>
            <div className="mt-3 flex flex-wrap items-center gap-4">
              <h3 className="text-[clamp(1.9rem,4vw,3.2rem)] font-medium tracking-tight text-white">
                Website Design
              </h3>
              <p className="text-lg font-semibold text-[#82a7ff]">
                $800 <span className="ml-2 text-base font-medium text-white/55 line-through">$1,000</span>
              </p>
            </div>
          </div>
          <ul className="divide-y divide-white/12 px-7 md:px-9">
            {servicesList.slice(1).map((service) => (
              <li key={service} className="py-5 text-[clamp(1.25rem,2.8vw,2rem)] font-medium tracking-tight text-white/92">
                {service}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SectionShell>
  );
}
