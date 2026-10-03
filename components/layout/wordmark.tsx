import { cn } from "@/lib/utils/cn";

/** Live-type version of the HOMEtown wordmark: heavy grotesk + italic serif. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline leading-none", className)} aria-label="Hometown">
      <span aria-hidden="true" className="font-display font-extrabold tracking-[-0.06em]">
        HOME
      </span>
      <span aria-hidden="true" className="font-serif text-[1.12em] italic tracking-[-0.03em]">
        town
      </span>
    </span>
  );
}
