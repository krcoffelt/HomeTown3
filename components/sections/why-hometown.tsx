import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlobeIcon, MessageCircleIcon, TargetIcon, ZapIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const cards = [
  {
    title: "Direct Communication",
    body: "You work directly with the person doing the work, not an account manager buffering every decision.",
    icon: MessageCircleIcon,
    featured: true
  },
  {
    title: "Website-First Approach",
    body: "Your site becomes the anchor that connects brand, ads, and organic traffic into one cleaner funnel.",
    icon: GlobeIcon
  },
  {
    title: "Conversion-Focused",
    body: "Every page and campaign is built around getting calls, forms, and real customer actions.",
    icon: TargetIcon
  },
  {
    title: "KC Local Context",
    body: "We know how Kansas City small businesses need to communicate to feel real, credible, and local.",
    icon: ZapIcon
  }
];

export function WhyHometown() {
  return (
    <SectionShell className="noise bg-gradient-subtle">
      <SectionHeading
        badge={homepageCopy.whyHometown.badge}
        title={homepageCopy.whyHometown.title}
        subtitle={homepageCopy.whyHometown.intro}
      />
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className={card.featured ? "row-span-2" : card.title === "KC Local Context" ? "md:col-span-2" : ""}
            >
              <article
                className={
                  card.featured
                    ? "flex h-full flex-col rounded-2xl bg-accent p-8 text-accent-foreground shadow-elevated"
                    : "light-panel flex h-full flex-col p-7 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                }
              >
                <div className={card.featured ? "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-foreground/12" : "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent"}>
                  <Icon />
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{card.title}</h3>
                <p className={card.featured ? "mt-4 text-base leading-relaxed text-accent-foreground/88" : "mt-4 text-base leading-relaxed text-muted-foreground"}>
                  {card.body}
                </p>
                {card.featured ? <p className="mt-auto pt-8 text-sm font-bold">(913) 991-6641</p> : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
