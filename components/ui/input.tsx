import { cn } from "@/lib/utils/cn";
import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "h-14 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        props.className
      )}
    />
  );
}
