import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectCard } from "@/components/ui/project-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import Link from "next/link";

export function FeaturedWork() {
  return (
    <SectionShell>
      <SectionHeading
        badge="Work"
        title="Real results for real KC businesses"
        subtitle="Every project is custom. Every client gets our full attention. Here's a taste of what we've built."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard
              title={project.clientName}
              description={project.description}
              category={project.category}
              imageUrl={project.featuredImageUrl}
              link={project.liveUrl}
            />
          </Reveal>
        ))}
      </div>
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
