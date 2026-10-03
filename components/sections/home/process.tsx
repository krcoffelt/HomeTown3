import { SplitLines } from "@/components/motion/split-lines";
import { Reveal } from "@/components/ui/reveal";
import { homepageSteps } from "@/data/copy";

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-background py-24 md:py-36">
      <div className="site-container">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">How it works</p>
          <div className="md:col-span-8">
            <SplitLines
              id="process-heading"
              lines={[
                "From guesswork to",
                <>
                  a <span className="serif-accent">growth plan.</span>
                </>
              ]}
              className="display-md"
            />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Start with a free audit, focus on the biggest opportunity, and measure the actions that actually matter.
            </p>
          </div>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-foreground/10 md:mt-24 md:grid-cols-3">
          {homepageSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 0.1} className="group relative flex min-h-[22rem] flex-col bg-card p-7 md:p-9">
              <h3 className="mt-auto text-2xl font-semibold tracking-[-0.035em] md:text-[1.75rem]">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
