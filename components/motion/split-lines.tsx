import { cn } from "@/lib/utils/cn";
import type { CSSProperties, ElementType, ReactNode } from "react";

interface SplitLinesProps {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  /** "load" animates immediately (above the fold); "scroll" waits until in view */
  trigger?: "load" | "scroll";
  delayMs?: number;
  id?: string;
}

/**
 * Masked line-by-line headline reveal. Lines are authored explicitly so the
 * markup is fully server-rendered and readable without JavaScript.
 */
export function SplitLines({ lines, as: Tag = "h2", className, lineClassName, trigger = "scroll", delayMs = 0, id }: SplitLinesProps) {
  return (
    <Tag
      id={id}
      className={cn(trigger === "load" && "animate-lines", className)}
      data-reveal={trigger === "scroll" ? "lines" : undefined}
      style={{ "--line-delay": `${delayMs}ms` } as CSSProperties}
    >
      {lines.map((line, index) => (
        <span key={index} className={cn("line-mask", lineClassName)}>
          <span style={{ "--line-index": index } as CSSProperties}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}
