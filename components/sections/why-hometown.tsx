import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlobeIcon, MessageCircleIcon, TargetIcon, ZapIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const cards = [
  {
    title: "Real Data",
    body: "We connect marketing activity to calls, forms, bookings, qualified leads, and the revenue signals your business can act on.",
    icon: MessageCircleIcon,
    featured: true
  },
  {
    title: "Real Rankings",
    body: "We show where you rank, which searches create qualified visibility, and where the next organic opportunity lives.",
    icon: GlobeIcon
  },
  {
    title: "Real Results",
    body: "Websites and campaigns are built around customer actions and improved with evidence—not applause for impressions or reach.",
    icon: TargetIcon
  },
  {
    title: "Small-Business Clarity",
    body: "You work directly with the person doing the work and get a focused explanation of what is working, what is not, and what comes next.",
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
              className={card.featured ? "row-span-2" : card.title === "Small-Business Clarity" ? "md:col-span-2" : ""}
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
