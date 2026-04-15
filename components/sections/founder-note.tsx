import { homepageCopy } from "@/data/copy";

export function FounderNote() {
  return (
    <div className="bg-gradient-dark rounded-2xl border border-primary-foreground/12 p-6 text-primary-foreground shadow-hero">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Founder Note</p>
      <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">{homepageCopy.founderNote}</p>
    </div>
  );
}
