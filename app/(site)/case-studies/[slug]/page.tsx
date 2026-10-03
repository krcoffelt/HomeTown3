import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { TrackedAnchor } from "@/components/analytics/tracked-anchor";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { analyticsEvents } from "@/lib/analytics/events";
import { getProjectBySlug, projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, creativeWorkSchema, webPageSchema } from "@/lib/seo/schema";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const caseStudyProjects = projects.filter((project) => project.problem && project.solution && project.result);

const relatedPageLinks: Record<string, Array<{ label: string; href: string; description: string }>> = {
  "noble-hardwoods": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites built around trust, local relevance, and lead flow." },
    { label: "Contractor Website Design", href: "/industries/construction-website-design-kansas-city", description: "Website strategy for contractors and construction companies that need project proof and estimate requests." },
    { label: "Home-Service Website Design", href: "/industries/home-services-website-design-kansas-city", description: "Lead-focused website design for flooring companies and local service teams." },
    { label: "Website Design Kansas City", href: "/locations/kansas-city-mo", description: "Local website design, SEO, and conversion strategy for Kansas City businesses." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "dragonfly-catering": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites built around trust, story, and conversion paths." },
    { label: "Restaurant & Hospitality Website Design", href: "/industries/restaurant-website-design-kansas-city", description: "Website strategy for restaurants, caterers, menus, reservations, and event inquiries." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "plate-kc": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites for Kansas City small businesses." },
    { label: "Website design Leawood KS", href: "/locations/leawood-ks", description: "Local website design, SEO, paid ads, and conversion tracking for Leawood businesses." },
    { label: "Restaurant website design Kansas City", href: "/industries/restaurant-website-design-kansas-city", description: "Restaurant website strategy built around menus, reservations, and local proof." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "lupi-docs": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites built around credibility and lead flow." },
    { label: "Google & Meta Ads", href: "/services/google-ads-management", description: "Paid campaigns measured by qualified leads and revenue signals." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "wrapped-up-moving": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites for local service businesses." },
    { label: "Home services website design Kansas City", href: "/industries/home-services-website-design-kansas-city", description: "Website design for movers, remodelers, contractors, and local service companies." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "zj-carpentry-and-more": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites for Kansas City small businesses." },
    { label: "Contractor website design Kansas City", href: "/industries/construction-website-design-kansas-city", description: "Website design for contractors and construction companies." },
    { label: "Home services website design Kansas City", href: "/industries/home-services-website-design-kansas-city", description: "Website design for local service businesses that need quote requests." },
    { label: "Contractor website checklist", href: "/what-should-a-contractor-website-include", description: "A practical guide to project proof, service pages, and estimate-request flow." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ],
  "project-salvation": [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites built around clarity, trust, and conversion paths." },
    { label: "Ministry Website Article", href: "/ministry-website-design-project-salvation", description: "A deeper breakdown of the Project Salvation website strategy." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ]
};

export async function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.problem || !project.result) {
    return createPageMetadata("Case Study Not Found", "The requested case study could not be found.", "/work");
  }

  return createPageMetadata(
    `${project.clientName} Website Case Study`,
    `${project.clientName} website case study: ${project.summary}`,
    `/case-studies/${project.slug}`
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project?.problem || !project.solution || !project.result) {
    notFound();
  }

  const schema = [
    webPageSchema({
      name: `${project.clientName} Website Case Study`,
      description: project.result,
      path: `/case-studies/${project.slug}`
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" },
      { name: `${project.clientName} Case Study`, path: `/case-studies/${project.slug}` }
    ]),
    creativeWorkSchema({
      name: `${project.clientName} Website Case Study`,
      description: project.result,
      path: `/case-studies/${project.slug}`,
      image: project.featuredImageUrl,
      dateModified: project.updatedAt,
      about: `${project.category} website design`
    })
  ];
  const contextualLinks = relatedPageLinks[project.slug] ?? [
    { label: "Website Design", href: "/services/website-design", description: "Custom websites for Kansas City small businesses." },
    { label: "More Website Work", href: "/work", description: "Recent Hometown website projects and case studies." }
  ];

  const currentIndex = caseStudyProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = caseStudyProjects[(currentIndex + 1) % caseStudyProjects.length];

  return (
    <div className="overflow-x-clip bg-background">
      <StructuredData data={schema} />

      <PageIntro
        crumbs={[{ name: "Home", href: "/" }, { name: "Work", href: "/work" }, { name: project.clientName }]}
        badge={`${project.category} website case study`}
        title={`${project.clientName}: website design built around real outcomes`}
        titleLines={[
          project.clientName,
          <span key="sub" className="serif-accent text-primary-foreground/60">
            website design built around real outcomes
          </span>
        ]}
        subtitle={project.summary}
        className="pb-0 md:pb-0"
      >
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-t-[1.25rem] bg-primary-foreground/10 md:grid-cols-4">
          <div className="bg-ink p-5 md:p-6">
            <dt className="mono-label text-primary-foreground/45">Client</dt>
            <dd className="mt-3 font-medium">{project.clientName}</dd>
          </div>
          <div className="bg-ink p-5 md:p-6">
            <dt className="mono-label text-primary-foreground/45">Market</dt>
            <dd className="mt-3 font-medium">{project.city ?? "Kansas City metro"}</dd>
          </div>
          <div className="bg-ink p-5 md:p-6">
            <dt className="mono-label text-primary-foreground/45">Services</dt>
            <dd className="mt-3 text-sm leading-relaxed text-primary-foreground/80">{project.servicesProvided.join(", ")}</dd>
          </div>
          <div className="bg-ink p-5 md:p-6">
            <dt className="mono-label text-primary-foreground/45">Live site</dt>
            <dd className="mt-3">
              {project.liveUrl ? (
                <TrackedAnchor
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  eventName={analyticsEvents.outboundWebsiteClick}
                  className="link-underline inline-flex items-center gap-1.5 font-medium"
                >
                  Visit website <ArrowUpRightIcon className="h-3.5 w-3.5" />
                </TrackedAnchor>
              ) : (
                <span className="text-primary-foreground/60">—</span>
              )}
            </dd>
          </div>
        </dl>
      </PageIntro>

      <section aria-label="Project preview" className="relative">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-ink" />
        <div className="site-container relative">
          <Reveal variant="clip">
            <div className="browser-frame">
              <div className="flex items-center gap-1.5 bg-secondary px-4 py-3" aria-hidden="true">
                {[0, 1, 2].map((dot) => (
                  <span key={dot} className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                ))}
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.featuredImageUrl}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1440px) 94vw, 1360px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-16 md:gap-24">
          {[
            { label: "The problem", body: project.problem },
            { label: "The solution", body: project.solution },
            { label: "The result", body: project.result }
          ].map((item, index) => (
            <article key={item.label} className="grid gap-6 border-t border-foreground/12 pt-8 md:grid-cols-12">
              <p className="mono-label text-muted-foreground md:col-span-4">
                {item.label}
              </p>
              <p data-reveal="up" className="text-xl leading-[1.45] tracking-[-0.02em] md:col-span-8 md:text-[1.75rem] md:leading-[1.35]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      {project.metrics?.length ? (
        <section aria-labelledby="results-heading" className="grain bg-ink py-24 text-primary-foreground md:py-32">
          <div className="site-container">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="eyebrow md:col-span-4">Measured results</p>
              <h2 id="results-heading" className="section-title md:col-span-8">
                Performance tied to <span className="serif-accent">real customer actions.</span>
              </h2>
            </div>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-[1.25rem] bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col bg-ink p-6 md:p-8">
                  <dd className="order-2 mt-auto pt-10 font-display text-[clamp(2.5rem,4.4vw,4rem)] font-semibold leading-none tracking-[-0.05em]">
                    {metric.value}
                  </dd>
                  <dt className="order-1 font-medium">
                    {metric.label}
                    {metric.detail ? <span className="mt-1 block text-sm font-normal text-primary-foreground/50">{metric.detail}</span> : null}
                  </dt>
                </div>
              ))}
            </dl>
            {project.measurementSource ? (
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-primary-foreground/50">
                <span className="text-primary-foreground/80">Measurement sources:</span> {project.measurementSource}
              </p>
            ) : null}
            {project.testimonial ? (
              <figure className="mt-20 border-t border-primary-foreground/10 pt-12 md:mt-28">
                <blockquote className="max-w-5xl font-display text-[clamp(1.75rem,3.4vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.04em]">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-medium">{project.testimonial.name}</p>
                  <p className="mt-1 text-sm text-primary-foreground/55">{project.testimonial.role}</p>
                </figcaption>
              </figure>
            ) : null}
          </div>
        </section>
      ) : null}

      {project.galleryImages?.length ? (
        <SectionShell>
          <div className="grid gap-8 md:grid-cols-12">
            <p className="eyebrow md:col-span-4">Inside the website</p>
            <div className="md:col-span-8">
              <h2 className="section-title">A connected experience across every important page.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The design system carries the same visual direction, clear hierarchy, and conversion path from the homepage into the pages
                customers use to make a decision.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:mt-20 lg:grid-cols-2">
            {project.galleryImages.map((image, index) => (
              <Reveal key={image.url} delay={(index % 2) * 0.08}>
                <figure className="group">
                  <div className="relative aspect-[36/25] overflow-hidden rounded-[1.25rem] bg-secondary">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 46vw"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-center justify-between gap-4">
                    <span className="font-medium">{image.label}</span>
                    <span className="mono-label text-muted-foreground">{project.clientName}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="pt-0">
        <div className="grid gap-12 border-t border-foreground/12 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Why it matters for SEO</p>
            <p className="mt-6 text-xl font-medium leading-snug tracking-[-0.02em]">
              Case studies give search engines and customers more specific proof.
            </p>
            <ul className="mt-8 grid gap-3 text-muted-foreground">
              {[
                "Shows real industry fit instead of generic service claims",
                "Creates internal links back to the website-design offer",
                project.slug === "project-salvation"
                  ? "Builds topical proof for ministry, evangelist, and event website searches"
                  : `Builds specific proof for ${project.category.toLowerCase()} and small-business website searches`,
                "Supports future industry pages with relevant examples"
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="mono-label text-muted-foreground">Keep exploring the services behind this project</p>
            <ul className="mt-6 border-b border-foreground/12">
              {contextualLinks.map((link) => (
                <li key={link.href} className="border-t border-foreground/12">
                  <Link href={link.href} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block text-xl font-medium tracking-[-0.02em] transition-colors group-hover:text-accent">{link.label}</span>
                      <span className="mt-1 block text-sm text-muted-foreground">{link.description}</span>
                    </span>
                    <ArrowUpRightIcon className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      {nextProject && nextProject.slug !== project.slug ? (
        <section aria-label="Next case study" className="grain bg-ink text-primary-foreground">
          <Link href={`/case-studies/${nextProject.slug}`} className="group site-container grid gap-10 py-24 md:grid-cols-12 md:items-center md:py-32">
            <div className="md:col-span-7">
              <p className="mono-label text-primary-foreground/45">Next case study</p>
              <p className="mt-6 font-display text-[clamp(3rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] transition-transform duration-700 ease-out-expo group-hover:translate-x-3">
                {nextProject.clientName}
              </p>
              <p className="mt-6 max-w-lg text-primary-foreground/60">{nextProject.summary}</p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={nextProject.featuredImageUrl}
                  alt={nextProject.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 40vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </Link>
          <div className="site-container flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/10 py-8">
            <p className="text-lg">Want a website built around the same kind of clarity?</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/services/website-design" variant="primary">
                Website design service
              </Button>
              <Button href="/work" variant="outline-light" arrow={false}>
                More work
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
