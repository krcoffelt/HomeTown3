"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="grid gap-3 md:gap-4">
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-[26px] border transition-all duration-300",
              isActive
                ? "border-white/25 bg-white text-black shadow-soft"
                : "border-line bg-surface text-ink hover:border-white/28"
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-8 md:py-7"
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              aria-expanded={isActive}
            >
              <span className="flex items-start gap-4">
                <span className={cn("section-eyebrow mt-1", isActive ? "text-black/50" : "text-muted")}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-xl font-medium leading-tight tracking-tight md:text-[2rem] md:leading-[1.05]",
                    isActive ? "text-black" : "text-ink"
                  )}
                >
                  {item.question}
                </span>
              </span>
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border text-2xl transition-all duration-300",
                  isActive
                    ? "border-black/20 bg-black/[0.04] text-black"
                    : "border-line bg-white/[0.02] text-muted"
                )}
              >
                {isActive ? "-" : "+"}
              </span>
            </button>
            <p
              className={cn(
                "overflow-hidden px-5 text-lg leading-relaxed transition-all duration-300 md:px-8",
                isActive
                  ? "max-h-72 border-t border-black/10 py-5 opacity-100 text-black/75 md:py-6"
                  : "max-h-0 py-0 opacity-0 text-muted"
              )}
            >
              {item.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
}
