import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Marquee } from "@/components/ui/marquee";
import { CheckCircleIcon, ClockIcon, ThumbsUpIcon, UsersIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const statIcons = [ClockIcon, UsersIcon, ThumbsUpIcon];

export function SocialProofStrip() {
  return (
    <>
      <section aria-label="Hometown service commitments" className="paper-texture border-y-2 border-foreground bg-background">
        <div className="site-container grid sm:grid-cols-3">
          {homepageCopy.trustSignals.map((signal) => (
            <div
              key={signal}
              className="flex items-center justify-center gap-2 border-b-2 border-foreground/15 px-4 py-4 text-center text-xs font-extrabold text-foreground last:border-b-0 sm:border-b-0 sm:border-r-2 sm:last:border-r-0 md:py-5 md:text-sm"
            >
              <CheckCircleIcon className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{signal}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-foreground bg-foreground py-4 text-primary-foreground">
        <Marquee speed={40}>
          {homepageCopy.marqueeReviews.map((review) => (
            <div key={review} className="flex items-center gap-8 text-sm font-bold italic">
              <span>{review}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </Marquee>
      </section>

      <section className="paper-texture border-b-2 border-foreground/90 bg-background">
        <div className="site-container">
          <div className="grid md:grid-cols-3">
            {homepageCopy.stats.map((stat, index) => {
              const Icon = statIcons[index];
              return (
                <div key={stat.label} className="flex flex-col items-center justify-center border-b-2 border-foreground/15 px-6 py-8 text-center last:border-b-0 md:border-b-0 md:border-r-2 md:py-10 last:md:border-r-0">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
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
