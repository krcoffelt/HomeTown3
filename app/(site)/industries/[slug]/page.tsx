import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { getIndustryBySlug, industries } from "@/data/industries";
import { getProjectBySlug } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return createPageMetadata("Industry Not Found", "The requested industry page could not be found.", "/services");
  }

  return createPageMetadata(industry.seoTitle, industry.seoDescription, `/industries/${industry.slug}`);
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const proofProjects = industry.proofProjectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const schema = [
    webPageSchema({
      name: industry.title,
      description: industry.seoDescription,
      path: `/industries/${industry.slug}`
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Industries", path: "/services" },
      { name: industry.title, path: `/industries/${industry.slug}` }
    ]),
    faqItemsSchema(industry.faqItems)
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge={industry.primaryKeyword}
            title={industry.heroTitle}
            subtitle={industry.heroDescription}
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-2">
          {industry.sections.map((section) => (
            <article key={section.title} className="light-panel p-7 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{section.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">{section.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{section.body}</p>
              <div className="mt-7 grid gap-3">
                {section.items.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mb-9 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Relevant Work</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Proof from local service-business website builds.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {proofProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/case-studies/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={project.featuredImageUrl}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{project.clientName}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.result ?? project.summary}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                  Read case study
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
          {industry.faqItems.map((item, index) => (
            <details
              key={item.question}
              className={`group border-b border-border ${index === industry.faqItems.length - 1 ? "border-b-0" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left text-base font-bold text-card-foreground md:pl-4 md:text-lg">
                {item.question}
                <span className="text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</div>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-bold tracking-tight md:text-5xl">Ready to turn local searches into project conversations?</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/72">
            Start with a website that shows your work clearly and gives customers a direct path to reach out.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact#form" className="h-14 px-8">
              Start a Website Project
            </Button>
            <Button href="/services/website-design" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
              Website Design Service
            </Button>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
