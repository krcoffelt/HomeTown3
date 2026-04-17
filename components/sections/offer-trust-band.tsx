import { testimonials } from "@/data/copy";

const metrics = [
  { value: "50+", label: "KC projects delivered" },
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
                className="flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-[#f7f5f0] p-5"
              >
                <div>
                  <div className="flex items-center gap-0.5 text-sm text-[#efb11d]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <blockquote className="mt-3 text-sm font-semibold leading-snug text-foreground">
                    &ldquo;{review.highlight}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-foreground/55">
                  {review.name} · Google review
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
