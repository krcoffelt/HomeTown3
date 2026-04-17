"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import type { ProjectItem } from "@/types";

interface OfferExamplesCarouselProps {
  projects: ProjectItem[];
  compact?: boolean;
  introText?: string | null;
}

function scrollByAmount(container: HTMLDivElement | null, direction: "prev" | "next", compact: boolean) {
  if (!container) return;

  const viewportFraction = compact ? 0.9 : 0.46;
  const amount = Math.round(container.clientWidth * viewportFraction);

  container.scrollBy({
    left: direction === "next" ? amount : -amount,
    behavior: "smooth"
  });
}

export function OfferExamplesCarousel({
  projects,
  compact = false,
  introText = "Swipe through a few recent builds, then open any live site in a new tab."
}: OfferExamplesCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full min-w-0">
      <div className="mb-6 flex items-center justify-between gap-4">
        {introText ? (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">{introText}</p>
        ) : (
          <div />
        )}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-card"
            onClick={() => scrollByAmount(containerRef.current, "prev", compact)}
            aria-label="Show previous websites"
          >
            <span className="text-lg leading-none">←</span>
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent bg-accent text-accent-foreground transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-card"
            onClick={() => scrollByAmount(containerRef.current, "next", compact)}
            aria-label="Show more websites"
          >
            <span className="text-lg leading-none">→</span>
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`light-panel snap-start flex-none overflow-hidden p-0 ${
              compact ? "w-[88%] sm:w-[74%] lg:w-[84%]" : "w-[84%] sm:w-[58%] lg:w-[38%]"
            }`}
          >
            <div
              className={`relative overflow-hidden border-b border-border bg-secondary ${
                compact ? "h-[16rem] sm:h-[19rem]" : "h-[19rem] sm:h-[24rem]"
              }`}
            >
              <Image
                src={project.featuredImageUrl}
                alt={project.imageAlt}
                fill
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : undefined}
                loading={index === 0 ? "eager" : "lazy"}
                quality={72}
                sizes={
                  compact
                    ? "(max-width: 640px) 88vw, (max-width: 1024px) 74vw, 84vw"
                    : "(max-width: 640px) 84vw, (max-width: 1024px) 58vw, 38vw"
                }
                className="object-cover object-top"
              />
            </div>

            <div className={`flex min-w-0 flex-col gap-5 ${compact ? "p-5 md:p-6" : "p-6 md:flex-row md:items-end md:justify-between md:p-7"}`}>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Featured Website</p>
                <h3 className={`mt-3 font-bold tracking-tight text-foreground ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}>
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
                  onClick={() => pushDataLayerEvent(analyticsEvents.outboundWebsiteClick)}
                  className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black text-sm font-bold text-white transition hover:bg-black/88 ${
                    compact ? "h-11 px-5 self-start" : "h-12 px-6"
                  }`}
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
