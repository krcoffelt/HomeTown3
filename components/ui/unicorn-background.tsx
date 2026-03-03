import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface UnicornBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function UnicornBackground({ children, className }: UnicornBackgroundProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/Screenshot%202026-03-03%20at%2011.00.02%E2%80%AFAM.png')"
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_72%,rgba(8,19,50,0.38),transparent_38%),linear-gradient(180deg,rgba(3,6,12,0.62)_0%,rgba(3,6,12,0.78)_100%)]" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
