import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Marquee } from "@/components/ui/marquee";
import { ClockIcon, ThumbsUpIcon, UsersIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const statIcons = [ClockIcon, UsersIcon, ThumbsUpIcon];

export function SocialProofStrip() {
  return (
    <>
      <section className="bg-accent py-5 text-accent-foreground">
        <Marquee speed={40}>
          {homepageCopy.marqueeReviews.map((review) => (
            <div key={review} className="flex items-center gap-8 text-sm font-medium italic">
              <span>{review}</span>
              <span>•</span>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="page-section-tight bg-background">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-3">
            {homepageCopy.stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div key={stat.label} className="flex flex-col items-center justify-center px-6 text-center md:border-r md:border-border last:md:border-r-0">
                  <Icon className="h-6 w-6 text-accent" />
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} className="mt-5" />
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
