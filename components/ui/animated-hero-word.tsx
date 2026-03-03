"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils/cn";

interface AnimatedHeroWordProps {
  words: string[];
  intervalMs?: number;
  transitionMs?: number;
  className?: string;
}

export function AnimatedHeroWord({
  words,
  intervalMs = 2200,
  transitionMs = 760,
  className
}: AnimatedHeroWordProps) {
  const normalizedWords = useMemo(
    () => words.map((word) => word.trim()).filter(Boolean),
    [words]
  );
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [rowHeightPx, setRowHeightPx] = useState<number>(0);
  const [minWordWidthPx, setMinWordWidthPx] = useState<number>(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const trackRef = useRef<HTMLSpanElement | null>(null);
  const longestWord = useMemo(
    () =>
      normalizedWords.reduce(
        (longest, current) => (current.length > longest.length ? current : longest),
        normalizedWords[0] ?? ""
      ),
    [normalizedWords]
  );
  const measurementWord = useMemo(() => {
    if (normalizedWords.length === 0) return "";
    return normalizedWords.find((word) => word.toLowerCase() === "strategic") ?? normalizedWords[0];
  }, [normalizedWords]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  const loopLength = normalizedWords.length;
  const wordsForTrack = useMemo(() => {
    if (normalizedWords.length === 0) return [];
    if (prefersReducedMotion || normalizedWords.length < 2) return [normalizedWords[0]];
    return [...normalizedWords, normalizedWords[0]];
  }, [normalizedWords, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || loopLength < 2) return;
    setIndex(0);
  }, [loopLength, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || loopLength < 2) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev >= loopLength ? prev : prev + 1));
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, loopLength, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || loopLength < 2 || index !== loopLength) return;

    const resetTimer = window.setTimeout(() => {
      setIsResetting(true);
      window.requestAnimationFrame(() => {
        setIndex(0);
        window.requestAnimationFrame(() => setIsResetting(false));
      });
    }, transitionMs);

    return () => window.clearTimeout(resetTimer);
  }, [index, loopLength, prefersReducedMotion, transitionMs]);

  useEffect(() => {
    if (!measurementWord) return;
    const node = measureRef.current;
    if (!node) return;

    const measure = () => {
      const heightSample = node.querySelector<HTMLElement>(".hero-word-roller-measure-height");
      const widthSamples = Array.from(
        node.querySelectorAll<HTMLElement>(".hero-word-roller-measure-width")
      );

      const intrinsicHeight = heightSample?.getBoundingClientRect().height ?? 0;
      if (intrinsicHeight > 0) {
        const nextHeight = Math.ceil(intrinsicHeight) + 6;
        setRowHeightPx((prev) => (prev === nextHeight ? prev : nextHeight));
      }

      let widest = 0;
      for (const sample of widthSamples) {
        widest = Math.max(widest, sample.getBoundingClientRect().width);
      }

      if (widest > 0) {
        const nextWidth = Math.ceil(widest) + 2;
        setMinWordWidthPx((prev) => (prev === nextWidth ? prev : nextWidth));
      }
    };

    measure();

    if (typeof document !== "undefined" && "fonts" in document) {
      void (document as Document & { fonts?: FontFaceSet }).fonts?.ready.then(measure);
    }

    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(node);
      return () => resizeObserver.disconnect();
    }

    window.addEventListener("resize", measure, { passive: true });
    return () => window.removeEventListener("resize", measure);
  }, [measurementWord, normalizedWords, prefersReducedMotion]);

  if (normalizedWords.length === 0) return null;

  const boundedIndex = Math.min(index, Math.max(0, wordsForTrack.length - 1));
  const accessibleWord = normalizedWords[0];
  const style = {
    "--hero-word-min-width": minWordWidthPx > 0 ? `${minWordWidthPx}px` : `${longestWord.length + 0.4}ch`,
    "--hero-word-row-height": rowHeightPx > 0 ? `${rowHeightPx}px` : "1em",
    "--hero-word-transition-ms": `${transitionMs}ms`,
    "--hero-word-offset-y": "2px"
  } as CSSProperties;

  return (
    <span className={cn("hero-word-roller", className)} style={style}>
      <span className="sr-only">{accessibleWord}</span>
      <span ref={measureRef} aria-hidden="true" className="hero-word-roller-measure">
        <span className="hero-word-roller-measure-height">{measurementWord}</span>
        <span className="hero-word-roller-measure-widths">
          {normalizedWords.map((word, wordIndex) => (
            <span key={`measure-${word}-${wordIndex}`} className="hero-word-roller-measure-width">
              {word}
            </span>
          ))}
        </span>
      </span>
      <span className="hero-word-roller-window" aria-hidden="true">
        <span
          ref={trackRef}
          className={cn("hero-word-roller-track", isResetting && "hero-word-roller-track-reset")}
          style={{
            transform: `translate3d(0, calc(var(--hero-word-offset-y, 0px) - ${boundedIndex} * var(--hero-word-row-height, 0.9em)), 0)`
          }}
        >
          {wordsForTrack.map((word, wordIndex) => (
            <span key={`${word}-${wordIndex}`} className="hero-word-roller-item">
              {word}
            </span>
          ))}
        </span>
      </span>
    </span>
  );
}
