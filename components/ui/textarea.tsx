import { cn } from "@/lib/utils/cn";
import type { TextareaHTMLAttributes } from "react";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-[152px] w-full rounded-2xl border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        props.className
      )}
    />
  );
}
