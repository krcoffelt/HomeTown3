"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/data/projects";

const filters = ["All", "Restaurant", "Music", "Publishing", "Home Services"] as const;

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
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition ${active ? "text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              {active ? (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{filter}</span>
            </button>
          );
        })}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ProjectCard
                title={project.clientName}
                description={project.description}
                category={project.category}
                imageUrl={project.featuredImageUrl}
                imageAlt={project.imageAlt}
                link={project.liveUrl}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
