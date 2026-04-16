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
  delay = 0,
  direction: _direction = "up",
  duration = 0.6
}: RevealProps) {
  void delay;
  void duration;
  return <div className={cn(className)}>{children}</div>;
}
