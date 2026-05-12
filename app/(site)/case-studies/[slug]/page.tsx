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
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

const caseStudyProjects = projects.filter((project) => project.problem && project.solution && project.result);

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
    `${project.clientName} website design case study: ${project.result}`,
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
    ])
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge={`${project.category} Website Case Study`}
            title={`${project.clientName}: website design built around real business outcomes`}
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
            </div>
          </aside>
        </div>
      </SectionShell>

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
              "Adds local proof for Kansas City small-business searches",
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
