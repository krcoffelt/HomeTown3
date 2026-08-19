import Image from "next/image";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageCopy, homepageSteps } from "@/data/copy";

export function HomeSteps() {
  return (
    <SectionShell className="paper-texture bg-background">
      <SectionHeading
        badge={homepageCopy.howItWorks.badge}
        title={homepageCopy.howItWorks.title}
        subtitle={homepageCopy.howItWorks.subtitle}
      />
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-14">
        <Reveal className="relative min-h-[22rem] overflow-hidden rounded-2xl border-2 border-foreground bg-background shadow-hero sm:min-h-[28rem]">
          <Image
            src="/images/brand-art/strategy-audit.png"
            alt="Illustrated marketing audit with a dashboard, compass, map, and target"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </Reveal>
        <div className="border-y-2 border-foreground">
          {homepageSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08} className="border-b-2 border-foreground/20 last:border-b-0">
              <article className="grid gap-4 py-7 sm:grid-cols-[4.5rem_1fr] sm:py-8">
                <p className="text-5xl font-extrabold leading-none text-accent">{step.step}</p>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{step.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
