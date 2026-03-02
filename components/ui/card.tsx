import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardSectionProps {
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

export function CardHeader({ children, className }: CardSectionProps) {
  return <div className={cn("flex flex-col gap-1.5 p-6", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardSectionProps) {
  return <h3 className={cn("text-xl font-semibold tracking-tight text-ink", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardSectionProps) {
  return <p className={cn("text-sm text-muted", className)}>{children}</p>;
}

export function CardContent({ children, className }: CardSectionProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardSectionProps) {
  return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
}
