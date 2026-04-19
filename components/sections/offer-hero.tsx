import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPinIcon } from "@/components/ui/site-icons";

const proofItems = [
  "23+ projects",
  "5.0 ★ Google",
  "No contracts",
  "2 revision rounds"
];

export function OfferHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5f7fb] pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground) / 0.04) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground) / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px"
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[min(90vw,42rem)] w-[min(90vw,42rem)] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/[0.12] blur-[120px]"
      />

      <div className="site-container relative px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.88fr)] lg:gap-16">
          <div className="min-w-0 lg:pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-white/90 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground/70 shadow-sm backdrop-blur-sm">
              <MapPinIcon className="h-3.5 w-3.5 text-accent" />
              <span className="text-foreground/55">Kansas City</span>
            </div>

            <h1 className="mt-7 max-w-[10ch] font-display text-[2.15rem] font-bold leading-[0.92] tracking-[-0.04em] text-foreground sm:text-[3rem] md:max-w-[11ch] md:text-[3.8rem] lg:text-[4.2rem]">
              <span className="block">Make your business</span>
              <span className="mt-1 block">look credible online.</span>
            </h1>

            <p className="mt-3 text-base font-bold tracking-tight text-accent sm:text-lg md:text-[1.3rem]">
              <span>$800</span>
              <span className="px-2 text-accent/45">·</span>
              <span>About 7 business days</span>
              <span className="px-2 text-accent/45">·</span>
              <span>Built for you</span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/72 sm:text-[1.05rem]">
              Custom site, not a drag-and-drop template. Contact form wired, basic SEO and Google Analytics set up, two revision rounds.{" "}
              <strong className="font-semibold text-foreground">You work directly with Kyle from Hometown through the whole build.</strong>
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="#claim-form"
                className="w-full px-8 sm:w-auto"
                dataAnalytics="cta-offer-800"
              >
                Get My Website Quote
              </Button>
              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-1.5 text-sm font-bold tracking-[0.02em] text-foreground underline decoration-foreground/25 decoration-2 underline-offset-[0.35em] transition hover:decoration-foreground/50 sm:justify-start"
                data-analytics="cta-offer-view-work"
              >
                See live KC sites we built
                <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>

            <ul
              aria-label="Offer highlights"
              className="mt-10 grid max-w-md grid-cols-2 gap-x-5 gap-y-2.5 border-t border-foreground/10 pt-8 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-foreground/55 sm:mt-12 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:gap-y-2 sm:border-t-0 sm:pt-0"
            >
              {proofItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center sm:border-l sm:border-foreground/15 sm:px-4 sm:first:border-l-0 sm:first:pl-0"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl border border-accent/40 bg-accent/10 lg:block"
            />
            <figure className="relative">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-foreground shadow-[0_32px_80px_-12px_rgba(15,23,42,0.45)] ring-1 ring-white/60 sm:rounded-[2rem] lg:rotate-[1.5deg] lg:rounded-[2.25rem]">
                <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[0.82/1]">
                  <Image
                    src="/images/kyle.remini-enhanced.jpg"
                    alt="Kyle Coffelt, founder of Hometown Marketing Agency"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-[center_12%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55">
                      Your builder, not a sales deck
                    </p>
                    <p className="mt-2 text-lg font-bold tracking-tight sm:text-xl">Kyle Coffelt</p>
                    <p className="mt-0.5 text-sm text-white/75">Founder, Hometown Marketing Agency</p>
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
