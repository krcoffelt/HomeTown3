import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";

const stats = [
  { value: 139, prefix: "", suffix: "", decimals: 0, label: "Form leads in one month — up from zero", client: "Wrapped Up Moving" },
  { value: 12.7, prefix: "", suffix: "×", decimals: 1, label: "Blended return on Google & Meta ad spend", client: "Wrapped Up Moving" },
  { value: 65, prefix: "+", suffix: "%", decimals: 0, label: "More quote requests in the first month", client: "Noble Hardwoods" },
  { value: 11.2, prefix: "", suffix: "%", decimals: 1, label: "Mobile reservation conversion, from 2.7%", client: "Plate KC" }
];

export function ProofBand() {
  return (
    <section aria-labelledby="proof-heading" className="bg-background pt-24 md:pt-32">
      <div className="site-container">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="eyebrow md:col-span-4">Proof, not promises</p>
          <Reveal className="md:col-span-8">
            <h2 id="proof-heading" className="max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] md:text-[2.75rem]">
              We measure marketing by the calls, forms, and booked jobs it creates.{" "}
              <span className="text-muted-foreground">Here&apos;s what that looked like for a few Kansas City clients.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-y border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.08}
              className="bg-background py-10 sm:px-8 sm:first:pl-0 lg:[&:nth-child(3)]:pl-8 sm:[&:nth-child(3)]:pl-0"
            >
              <p className="mono-label text-muted-foreground">{stat.client}</p>
              <p className="mt-6 font-display text-[clamp(3.5rem,6.4vw,6rem)] font-semibold leading-none tracking-[-0.06em]">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="mt-4 max-w-[16rem] text-base leading-snug text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16 border-y border-foreground/12 py-7 md:mt-24 md:py-9" aria-label="Clients">
        <Marquee speed={45} gapClassName="gap-10 md:gap-14">
          {projects.map((project, index) => (
            <span key={project.slug} className="flex items-center gap-10 whitespace-nowrap md:gap-14">
              <span
                className={
                  index % 2
                    ? "font-serif text-4xl italic tracking-[-0.02em] md:text-6xl"
                    : "font-display text-4xl font-semibold tracking-[-0.05em] md:text-6xl"
                }
              >
                {project.clientName}
              </span>
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
