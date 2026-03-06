import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedHeroWord } from "@/components/ui/animated-hero-word";
import { SectionShell } from "@/components/layout/section-shell";
import { homepageCopy } from "@/data/copy";

const rotatingHeroWords = [
  "Affordable",
  "Custom",
  "Premium",
  "Strategic",
  "Local"
];

export function HomeHero() {
  return (
    <SectionShell className="relative overflow-hidden pb-8 pt-16 md:pb-12 md:pt-20">
      <div className="relative z-10">
        <div className="max-w-5xl">
          <Badge className="mb-6 border-white/20 bg-transparent text-white">
            {homepageCopy.trustLabel}
          </Badge>
          <h1 className="max-w-5xl text-balance text-[clamp(2.8rem,9.6vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-white">
            <span className="block lg:whitespace-nowrap">
              <AnimatedHeroWord words={rotatingHeroWords} className="text-[#305cde]" />
            </span>
            <span className="block lg:whitespace-nowrap">websites for</span>
            <span className="block lg:whitespace-nowrap">local businesses</span>
          </h1>
          <p className="mt-7 whitespace-nowrap text-lg leading-relaxed text-white">
            {homepageCopy.heroSubtitle}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button href="/contact#form" className="bg-accent text-white md:px-8 md:py-4 md:text-[1.08rem]">
              Get Started
            </Button>
            <p className="section-eyebrow text-white md:text-[0.9rem]">NOW ONLY $800</p>
          </div>
        </div>
        <div className="hero-reveal hero-reveal-delay mt-12 section-frame">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            <div className="rounded-2xl border border-[#5e81f5] bg-[#305cde] px-5 py-5">
              <p className="section-eyebrow !text-[0.84rem] !font-bold !text-white">What&apos;s Included</p>
              <p className="mt-3 text-lg !text-white">
                Custom design, mobile optimization, and lead form setup.
              </p>
            </div>
            <div className="rounded-2xl border border-[#5e81f5] bg-[#305cde] px-5 py-5">
              <p className="section-eyebrow !text-[0.84rem] !font-bold !text-white">What&apos;s Not</p>
              <p className="mt-3 text-lg !text-white">
                Paid ads management or long-term SEO retainers.
              </p>
            </div>
            <div className="rounded-2xl border border-[#5e81f5] bg-[#305cde] px-5 py-5">
              <p className="section-eyebrow !text-[0.84rem] !font-bold !text-white">Turnaround</p>
              <p className="mt-3 text-lg !text-white">
                Most projects launch in about 7 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
