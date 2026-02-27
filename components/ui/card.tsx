import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-line bg-surface p-6 shadow-soft backdrop-blur-[1px] transition duration-300 hover:-translate-y-0.5 hover:border-white/25",
        className
      )}
    >
      {children}
    </div>
  );
}
