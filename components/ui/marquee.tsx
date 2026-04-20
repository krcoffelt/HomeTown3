import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export function Marquee({ children, className, speed = 30, reverse = false }: MarqueeProps) {
  const content = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex w-max min-w-full gap-8 will-change-transform"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {[0, 1].map((duplicate) => (
          <div key={duplicate} className="flex shrink-0 items-center gap-8">
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
