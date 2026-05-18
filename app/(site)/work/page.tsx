import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { WorkGrid } from "@/components/sections/work-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PageTransition } from "@/components/ui/page-transition";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { StructuredData } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { projects } from "@/data/projects";
import Link from "next/link";

export const metadata = createPageMetadata(
  "Kansas City Website Design Work",
  "Recent custom website design projects and case studies for Kansas City small businesses.",
  "/work"
);

export default function WorkPage() {
  const caseStudyProjects = projects.filter((project) => project.problem && project.result).slice(0, 4);
  const schema = [
    webPageSchema({
      name: "Our Work",
      description: "Recent website work for Kansas City businesses across several industries.",
      path: "/work"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Our Work"
            title="Real results for real KC businesses"
            subtitle="Recent custom website design projects for Kansas City small businesses, restaurants, contractors, publishers, and local service brands."
            light
          />
        </div>
      </section>

      <SectionShell>
        <WorkGrid />
        {caseStudyProjects.length ? (
          <div className="mt-16 rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Case Studies</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                  Website projects with a clearer problem, solution, and result.
                </h2>
              </div>
              <div className="grid gap-3">
                {caseStudyProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/case-studies/${project.slug}`}
                    className="group flex flex-col gap-2 rounded-2xl border border-border bg-background px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-base font-bold text-foreground">{project.clientName}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{project.result}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                      Read
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3">
            <MagneticButton>
              <Link
                href="/services/website-design"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
              >
                Website Design Kansas City
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact#form"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
              >
                Start Your Project
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/website-offer-800#claim-form"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
              >
                See the $800 Offer
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
