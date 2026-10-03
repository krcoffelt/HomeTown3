"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  link?: string;
  linkExternal?: boolean;
  linkLabel?: string;
  meta?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  link,
  linkExternal = true,
  linkLabel = "View project",
  meta,
  className
}: ProjectCardProps) {
  const content = (
    <article className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-[1.25rem] bg-secondary">
        <div className="relative aspect-[4/3]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 92vw, 46vw"
            className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.05]"
          />
        </div>
        {link ? (
          <span className="pointer-events-none absolute bottom-4 right-4 flex translate-y-3 items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-sm text-primary-foreground opacity-0 transition duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100">
            {linkLabel}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-foreground text-ink">
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </span>
          </span>
        ) : null}
      </div>
      <div className="mt-5 flex items-start justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.035em] md:text-[1.75rem]">{title}</h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <span className="mono-label shrink-0 pt-2 text-muted-foreground">{meta ?? category}</span>
      </div>
    </article>
  );

  if (!link) return content;

  if (!linkExternal) {
    return (
      <Link href={link} className="block">
        {content}
      </Link>
    );
  }

  return (
    <a href={link} target="_blank" rel="noreferrer" className="block" onClick={() => pushDataLayerEvent(analyticsEvents.outboundWebsiteClick)}>
      {content}
    </a>
  );
}
