"use client";

import Link from "next/link";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { cn } from "@/lib/utils/cn";
import type { MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "dark" | "outline-light";

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
  /** Shows the circular arrow chip. Defaults on for filled variants. */
  arrow?: boolean;
}

const variants: Record<ButtonVariant, { base: string; chip: string }> = {
  primary: {
    base: "bg-accent text-accent-foreground hover:bg-[hsl(229_100%_52%)]",
    chip: "bg-accent-foreground text-accent"
  },
  dark: {
    base: "bg-ink text-primary-foreground hover:bg-ink-soft",
    chip: "bg-primary-foreground text-ink"
  },
  light: {
    base: "bg-primary-foreground text-ink hover:bg-white",
    chip: "bg-ink text-primary-foreground"
  },
  secondary: {
    base: "border border-foreground/20 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
    chip: "bg-foreground text-background group-hover:bg-background group-hover:text-foreground"
  },
  "outline-light": {
    base: "border border-primary-foreground/25 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground hover:text-ink",
    chip: "bg-primary-foreground text-ink group-hover:bg-ink group-hover:text-primary-foreground"
  },
  ghost: {
    base: "px-4 text-foreground hover:bg-foreground/5",
    chip: "bg-foreground text-background"
  }
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
  variant = "primary",
  arrow
}: ButtonProps) {
  const style = variants[variant];
  const showArrow = arrow ?? (variant !== "ghost");
  const classes = cn(
    "group relative inline-flex h-12 items-center justify-center gap-3 whitespace-nowrap rounded-full text-[0.95rem] font-medium tracking-[-0.01em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-55",
    showArrow ? "pl-6 pr-1.5" : "px-6",
    style.base,
    className
  );

  const handleClick = () => {
    if (!dataAnalytics) return;
    pushDataLayerEvent(analyticsEvents.ctaClick);
  };

  const inner = (
    <>
      {typeof children === "string" ? (
        <span className="roll" data-text={children}>
          <span>{children}</span>
        </span>
      ) : (
        <span className="inline-flex items-center gap-2">{children}</span>
      )}
      {showArrow ? (
        <span
          aria-hidden="true"
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full transition-colors duration-300",
            style.chip
          )}
        >
          <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:rotate-45" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} data-analytics={dataAnalytics} onClick={handleClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      data-analytics={dataAnalytics}
      form={form}
      onClick={(event) => {
        handleClick();
        onClick?.(event);
      }}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
