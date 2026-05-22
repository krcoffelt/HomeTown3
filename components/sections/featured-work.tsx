import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import Link from "next/link";

export function FeaturedWork() {
  const caseStudyProjects = projects.filter((project) => project.problem && project.solution && project.result).slice(0, 4);

  return (
    <SectionShell>
      <SectionHeading
        badge="Work"
        title="Real results for real KC businesses"
        subtitle="Every project is custom. Every client gets our full attention. Here's a taste of what we've built."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const hasCaseStudy = Boolean(project.problem && project.solution && project.result);
          return (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard
                title={project.clientName}
                description={project.description}
                category={project.category}
                imageUrl={project.featuredImageUrl}
                imageAlt={project.imageAlt}
                link={hasCaseStudy ? `/case-studies/${project.slug}` : project.liveUrl}
                linkExternal={!hasCaseStudy}
                linkLabel={hasCaseStudy ? "Read Case Study" : "View Project"}
              />
            </Reveal>
          );
        })}
      </div>
      {caseStudyProjects.length ? (
        <div className="mt-12 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured Case Studies</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">
                See how the work comes together.
              </h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {caseStudyProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
                  className="group rounded-2xl border border-border bg-background px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <p className="text-sm font-bold text-foreground transition group-hover:text-accent">{project.clientName}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{project.category} website case study</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div className="mt-12 flex justify-center">
        <MagneticButton>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
          >
            See All Work
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </MagneticButton>
      </div>
    </SectionShell>
  );
}
