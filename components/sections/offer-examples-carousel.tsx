"use client";

import { useRef } from "react";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import type { ProjectItem } from "@/types";

interface OfferExamplesCarouselProps {
  projects: ProjectItem[];
}

function scrollByAmount(container: HTMLDivElement | null, direction: "prev" | "next") {
  if (!container) return;

  const firstCard = container.firstElementChild as HTMLElement | null;
  const gap = 20;
  const amount = firstCard ? firstCard.offsetWidth + gap : Math.round(container.clientWidth * 0.42);

  container.scrollBy({
    left: direction === "next" ? amount : -amount,
    behavior: "smooth"
  });
}

export function OfferExamplesCarousel({ projects }: OfferExamplesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Swipe through a few recent builds, then open any live site in a new tab.
        </p>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-card"
            onClick={() => scrollByAmount(containerRef.current, "prev")}
            aria-label="Show previous websites"
          >
            <span className="text-lg leading-none">←</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-card"
            onClick={() => scrollByAmount(containerRef.current, "next")}
            aria-label="Show more websites"
          >
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <article
            key={project.slug}
            className="light-panel min-w-[84%] snap-start overflow-hidden p-0 sm:min-w-[58%] lg:min-w-[38%]"
          >
            <div className="relative h-[19rem] overflow-hidden border-b border-border bg-secondary sm:h-[24rem]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.featuredImageUrl}
                alt={`${project.clientName} website preview`}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Featured Website</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {project.clientName}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </div>

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-bold text-white transition hover:bg-black/88"
                >
                  View Website
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
