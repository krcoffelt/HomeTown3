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
      <Badge className="border-white/25 bg-white/10 text-white">{eyebrow}</Badge>
      <h1 className="mt-6 text-balance text-[clamp(2.4rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight text-white">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
        {subtitle}
      </p>
    </div>
  );
}
