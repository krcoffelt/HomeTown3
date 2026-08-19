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
    <SectionShell className="paper-texture bg-secondary">
      <SectionHeading
        badge={homepageCopy.whyHometown.badge}
        title={homepageCopy.whyHometown.title}
        subtitle={homepageCopy.whyHometown.intro}
        centered={false}
        className="max-w-3xl"
      />
      <div className="grid overflow-hidden rounded-2xl border-2 border-foreground bg-background shadow-hero lg:grid-cols-[0.86fr_1.14fr]">
        {cards.map((card, index) => {
          const Icon = card.icon;

          if (card.featured) {
            return (
              <Reveal key={card.title} className="h-full lg:row-span-3">
                <article className="flex h-full min-h-[23rem] flex-col bg-accent p-8 text-accent-foreground md:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-foreground bg-accent-foreground/10">
                    <Icon />
                  </div>
                  <h3 className="mt-8 text-3xl font-extrabold tracking-tight">{card.title}</h3>
                  <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-accent-foreground/88">{card.body}</p>
                  <p className="mt-auto pt-10 text-sm font-extrabold uppercase tracking-[0.14em]">Talk directly with Kyle · (913) 991-6641</p>
                </article>
              </Reveal>
            );
          }

          return (
            <Reveal
              key={card.title}
              delay={index * 0.08}
              className="border-t-2 border-foreground first:border-t-0 lg:col-start-2 lg:border-l-2 lg:first:border-t-0"
            >
              <article className="group grid h-full gap-5 p-7 transition-colors hover:bg-secondary sm:grid-cols-[3rem_1fr] md:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground bg-background text-accent transition-transform group-hover:-rotate-6">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{card.body}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
