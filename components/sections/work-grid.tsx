"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

const filters = ["All", "Restaurant", "Music", "Publishing", "Home Services", "Ministry"] as const;

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={active}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"}`}
            >
              {filter}
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.slug}>
              <ProjectCard
                title={project.clientName}
                description={project.description}
                category={project.category}
                imageUrl={project.featuredImageUrl}
                imageAlt={project.imageAlt}
                link={project.problem && project.solution && project.result ? `/case-studies/${project.slug}` : project.liveUrl}
                linkExternal={!(project.problem && project.solution && project.result)}
                linkLabel={project.problem && project.solution && project.result ? "Read Case Study" : "View Project"}
              />
            </div>
          ))}
      </div>
    </>
  );
}
