import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "dark";
}

const toneMap = {
  default: "border border-line bg-white/5 text-muted",
  sand: "bg-accent text-white",
  dark: "bg-canvas text-[#0a0c10]"
};

export function Badge({ children, className, tone = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
        toneMap[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
