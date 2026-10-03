import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageIntro } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
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
  const ctaLinks = [{ href: "/services", label: "View All Services" }];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <PageIntro
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]}
        badge={service.heroBadge ?? "Service"}
        title={service.heroTitle ?? service.title}
        subtitle={service.description}
        actions={
          <>
            <Button href="#form" variant="primary">
              Get a free marketing audit
            </Button>
            <Button href="/work" variant="outline-light" arrow={false}>
              See our work
            </Button>
          </>
        }
      >
        {proofProjects?.length ? (
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-primary-foreground/10 sm:grid-cols-3">
            {proofProjects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/case-studies/${project.slug}`}
                className="group flex items-center gap-4 bg-ink p-4 transition-colors hover:bg-ink-soft"
              >
                <span className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md">
                  <Image src={project.featuredImageUrl} alt="" fill sizes="80px" className="object-cover object-top" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{project.clientName}</span>
                  <span className="mono-label block truncate text-primary-foreground/45">{project.city ?? "Kansas City metro"}</span>
                </span>
                <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-primary-foreground/50 transition-transform duration-500 group-hover:rotate-45 group-hover:text-primary-foreground" />
              </Link>
            ))}
          </div>
        ) : null}
      </PageIntro>

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <p className="eyebrow">What&apos;s included</p>
            <h2 className="section-title mt-6">
              Scope built around <span className="serif-accent">real</span> business needs.
            </h2>
            <div className="mt-10 rounded-[1.25rem] bg-ink p-7 text-primary-foreground md:p-8">
              <p className="mono-label text-primary-foreground/50">Best for</p>
              <ul className="mt-5 grid gap-4">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-primary-foreground/85">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-primary-foreground/10 pt-6 text-sm leading-relaxed text-primary-foreground/60">
                {service.shortDescription}
              </p>
            </div>
          </div>
          <ol className="border-t border-foreground/12 lg:col-span-7">
            {service.deliverables.map((item, index) => (
              <Reveal as="li" key={item} delay={index * 0.05} className="border-b border-foreground/12 py-7 md:py-9">
                <span className="text-xl font-medium leading-snug tracking-[-0.025em] md:text-[1.65rem]">{item}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </SectionShell>

      <section aria-labelledby="handle-heading" className="bg-secondary py-24 md:py-32">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">What we handle</p>
            <h2 id="handle-heading" className="section-title md:col-span-8">
              Strategy, build, and measurement — <span className="serif-accent">in one place.</span>
            </h2>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-foreground/10 sm:grid-cols-2 lg:grid-cols-3 md:mt-20">
            {service.features.map((feature) => (
              <li key={feature} className="flex min-h-[10rem] flex-col justify-end bg-card p-6 md:p-8">
                <span className="text-lg font-medium leading-snug tracking-[-0.02em]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.detailSections?.length ? (
        <SectionShell>
          <div className="grid gap-20 md:gap-28">
            {service.detailSections.map((section) => (
              <article key={section.title} className="grid gap-8 md:grid-cols-12">
                <p className="eyebrow md:col-span-4">{section.eyebrow}</p>
                <div className="md:col-span-8">
                  <h2 data-reveal="up" className="section-title">{section.title}</h2>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{section.body}</p>
                  {section.items?.length ? (
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <li key={item} className="rounded-full border border-foreground/15 px-4 py-2 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>
      ) : null}

      {proofProjects?.length ? (
        <SectionShell className="pt-0">
          <div className="flex flex-col justify-between gap-6 border-t border-foreground/12 pt-10 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-6 max-w-2xl">Work from Kansas City small-business projects.</h2>
            </div>
            <Button href="/work" variant="secondary">
              All projects
            </Button>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {proofProjects.map((project) => (
              <Link key={project.slug} href={`/case-studies/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-secondary">
                  <Image
                    src={project.featuredImageUrl}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 31vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.035em]">{project.clientName}</h3>
                    <p className="mono-label mt-2 text-muted-foreground">
                      {project.category} · {project.city ?? "Kansas City metro"}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/15 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.summary}</p>
                {project.problem && project.result ? (
                  <dl className="mt-5 grid gap-3 border-t border-foreground/10 pt-5 text-sm leading-relaxed text-muted-foreground">
                    <div>
                      <dt className="inline font-medium text-foreground">Problem: </dt>
                      <dd className="inline">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="inline font-medium text-foreground">Result: </dt>
                      <dd className="inline">{project.result}</dd>
                    </div>
                  </dl>
                ) : null}
              </Link>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <section aria-labelledby="service-process-heading" className="grain bg-ink py-24 text-primary-foreground md:py-32">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">Process</p>
            <h2 id="service-process-heading" className="section-title md:col-span-8">
              A straightforward path from audit to <span className="serif-accent">measurable improvement.</span>
            </h2>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-primary-foreground/10 md:mt-20 md:grid-cols-3">
            {service.process.map((step) => (
              <li key={step} className="flex min-h-[16rem] flex-col bg-ink p-7 md:p-9">
                <p className="mt-auto pt-10 text-lg leading-relaxed text-primary-foreground/85">{step}</p>
              </li>
            ))}
          </ol>

          {service.slug === "website-design" ? (
            <div className="mt-24 grid gap-10 border-t border-primary-foreground/10 pt-14 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="eyebrow">By service area</p>
                <p className="mt-6 max-w-sm leading-relaxed text-primary-foreground/60">
                  Website design for Kansas City and nearby business owners. These local pages connect our website, SEO, and paid-ad
                  work to the communities where small businesses are growing.
                </p>
              </div>
              <ul className="grid gap-x-8 sm:grid-cols-2 md:col-span-8">
                <li>
                  <Link
                    href="/locations"
                    className="group flex items-center justify-between border-b border-primary-foreground/10 py-4 text-lg transition-colors hover:text-[hsl(229_100%_75%)]"
                  >
                    All service areas
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                  </Link>
                </li>
                {locations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="group flex items-center justify-between border-b border-primary-foreground/10 py-4 text-lg transition-colors hover:text-[hsl(229_100%_75%)]"
                    >
                      {location.city}, {location.state}
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {service.faqItems?.length ? (
        <SectionShell>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow">FAQs</p>
              <h2 className="section-title mt-6">Questions owners ask before starting.</h2>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={service.faqItems} />
            </div>
          </div>
        </SectionShell>
      ) : null}

      <section aria-label="Related pages" className="border-t border-foreground/10 bg-background py-14">
        <div className="site-container flex flex-col gap-6 md:flex-row md:items-center">
          <p className="mono-label shrink-0 text-muted-foreground md:w-1/3">Related pages</p>
          <div className="flex flex-wrap gap-2">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
              >
                {link.label}
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={`Ready to audit your ${service.title.toLowerCase()} opportunity?`}
        accentText={`${service.title.toLowerCase()} opportunity?`}
        body="Send a few details about the business, what you are doing now, and which results are unclear. We’ll identify the strongest next move and the data needed to measure it."
        links={ctaLinks}
      />
    </PageTransition>
  );
}
