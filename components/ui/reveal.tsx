import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay: _delay = 0,
  direction: _direction = "up",
  duration: _duration = 0.6
}: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
