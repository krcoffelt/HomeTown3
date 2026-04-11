import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata("Service Not Found", "The requested service page could not be found.", "/services");
  }

  return createPageMetadata(
    `${service.title} | Kansas City Marketing Agency`,
    service.fullDescription,
    `/services/${service.slug}`
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SectionShell className="pb-8 pt-16 md:pt-24">
        <PageHero
          eyebrow="Service"
          title={service.heroTitle ?? service.title}
          subtitle={service.heroSubtitle ?? service.fullDescription}
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="surface-primary px-7 py-7 md:px-10 md:py-10">
            <p className="kicker">What&apos;s Included</p>
            <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[0.98] tracking-tight text-white">
              Scope built around real business needs.
            </h2>
            <div className="mt-7 grid gap-3">
              {(service.deliverables ?? []).map((item) => (
                <div
                  key={item}
                  className="rounded-[1.15rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-base leading-relaxed text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <aside className="surface-secondary px-7 py-7 md:px-8 md:py-9">
            <p className="kicker">Pricing</p>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-white">{service.price ?? "Custom quote"}</p>
            <p className="mt-4 text-base leading-relaxed text-white/74">{service.fullDescription}</p>

            <div className="mt-7 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="section-eyebrow text-white/58">Best For</p>
              <div className="mt-3 grid gap-3">
                {(service.idealFor ?? []).map((item) => (
                  <p key={item} className="text-base leading-relaxed text-white/84">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <Button href="/contact#form" className="mt-6 w-full">
              Ask About {service.title}
            </Button>
          </aside>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="surface-secondary px-7 py-7 md:px-10 md:py-10">
          <p className="kicker">Process</p>
          <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[0.98] tracking-tight text-white">
            A straightforward process from first message to delivery.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {(service.process ?? []).map((step, index) => (
              <article key={step} className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] px-5 py-5">
                <p className="section-eyebrow text-[#9bb6ff]">Step {index + 1}</p>
                <p className="mt-3 text-base leading-relaxed text-white">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-6">
        <div className="surface-plain flex flex-col items-start justify-between gap-5 px-7 py-7 md:flex-row md:items-center md:px-10">
          <div>
            <p className="kicker">Next Step</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-white/84">
              If this service looks like the right fit, send a message and we&apos;ll map out the best next move for your business.
            </p>
          </div>
          <Button href="/contact#form">Start the Conversation</Button>
        </div>
      </SectionShell>
    </>
  );
}
