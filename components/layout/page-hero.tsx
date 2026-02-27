import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <Badge>{eyebrow}</Badge>
      <h1 className="mt-6 text-balance text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight text-ink">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
        {subtitle}
      </p>
    </div>
  );
}

