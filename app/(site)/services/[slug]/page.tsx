import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { locations } from "@/data/locations";
import { getProjectBySlug } from "@/data/projects";
import { getServiceBySlug, services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getServiceShareImage } from "@/lib/seo/routes";
import { breadcrumbSchema, faqItemsSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";

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
    service.seoTitle ?? `${service.title} | Kansas City Marketing Agency`,
    service.seoDescription ?? service.description,
    `/services/${service.slug}`,
    undefined,
    { image: getServiceShareImage(service.slug) }
  );
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const schema: Array<Record<string, unknown>> = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path: `/services/${service.slug}` }
    ]),
    webPageSchema({
      name: service.title,
      description: service.seoDescription ?? service.description,
      path: `/services/${service.slug}`
    }),
    serviceSchema(service)
  ];

  if (service.faqItems?.length) {
    schema.push(faqItemsSchema(service.faqItems));
  }

  const proofProjects = service.proofProjectSlugs
    ?.map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const relatedLinks = service.relatedLinks ?? [
    { label: "Search engine optimization", href: "/services/search-engine-optimization" },
    { label: "Google Ads management", href: "/services/google-ads-management" },
    { label: "View our work", href: "/work" }
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-primary-foreground/62">
            <Link href="/" className="transition hover:text-primary-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-primary-foreground">
              Services
            </Link>
            <span>/</span>
            <span className="text-primary-foreground">{service.title}</span>
          </nav>
          <PageHero
            badge={service.heroBadge ?? "Service"}
            title={service.heroTitle ?? service.title}
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

      {service.detailSections?.length ? (
        <SectionShell className="pt-0">
          <div className="grid gap-6 lg:grid-cols-2">
            {service.detailSections.map((section) => (
              <article key={section.title} className="light-panel p-7 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{section.eyebrow}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">{section.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{section.body}</p>
                {section.items?.length ? (
                  <div className="mt-7 grid gap-3">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </SectionShell>
      ) : null}

      {proofProjects?.length ? (
        <SectionShell className="pt-0">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Selected Work</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
              Website proof from Kansas City small-business projects.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {proofProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <Image
                    src={project.featuredImageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 31vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{project.clientName}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  {project.problem && project.result ? (
                    <div className="mt-5 space-y-3 border-t border-border pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        {project.city ?? "Kansas City metro"}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <span className="font-bold text-foreground">Problem:</span> {project.problem}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        <span className="font-bold text-foreground">Result:</span> {project.result}
                      </p>
                    </div>
                  ) : null}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                    Read case study
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SectionShell>
      ) : null}

      {service.slug === "website-design" ? (
        <SectionShell className="pt-0">
          <div className="dark-panel p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Website Design by Service Area</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
                  Website design for Kansas City and nearby business owners.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-primary-foreground/72">
                  These local pages help connect the main website-design offer to the suburbs where small businesses are already searching.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href="/locations"
                  className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent/70"
                >
                  <p className="text-sm font-bold text-primary-foreground">All service areas</p>
                  <p className="mt-2 text-xs leading-relaxed text-primary-foreground/62">
                    Website design and marketing pages for the Kansas City metro.
                  </p>
                </Link>
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent/70"
                  >
                    <p className="text-sm font-bold text-primary-foreground">{location.city}, {location.state}</p>
                    <p className="mt-2 text-xs leading-relaxed text-primary-foreground/62">
                      Website design and local marketing for {location.city} businesses.
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

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

      {service.faqItems?.length ? (
        <SectionShell className="pt-0">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">FAQs</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                Questions business owners ask before starting.
              </h2>
            </div>
            <div className="rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
              {service.faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className={`group border-b border-border ${index === service.faqItems!.length - 1 ? "border-b-0" : ""}`}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left text-base font-bold text-card-foreground md:pl-4 md:text-lg">
                    {item.question}
                    <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                  </summary>
                  <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Related Pages</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {link.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
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
          <div className="flex flex-wrap gap-3">
            <Button href="/contact#form">Start the Conversation</Button>
            {service.slug === "website-design" ? (
              <Button href="/website-offer-800#claim-form" variant="secondary">
                See the $800 Website Offer
              </Button>
            ) : null}
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
