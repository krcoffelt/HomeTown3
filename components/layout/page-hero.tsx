import Link from "next/link";
import type { ReactNode } from "react";
import { SplitLines } from "@/components/motion/split-lines";
import { cn } from "@/lib/utils/cn";

interface Crumb {
  name: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  /** Kept for older call sites; heroes are always set on ink now. */
  light?: boolean;
  centered?: boolean;
  artwork?: string;
  artworkAlt?: string;
  artworkLayout?: "panel" | "background";
  crumbs?: Crumb[];
  actions?: ReactNode;
  /** Explicit headline lines for the masked reveal. Falls back to `title`. */
  titleLines?: ReactNode[];
}

function titleSize(title: ReactNode) {
  const length = typeof title === "string" ? title.length : 40;
  if (length > 70) return "text-[clamp(2.2rem,4.6vw,4.6rem)] leading-[1] tracking-[-0.045em]";
  if (length > 44) return "text-[clamp(2.4rem,5.6vw,5.75rem)] leading-[0.96] tracking-[-0.05em]";
  return "text-[clamp(2.8rem,8vw,8.25rem)] leading-[0.9] tracking-[-0.055em]";
}

/** Headline block used inside dark page intros. */
export function PageHero({ badge, title, subtitle, crumbs, actions, titleLines }: PageHeroProps) {
  return (
    <div>
      <div className="hero-rise flex flex-wrap items-center gap-x-3 gap-y-2">
        {crumbs?.length ? (
          <nav aria-label="Breadcrumb" className="mono-label flex flex-wrap items-center gap-2 text-primary-foreground/45">
            {crumbs.map((crumb, index) => (
              <span key={crumb.name} className="inline-flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary-foreground">
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-primary-foreground/80">{crumb.name}</span>
                )}
                {index < crumbs.length - 1 ? <span aria-hidden="true">/</span> : null}
              </span>
            ))}
          </nav>
        ) : badge ? (
          <span className="eyebrow !text-primary-foreground/60">{badge}</span>
        ) : null}
      </div>

      {titleLines ? (
        <SplitLines
          as="h1"
          trigger="load"
          lines={titleLines}
          className={cn("mt-8 max-w-[18ch] font-display font-semibold text-primary-foreground", titleSize(title))}
        />
      ) : (
        <h1 className={cn("hero-rise hero-rise-delay-1 mt-8 max-w-[22ch] font-display font-semibold text-primary-foreground", titleSize(title))}>
          {title}
        </h1>
      )}

      {subtitle || actions ? (
        <div className="hero-rise hero-rise-delay-2 mt-12 grid gap-8 border-t border-primary-foreground/12 pt-8 md:mt-16 lg:grid-cols-12">
          {badge && crumbs?.length ? (
            <p className="mono-label text-primary-foreground/45 lg:col-span-4">{badge}</p>
          ) : (
            <span className="hidden lg:col-span-4 lg:block" />
          )}
          <div className="lg:col-span-8">
            {subtitle ? (
              <p className="max-w-2xl text-lg leading-relaxed text-primary-foreground/70 md:text-xl md:leading-relaxed">{subtitle}</p>
            ) : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

interface PageIntroProps extends PageHeroProps {
  children?: ReactNode;
  className?: string;
}

/** Full-bleed ink page intro. Every interior page opens with one of these. */
export function PageIntro({ children, className, ...hero }: PageIntroProps) {
  return (
    <section className={cn("grain relative overflow-hidden bg-ink pb-16 pt-36 text-primary-foreground md:pb-24 md:pt-48", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[20%] -top-[30%] h-[70vw] w-[70vw] glow [--glow-alpha:0.32]"
      />
      <div className="site-container relative">
        <PageHero {...hero} />
        {children}
      </div>
    </section>
  );
}

/** Classes for legacy dark hero wrappers that still render <PageHero> inside their own section. */
export const pageIntroSectionClass =
  "grain relative overflow-hidden bg-ink pb-16 pt-36 text-primary-foreground md:pb-24 md:pt-48";
