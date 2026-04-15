import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/site-icons";
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
    service.description,
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
    <PageTransition>
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Service"
            title={service.title}
            subtitle={service.description}
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What&apos;s Included</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Scope built around real business needs.
            </h2>
            <div className="mt-8 grid gap-4">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-secondary px-5 py-4 text-base leading-relaxed text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <aside className="dark-panel p-7 md:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Pricing</p>
            <p className="mt-4 text-4xl font-bold tracking-tight text-primary-foreground">{service.price}</p>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/72">{service.shortDescription}</p>

            <div className="mt-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/55">Best For</p>
              <div className="mt-4 grid gap-3">
                {service.idealFor.map((item) => (
                  <p key={item} className="text-base leading-relaxed text-primary-foreground/84">
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

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">What We Handle</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="dark-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Process</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
            A straightforward process from first message to delivery.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => (
              <article key={step} className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
                <p className="mt-3 text-base leading-relaxed text-primary-foreground">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Next Step</p>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              If this service looks like the right fit, send a message and we&apos;ll map out the best next move for your business.
            </p>
          </div>
          <Button href="/contact#form">Start the Conversation</Button>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
