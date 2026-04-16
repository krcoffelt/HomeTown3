import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  void strength;
  return <div className={cn("inline-flex", className)}>{children}</div>;
}
