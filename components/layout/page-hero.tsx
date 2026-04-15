import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function PageHero({ badge, title, subtitle, light = false, centered = true }: PageHeroProps) {
  return (
    <div className={cn("max-w-4xl", centered && "mx-auto text-center")}>
      {badge ? <span className="section-badge">{badge}</span> : null}
      <h1 className={cn("mt-6 section-title text-balance md:text-5xl lg:text-6xl", light ? "text-primary-foreground" : "text-foreground")}>
        {title}
      </h1>
      {subtitle ? (
        <p className={cn("mt-6 text-lg leading-relaxed", light ? "text-primary-foreground/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
