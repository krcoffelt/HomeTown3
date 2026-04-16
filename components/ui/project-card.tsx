"use client";

import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  link?: string;
}

export function ProjectCard({ title, description, category, imageUrl, imageAlt, link }: ProjectCardProps) {
  const content = (
    <article className="group relative h-[400px] overflow-hidden rounded-2xl bg-foreground text-primary-foreground md:h-[480px]">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
      <div className="absolute left-5 top-5 rounded-full bg-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground backdrop-blur-sm">
        {category}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 max-w-md translate-y-4 text-sm leading-relaxed text-primary-foreground/75 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {description}
        </p>
        {link ? (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground">
            View Project
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        ) : null}
      </div>
    </article>
  );

  if (!link) return content;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      onClick={() => pushDataLayerEvent(analyticsEvents.outboundWebsiteClick)}
    >
      {content}
    </a>
  );
}
