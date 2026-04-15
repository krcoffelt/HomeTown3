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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const active = index === activeIndex;

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-300",
              active ? "border-foreground bg-foreground text-primary-foreground" : "border-border bg-card text-foreground"
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-8 md:py-7"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-expanded={active}
            >
              <span className="text-lg font-bold leading-tight md:text-2xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border text-2xl transition",
                  active ? "border-primary-foreground/20 bg-primary-foreground/10" : "border-border bg-secondary"
                )}
              >
                {active ? "−" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                active ? "grid-rows-[1fr] border-t border-primary-foreground/10" : "grid-rows-[0fr]"
              )}
            >
              <p className={cn("overflow-hidden px-5 py-0 text-base leading-relaxed md:px-8", active ? "py-5 text-primary-foreground/75 md:py-6" : "")}>
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
