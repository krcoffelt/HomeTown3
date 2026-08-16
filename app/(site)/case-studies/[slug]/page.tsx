import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
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

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge={`${project.category} Website Case Study`}
            title={`${project.clientName}: website design built around real outcomes`}
            subtitle={project.summary}
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-secondary shadow-[var(--shadow-card)]">
            <Image
              src={project.featuredImageUrl}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 52vw"
              className="object-cover"
            />
          </div>
          <aside className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Project Snapshot</p>
            <div className="mt-6 grid gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Client</p>
                <p className="mt-2 text-lg font-bold text-primary-foreground">{project.clientName}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Market</p>
                <p className="mt-2 text-lg font-bold text-primary-foreground">{project.city ?? "Kansas City metro"}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Services</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.servicesProvided.map((service) => (
                    <span key={service} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-primary-foreground/78">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Visit Live Website
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </SectionShell>

      {project.galleryImages?.length ? (
        <SectionShell className="pt-0">
          <div className="mb-9 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Inside the Website</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              A connected experience across every important page.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The design system carries the same visual direction, clear hierarchy, and conversion path from the homepage into the pages customers use to make a decision.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {project.galleryImages.map((image) => (
              <figure
                key={image.url}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative aspect-[36/25] overflow-hidden bg-secondary">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 92vw, 46vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{image.label}</span>
                  <span className="text-sm text-muted-foreground">{project.clientName}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: "Problem", body: project.problem },
            { label: "Solution", body: project.solution },
            { label: "Result", body: project.result }
          ].map((item) => (
            <article key={item.label} className="light-panel p-7 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{item.label}</p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why It Matters for SEO</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Case studies give search engines and customers more specific proof.
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {[
              "Shows real industry fit instead of generic service claims",
              "Creates internal links back to the website-design offer",
              project.slug === "project-salvation"
                ? "Builds topical proof for ministry, evangelist, and event website searches"
                : `Builds specific proof for ${project.category.toLowerCase()} and small-business website searches`,
              "Supports future industry pages with relevant examples"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Related Pages</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                Keep exploring the services behind this project.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {contextualLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-background px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <p className="text-sm font-bold text-foreground transition group-hover:text-accent">{link.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-bold tracking-tight md:text-5xl">Want a website built around the same kind of clarity?</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/services/website-design" className="h-14 px-8">
              Website Design Service
            </Button>
            <Link
              href="/work"
              className="inline-flex h-14 items-center gap-2 rounded-full border border-white/10 px-8 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:border-accent"
            >
              More Work
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
