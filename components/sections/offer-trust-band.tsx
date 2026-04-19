import { testimonials } from "@/data/copy";

const metrics = [
  { value: "23+", label: "Projects delivered" },
  { value: "5.0", label: "Google review rating" },
  { value: "~7", label: "Business days to launch" },
  { value: "0", label: "Contracts. Ever." }
];

const trustReviews = testimonials.slice(0, 3);

export function OfferTrustBand() {
  return (
    <section className="border-y border-black/5 bg-white py-10 md:py-14">
      <div className="site-container px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="h-px flex-1 bg-foreground/10" />
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-foreground/55">
              Trusted by Kansas City small businesses
            </p>
            <span aria-hidden="true" className="h-px flex-1 bg-foreground/10" />
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col items-center text-center">
                <dt className="order-2 mt-2 max-w-[10rem] text-xs font-semibold uppercase tracking-[0.16em] text-foreground/60">
                  {metric.label}
                </dt>
                <dd className="order-1 text-[2.75rem] font-bold leading-none tracking-tight text-foreground sm:text-[3.25rem]">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {trustReviews.map((review) => (
              <figure
                key={review.name}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/10 blur-2xl"
                />
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-0.5 text-[0.95rem] text-[#efb11d]">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-display text-[2.4rem] leading-none tracking-[-0.08em] text-accent/55"
                    >
                      ”
                    </span>
                  </div>
                  <blockquote className="mt-4 text-[1rem] font-semibold leading-[1.5] tracking-[-0.01em] text-foreground sm:text-[1.05rem]">
                    &ldquo;{review.highlight}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 border-t border-black/6 pt-4">
                  <p className="text-sm font-bold tracking-tight text-foreground">{review.name}</p>
                  <p className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-foreground/50">
                    Google review
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
