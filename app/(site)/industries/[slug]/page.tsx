import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
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

  const relatedReading = [
    {
      label: "Schedule a free marketing audit",
      href: "/contact#form",
      description: "Find the biggest website, SEO, paid-ads, or tracking opportunity before choosing the next move."
    },
    ...(industry.slug === "construction-website-design-kansas-city" || industry.slug === "home-services-website-design-kansas-city"
      ? [
          {
            label: "Noble Hardwoods website case study",
            href: "/case-studies/noble-hardwoods",
            description: "A Kansas City flooring website built around craftsmanship, local proof, service clarity, and detailed quote requests."
          },
          {
            label: "What should a contractor website include?",
            href: "/what-should-a-contractor-website-include",
            description: "A practical checklist for project proof, service pages, quote flow, and local SEO structure."
          },
          {
            label: "DecksRXKC website breakdown",
            href: "/deck-contractor-website-design-kansas-city",
            description: "A deck contractor website example built around project photos and quote-request paths."
          }
        ]
      : []),
    ...(industry.slug === "restaurant-website-design-kansas-city"
      ? [
          {
            label: "Dragonfly Catering website case study",
            href: "/case-studies/dragonfly-catering",
            description: "A catering website built around chef credibility, sample menus, event services, and custom proposal requests."
          },
          {
            label: "Plate KC website case study",
            href: "/case-studies/plate-kc",
            description: "A restaurant website example built around premium presentation and reservation intent."
          },
          {
            label: "Leawood website design",
            href: "/locations/leawood-ks",
            description: "Local website design proof and positioning for Leawood businesses."
          },
          {
            label: "View website work",
            href: "/work",
            description: "Recent Hometown website builds across restaurants, service businesses, publishing, music, and ministries."
          }
        ]
      : [])
  ];

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
            Proof from relevant website builds.
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

      {relatedReading.length ? (
        <SectionShell className="pt-0">
          <div className="dark-panel p-7 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Related Guides</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
                  More help for planning a lead-focused website.
                </h2>
              </div>
              <div className="grid gap-3">
                {relatedReading.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent"
                  >
                    <span className="flex items-center justify-between gap-4 text-base font-bold text-primary-foreground">
                      {item.label}
                      <ArrowRightIcon className="h-4 w-4 text-accent" />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-primary-foreground/68">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>
      ) : null}

      <ContactCta
        title="Ready to find your biggest lead-generation opportunity?"
        accentText="lead-generation opportunity?"
        body="Start with a free marketing audit across your website, local search visibility, paid campaigns, and conversion tracking."
        links={[{ href: "/services", label: "Explore Services" }]}
      />
    </div>
  );
}
