import { cn } from "@/lib/utils/cn";
import type { CSSProperties, ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Seconds per loop */
  speed?: number;
  reverse?: boolean;
  gapClassName?: string;
  align?: "center" | "stretch";
}

export function Marquee({ children, className, speed = 40, reverse = false, gapClassName = "gap-8", align = "center" }: MarqueeProps) {
  const content = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn("marquee-track flex w-max", gapClassName)}
        style={{ "--marquee-speed": `${speed}s`, "--marquee-direction": reverse ? "reverse" : "normal" } as CSSProperties}
      >
        {[0, 1].map((duplicate) => (
          <div key={duplicate} aria-hidden={duplicate === 1 ? true : undefined} className={cn("flex shrink-0", align === "center" ? "items-center" : "items-stretch", gapClassName)}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
