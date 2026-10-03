"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface ScrollWordsProps {
  text: string;
  /** Words (exact match, punctuation stripped) rendered in the italic serif */
  accentWords?: string[];
  className?: string;
}

/**
 * Paragraph whose words brighten one by one as it scrolls through the viewport.
 */
export function ScrollWords({ text, accentWords = [], className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");
  const accents = new Set(accentWords.map((word) => word.toLowerCase()));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-word]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((span) => (span.style.opacity = "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.35)));
      const lit = progress * spans.length;
      spans.forEach((span, index) => {
        const amount = Math.min(1, Math.max(0, lit - index));
        span.style.opacity = String(0.16 + amount * 0.84);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, index) => {
        const bare = word.replace(/[^\p{L}\p{N}'’-]/gu, "").toLowerCase();
        return (
          <span key={index}>
            <span data-word className={cn("transition-opacity duration-150", accents.has(bare) && "serif-accent")}>
              {word}
            </span>{" "}
          </span>
        );
      })}
    </p>
  );
}
