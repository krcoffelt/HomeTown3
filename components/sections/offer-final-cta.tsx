import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { QuoteIcon } from "@/components/ui/site-icons";
import { testimonials } from "@/data/copy";

const anchorReview = testimonials.find((t) => t.featured) ?? testimonials[0];

export function OfferFinalCta() {
  return (
    <section
      id="claim-form"
      className="relative scroll-mt-24 overflow-hidden bg-[#0b0d10] py-20 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[-6rem] h-[24rem] w-[24rem] rounded-full bg-accent/18 blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-white/[0.04] blur-[160px]"
      />

      <div className="site-container relative px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
          <div className="min-w-0">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
              Claim the $800 build
            </p>
            <h2 className="mt-5 max-w-lg text-balance text-[2.2rem] font-bold leading-[1.02] tracking-tight sm:text-[2.9rem] md:text-[3.3rem]">
              Ready to make your business look established?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              $800 flat · about 7 business days · no contracts. Send the details and we&apos;ll reply within 24 hours.
            </p>

            <figure className="mt-10 max-w-md rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/18 text-accent">
                  <QuoteIcon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-0.5 text-sm text-[#efb11d]">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <blockquote className="mt-3 text-sm font-semibold leading-snug text-white">
                    &ldquo;{anchorReview.highlight}&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/55">
                    {anchorReview.name} · Google review
                  </figcaption>
                </div>
              </div>
            </figure>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white/65">
              <span>50+ KC projects</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/35" />
              <span>5.0 Google reviews</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-white/35" />
              <span>No contracts</span>
            </div>
          </div>

          <div>
            <OfferLeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
