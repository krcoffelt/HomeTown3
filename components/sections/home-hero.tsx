import Image from "next/image";
import { Button } from "@/components/ui/button";
import { homepageCopy } from "@/data/copy";

export function HomeHero() {
  return (
    <section className="paper-texture relative min-h-[100svh] overflow-hidden bg-background text-foreground">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/brand-art/neighborhood-commerce.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="artwork-drift origin-bottom scale-[1.32] object-contain object-bottom md:scale-100 md:object-cover md:object-center"
        />
        <span className="absolute inset-x-0 top-0 h-[62%] bg-gradient-to-b from-background/45 via-background/20 to-transparent" />
      </div>

      <div className="site-container relative z-10 flex min-h-[100svh] items-center justify-center pb-32 pt-24 sm:pb-40 md:pb-44 md:pt-36">
        <div className="mx-auto max-w-5xl -translate-y-8 text-center md:-translate-y-14 lg:-translate-y-20 xl:-translate-y-24">
          <h1 className="hero-title hero-rise mx-auto max-w-5xl text-balance">
            <span className="block">{homepageCopy.heroTitleLineOne}</span>
            <span className="block pb-[0.08em] text-accent">{homepageCopy.heroTitleLineTwo}</span>
          </h1>

          <p className="hero-rise hero-rise-delay-1 mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-foreground/75 sm:text-lg md:text-xl">
            {homepageCopy.heroSubtitle}
          </p>

          <div className="hero-rise hero-rise-delay-2 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#form" className="h-14 w-full px-8 sm:w-auto">Get a Free Marketing Audit</Button>
            <Button href="/work" variant="secondary" className="h-14 w-full border-2 border-foreground bg-background/85 px-8 shadow-[3px_3px_0_hsl(var(--foreground))] hover:shadow-none sm:w-auto">
              See Real Work
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
