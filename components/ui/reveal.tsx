import { cn } from "@/lib/utils/cn";
import type { CSSProperties, ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";
type Variant = "up" | "fade" | "scale" | "clip";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds, kept for backwards compatibility with existing call sites */
  delay?: number;
  direction?: Direction;
  duration?: number;
  variant?: Variant;
  as?: "div" | "li" | "article" | "section";
}

export function Reveal({ children, className, delay = 0, direction = "up", variant, as: Tag = "div" }: RevealProps) {
  const resolved: Variant = variant ?? (direction === "none" ? "fade" : "up");
  const style = delay ? ({ "--reveal-delay": `${Math.round(delay * 1000)}ms` } as CSSProperties) : undefined;

  return (
    <Tag data-reveal={resolved} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
}
