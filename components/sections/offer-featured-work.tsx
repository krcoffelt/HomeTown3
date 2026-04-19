"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

const featuredProjects = projects.filter((project) => Boolean(project.liveUrl));

export function OfferFeaturedWork() {
  return (
    <section id="work" className="scroll-mt-28 bg-[#f4f6fa] py-16 md:py-24">
      <div className="site-container px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
            <div>
              <p className="section-badge">Live Client Work</p>
              <h2 className="mt-5 max-w-xl text-[2rem] font-bold leading-[1.02] tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.2rem]">
                Real sites. Real Kansas City businesses.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-foreground/68 md:justify-self-end md:text-right">
              Every site below is live. Open any of them to see the level of work and quality this package is built to deliver.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <figure
                key={project.slug}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-black/8 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(15,23,42,0.14)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#111214]">
                  <Image
                    src={project.featuredImageUrl}
                    alt={project.imageAlt}
                    fill
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : undefined}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 92vw, 32vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-white/92 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                <figcaption className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {project.clientName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/68">
                    {project.summary}
                  </p>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => pushDataLayerEvent(analyticsEvents.outboundWebsiteClick)}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold tracking-[0.01em] text-accent transition group-hover:gap-3"
                    >
                      View Live Site
                      <ArrowRightIcon className="h-4 w-4" />
                    </a>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
