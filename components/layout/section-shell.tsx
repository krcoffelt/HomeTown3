import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionShell({
  children,
  className,
  containerClassName
}: SectionShellProps) {
  return (
    <section className={cn("px-5 py-16 md:px-8 md:py-24", className)}>
      <div className={cn("mx-auto w-full max-w-shell", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

