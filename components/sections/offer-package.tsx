import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const notIncluded = [
  "Hosting & domain (we help connect yours)",
  "Copywriting beyond your intake",
  "Ongoing content updates after launch",
  "Custom illustration or photography",
  "E-commerce or booking systems"
];

export function OfferPackage() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-accent/6 blur-[160px]"
      />

      <div className="site-container relative px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-badge">What You Get for $800</p>
            <h2 className="mt-5 text-[2.1rem] font-bold leading-[1.02] tracking-tight text-foreground sm:text-[2.9rem] md:text-[3.25rem]">
              The full $800 package, no line-item surprises.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/68 sm:text-lg">
              One flat rate. One build. Everything below is included.
            </p>
          </div>

          <article className="relative mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.1)]">
            <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
              <div className="relative flex flex-col justify-between bg-[#0b0d10] p-8 text-white sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-accent/25 blur-[90px]"
                />
                <div className="relative">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-accent">
                    Custom Website · Flat Rate
                  </p>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="text-[4.2rem] font-bold leading-none tracking-tight sm:text-[5rem]">
                      $800
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      one-time
                    </span>
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/62">
                    Delivered in about 7 business days
                  </p>

                  <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50">
                        Revisions
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/82">
                        2 rounds of revisions included so the final site feels right.
                      </p>
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/50">
                        Best for
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-white/82">
                        Kansas City small businesses that want a credible site without a bloated agency project.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-10">
                  <Button
                    href="#claim-form"
                    className="h-12 w-full rounded-full px-6 sm:px-8"
                    dataAnalytics="cta-offer-800-package"
                  >
                    Get My Website Quote
                  </Button>
                  <p className="mt-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Reply within 24 hours · No contracts
                  </p>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
                  What&apos;s included
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {homepageCopy.pricingFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <CheckCircleIcon className="h-4 w-4" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/82">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-2xl bg-[#f4f6fa] p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-foreground/55">
                    What&apos;s not included
                  </p>
                  <ul className="mt-4 grid gap-2.5">
                    {notIncluded.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-foreground/70"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1 w-3 shrink-0 rounded-full bg-foreground/30"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
