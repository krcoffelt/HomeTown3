import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  artwork?: string;
  artworkAlt?: string;
  artworkLayout?: "panel" | "background";
}

export function PageHero({
  badge,
  title,
  subtitle,
  light = false,
  centered = true,
  artwork,
  artworkAlt = "",
  artworkLayout = "panel"
}: PageHeroProps) {
  if (artwork && artworkLayout === "background") {
    return (
      <div className="paper-texture relative min-h-[620px] overflow-hidden bg-background sm:min-h-[680px] lg:min-h-[720px]">
        <Image
          src={artwork}
          alt={artworkAlt}
          fill
          priority
          sizes="100vw"
          className="artwork-drift origin-bottom scale-[1.05] object-contain object-bottom md:scale-100 md:object-cover md:object-center 2xl:object-contain 2xl:object-bottom"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[72%] bg-gradient-to-b from-background/50 via-background/25 to-transparent"
        />

        <div className="site-container relative z-10 flex min-h-[620px] justify-center pb-48 pt-32 sm:min-h-[680px] sm:pb-52 sm:pt-40 lg:min-h-[720px] lg:pb-60 lg:pt-44">
          <div className="mx-auto max-w-4xl text-center">
            {badge ? <span className="section-badge hero-rise">{badge}</span> : null}
            <h1 className="hero-rise hero-rise-delay-1 mt-7 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {subtitle ? (
              <p className="hero-rise hero-rise-delay-2 mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (artwork) {
    return (
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="max-w-3xl text-left">
          {badge ? <span className="section-badge">{badge}</span> : null}
          <h1 className="mt-7 text-balance font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? <p className="mt-6 text-base font-medium leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p> : null}
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-2 border-foreground bg-background shadow-hero">
          <Image
            src={artwork}
            alt={artworkAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 54vw"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

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
