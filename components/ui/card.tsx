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
  return <div className={cn("light-panel p-6 transition hover:-translate-y-1 hover:shadow-card-hover", className)}>{children}</div>;
}

export function CardHeader({ children, className }: CardSectionProps) {
  return <div className={cn("flex flex-col gap-2 p-6", className)}>{children}</div>;
}

export function CardTitle({ children, className }: CardSectionProps) {
  return <h3 className={cn("text-2xl font-bold tracking-tight text-foreground", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: CardSectionProps) {
  return <p className={cn("text-sm leading-relaxed text-muted-foreground", className)}>{children}</p>;
}

export function CardContent({ children, className }: CardSectionProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardSectionProps) {
  return <div className={cn("flex items-center p-6 pt-0", className)}>{children}</div>;
}
