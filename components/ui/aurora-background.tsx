"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(58,101,235,0.35),transparent_45%),radial-gradient(circle_at_82%_10%,rgba(136,164,255,0.28),transparent_44%),radial-gradient(circle_at_52%_78%,rgba(35,86,233,0.24),transparent_52%),linear-gradient(180deg,#071025_0%,#05070b_100%)]" />
      <div className="absolute -left-24 top-[-18%] h-[24rem] w-[24rem] rounded-full bg-[#4f73f0]/20 blur-3xl animate-[aurora-float-1_13s_ease-in-out_infinite]" />
      <div className="absolute -right-24 top-[8%] h-[28rem] w-[28rem] rounded-full bg-[#8cadff]/16 blur-3xl animate-[aurora-float-2_16s_ease-in-out_infinite]" />
      <div className="absolute left-[30%] top-[42%] h-[22rem] w-[22rem] rounded-full bg-[#315fdf]/14 blur-3xl animate-[aurora-float-3_15s_ease-in-out_infinite]" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
