"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils/cn";

const filters = ["All", "Home Services", "Restaurant", "Catering", "Ministry", "Music", "Publishing"] as const;

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by industry">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          const count = filter === "All" ? projects.length : projects.filter((project) => project.category === filter).length;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={active}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                active ? "border-foreground bg-foreground text-background" : "border-foreground/15 hover:border-foreground"
              )}
            >
              {filter}
              <sup className={cn("font-mono text-[0.65rem]", active ? "text-background/60" : "text-muted-foreground")}>{count}</sup>
            </button>
          );
        })}
      </div>
      <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-24">
        {filteredProjects.map((project, index) => {
          const hasCaseStudy = Boolean(project.problem && project.solution && project.result);
          return (
            <div key={project.slug} className={cn(index % 2 === 1 && "md:translate-y-28")}>
              <ProjectCard
                title={project.clientName}
                description={project.summary}
                category={project.category}
                meta={project.category}
                imageUrl={project.featuredImageUrl}
                imageAlt={project.imageAlt}
                link={hasCaseStudy ? `/case-studies/${project.slug}` : project.liveUrl}
                linkExternal={!hasCaseStudy}
                linkLabel={hasCaseStudy ? "Read case study" : "Visit site"}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
