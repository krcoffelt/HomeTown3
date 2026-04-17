"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import type { ProjectItem } from "@/types";

interface OfferExamplesCarouselProps {
  projects: ProjectItem[];
}

function scrollByAmount(container: HTMLDivElement | null, direction: "prev" | "next") {
  if (!container) return;

  const amount = Math.round(container.clientWidth * 0.9);

  container.scrollBy({
    left: direction === "next" ? amount : -amount,
    behavior: "smooth"
  });
}

export function OfferExamplesCarousel({ projects }: OfferExamplesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="mb-5 hidden justify-end gap-3 md:flex">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition hover:-translate-y-0.5"
          onClick={() => scrollByAmount(containerRef.current, "prev")}
          aria-label="Show previous websites"
        >
          <span className="text-lg leading-none">←</span>
        </button>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-foreground transition hover:-translate-y-0.5"
          onClick={() => scrollByAmount(containerRef.current, "next")}
          aria-label="Show more websites"
        >
          <span className="text-lg leading-none">→</span>
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <figure key={project.slug} className="w-[88%] flex-none snap-center min-[420px]:w-[82%] md:w-[58%]">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#111214] shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="relative aspect-[0.92/1.05] md:aspect-[1.25/1]">
                <Image
                  src={project.featuredImageUrl}
                  alt={project.imageAlt}
                  fill
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : undefined}
                  loading={index === 0 ? "eager" : "lazy"}
                  quality={74}
                  sizes="(max-width: 420px) 88vw, (max-width: 768px) 82vw, 58vw"
                  className="object-cover object-top transition duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/52 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/55">{project.category}</p>
                  <h3 className="mt-2 text-[1.65rem] font-bold leading-tight tracking-tight sm:text-[2rem]">
                    {project.clientName}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/68">{project.summary}</p>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => pushDataLayerEvent(analyticsEvents.outboundWebsiteClick)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/78"
                    >
                      View Website
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
