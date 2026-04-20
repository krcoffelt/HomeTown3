import Image from "next/image";
import { homepageCopy } from "@/data/copy";

export function FounderNote() {
  return (
    <div className="overflow-hidden rounded-2xl border border-primary-foreground/12 bg-gradient-dark text-primary-foreground shadow-hero">
      <div className="relative aspect-[4/4.5] w-full overflow-hidden border-b border-primary-foreground/12">
        <Image
          src="/images/kyle.remini-enhanced.jpg"
          alt="Kyle Coffelt, founder of Hometown Marketing Agency"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-top"
          priority={false}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Founder Note</p>
        <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">{homepageCopy.founderNote}</p>
      </div>
    </div>
  );
}
