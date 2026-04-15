import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  dataAnalytics?: string;
  disabled?: boolean;
  form?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "group relative overflow-hidden rounded-full bg-accent px-6 py-3 text-accent-foreground shadow-[0_2px_12px_hsl(var(--accent)/0.35)] transition hover:bg-accent/90",
  secondary:
    "rounded-full border border-foreground/12 bg-transparent px-6 py-3 text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated",
  ghost:
    "rounded-full px-4 py-3 text-foreground transition hover:bg-foreground/5"
};

export function Button({
  children,
  className,
  dataAnalytics,
  disabled,
  form,
  href,
  onClick,
  type = "button",
  variant = "primary"
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap text-sm font-bold tracking-[0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-55",
    variants[variant],
    className
  );

  const childrenWithShine =
    variant === "primary" ? (
      <>
        <span className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} data-analytics={dataAnalytics}>
        {childrenWithShine}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      data-analytics={dataAnalytics}
      form={form}
      onClick={onClick}
      disabled={disabled}
    >
      {childrenWithShine}
    </button>
  );
}
