import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:-translate-y-0.5 hover:bg-[#3d67e4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  secondary:
    "border border-line bg-transparent text-ink hover:border-white/40 hover:bg-white/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  ghost: "text-ink hover:bg-white/6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
};

export function Button({
  children,
  className,
  href,
  type = "button",
  variant = "primary"
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-[0.98rem] font-medium tracking-[-0.01em] transition duration-300",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
