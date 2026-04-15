import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { homepageCopy, homepageSteps } from "@/data/copy";

export function HomeSteps() {
  return (
    <SectionShell className="bg-background">
      <SectionHeading
        badge={homepageCopy.howItWorks.badge}
        title={homepageCopy.howItWorks.title}
        subtitle={homepageCopy.howItWorks.subtitle}
      />
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
        {homepageSteps.map((step, index) => (
          <Reveal key={step.step} delay={index * 0.08}>
            <article className="light-panel h-full p-7">
              <p className="text-7xl font-bold leading-none text-accent/20">{step.step}</p>
              <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
