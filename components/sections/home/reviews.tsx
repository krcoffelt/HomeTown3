import { Marquee } from "@/components/ui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { StarIcon } from "@/components/ui/site-icons";
import { testimonials } from "@/data/copy";
import { site } from "@/data/site";

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <figure className="flex w-[20rem] shrink-0 flex-col rounded-[1.25rem] bg-card p-6 md:w-[24rem] md:p-7">
      <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-5 line-clamp-5 flex-1 text-[1.02rem] leading-relaxed">“{text}”</blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-5 text-sm">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-semibold text-primary-foreground">
          {name.charAt(0)}
        </span>
        <span>
          <span className="block font-medium">{name}</span>
          <span className="text-muted-foreground">Google review</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const featured = testimonials.find((item) => item.featured) ?? testimonials[0];
  const rest = testimonials.filter((item) => item !== featured);
  const half = Math.ceil(rest.length / 2);

  return (
    <section aria-labelledby="reviews-heading" className="overflow-hidden bg-secondary py-24 md:py-36">
      <div className="site-container">
        <div className="flex items-center justify-between gap-6">
          <p id="reviews-heading" className="eyebrow">Kind words</p>
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="mono-label link-underline text-muted-foreground hover:text-foreground"
          >
            5.0 on Google ↗
          </a>
        </div>
        <Reveal>
          <figure className="mt-12 md:mt-16">
            <blockquote className="max-w-6xl font-display text-[clamp(2rem,4.6vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.045em]">
              “I&apos;ve had websites built before, but Kyle made all of them{" "}
              <span className="serif-accent text-accent">look like a joke.</span> Great creative, even better person.”
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-semibold text-primary-foreground">
                {featured.name.charAt(0)}
              </span>
              <span>
                <span className="block font-medium">{featured.name}</span>
                <span className="text-sm text-muted-foreground">Google review</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 md:mt-28 md:gap-5">
        <Marquee speed={70} align="stretch" gapClassName="gap-4 md:gap-5">
          {rest.slice(0, half).map((item) => (
            <ReviewCard key={item.name} name={item.name} text={item.text} />
          ))}
        </Marquee>
        <Marquee speed={80} reverse align="stretch" gapClassName="gap-4 md:gap-5">
          {rest.slice(half).map((item) => (
            <ReviewCard key={item.name} name={item.name} text={item.text} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
