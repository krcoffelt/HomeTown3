import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MapPinIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

export function HomeHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg-desktop.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.75)_50%,rgba(0,0,0,0.6)_100%)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4rem] top-[12rem] hidden h-[500px] w-[500px] rounded-full bg-primary/8 opacity-70 blur-[150px] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-[8rem] hidden h-[400px] w-[400px] rounded-full bg-primary-glow/6 opacity-55 blur-[120px] md:block"
      />

      <div className="site-container relative z-10 flex min-h-[92vh] items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
            <MapPinIcon className="h-4 w-4" />
            {homepageCopy.heroBadge}
          </div>

          <h1 className="hero-title mt-8 max-w-6xl">
            <span className="block">{homepageCopy.heroTitleLineOne} </span>
            <span className="block pb-[0.08em] gradient-text">{homepageCopy.heroTitleLineTwo}</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/82 md:text-xl">
            {homepageCopy.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#form" className="h-14 px-8">Get a Website Quote</Button>
            <Button href="/work" variant="secondary" className="h-14 px-8 border-primary-foreground/20 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/8">
              See Our Work
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {homepageCopy.trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-primary-foreground/82">
                <CheckCircleIcon className="h-4 w-4 text-accent" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
