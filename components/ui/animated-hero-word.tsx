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
  const normalizedWords = words.map((word) => word.trim()).filter(Boolean);
  if (normalizedWords.length === 0) return null;

  void intervalMs;
  void transitionMs;

  return <span className={cn("inline-block whitespace-nowrap", className)}>{normalizedWords[0]}</span>;
}
