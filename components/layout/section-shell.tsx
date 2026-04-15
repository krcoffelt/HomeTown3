import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
}

export function SectionShell({
  children,
  className,
  containerClassName,
  as = "section"
}: SectionShellProps) {
  const Tag = as;

  return (
    <Tag className={cn("page-section", className)}>
      <div className={cn("site-container", containerClassName)}>{children}</div>
    </Tag>
  );
}
