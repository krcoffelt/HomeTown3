import type { Metadata } from "next";
import Image from "next/image";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";

const testimonials = [
  {
    name: "Cathy Gorman",
    ratingLabel: "5-star review",
    quote:
      "I highly recommend working with Kyle Coffelt with Hometown Marketing. From start to finish, the experience was outstanding. Kyle was incredibly punctual, responsive, and organized throughout the entire process, which made everything run smoothly and stress-free.",
    continuation:
      "What truly stood out was his creativity and how he was able to understand what we were looking for. Kyle brought fresh ideas to the table and had a great ability to turn concepts into effective marketing strategies. His attention to detail and willingness to go above and beyond made a huge difference in the final result.",
    close:
      "It is rare to find someone who combines reliability and genuine creativity the way he did. I would absolutely recommend Hometown Marketing to anyone looking for high-quality marketing support."
  },
  {
    name: "Chris Kidd",
    ratingLabel: "5-star review",
    quote:
      "Kyle built a website for my business and absolutely nailed it. Not only did he deliver it incredibly fast, but the final result looked clean, modern, and professional.",
    continuation:
      "He was also extremely patient with all the revisions and tweaks I asked for along the way. The whole process was smooth from start to finish, and I could not be happier with how everything turned out."
  }
];

const featuredProjects = projects.slice(0, 3);
const reviewRail = [
  {
    name: "Cathy Gorman",
    detail: "Punctual, organized, creative, and easy to work with."
  },
  {
    name: "Chris Kidd",
    detail: "Fast delivery, clean design, patient revisions, smooth process."
  },
  {
    name: "Live Client Work",
    detail: "Recent projects available to review before you submit."
  }
];

export const metadata: Metadata = {
  ...createPageMetadata(
    "Kansas City Website Offer | Now Only $800",
    "Limited-time $800 custom website offer for Kansas City service businesses.",
    "/website-offer-800",
    site.brand.shortName
  ),
  robots: {
    index: false,
    follow: false
  }
};

export default function WebsiteOfferLandingPage() {
  return (
    <>
      <OfferPageTracker />

      <SectionShell className="relative overflow-hidden pb-10 pt-14 md:pb-12 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_20%_18%,rgba(70,102,211,0.2),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.08),transparent_20%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,26rem)] lg:items-end">
            <div className="relative z-10">
              <p className="kicker">Website Offer</p>
              <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.8rem,7vw,5.9rem)] font-semibold leading-[0.93] tracking-tight text-white">
                Get a custom website built for your business for only $800.
              </h1>
              <p className="mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-white/82">
                Premium-looking design, fast turnaround, and a direct builder relationship from the first message to launch.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#claim-form" dataAnalytics="cta-offer-800">
                  Claim My $800 Website
                </Button>
                <p className="section-eyebrow text-white/72">Takes 2 minutes</p>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md">
                  <p className="section-eyebrow text-white/58">Proof</p>
                  <p className="mt-2 text-lg font-medium text-white">Live client websites available to review.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md">
                  <p className="section-eyebrow text-white/58">Reviews</p>
                  <p className="mt-2 text-lg font-medium text-white">Real 5-star feedback from completed projects.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-md">
                  <p className="section-eyebrow text-white/58">Offer</p>
                  <p className="mt-2 text-lg font-medium text-white">Clear $800 pricing with direct follow-up.</p>
                </div>
              </div>
            </div>

            <aside className="surface-primary relative overflow-hidden px-7 py-7 md:px-8 md:py-8">
              <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="relative z-10">
                <p className="section-eyebrow text-[#9bb6ff]">Featured Review</p>
                <p className="mt-4 text-[1.18rem] leading-relaxed text-white/88">
                  &ldquo;Kyle built a website for my business and absolutely nailed it. The final result looked clean, modern, and professional.&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/66">
                  Fast delivery, patient revisions, and a smooth process from start to finish.
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">Chris Kidd</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/52">5-star review</p>
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/82">
                    Built website fast
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="relative z-10 mt-8 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.03] py-4 backdrop-blur-md">
            <div className="offer-review-marquee">
              <div className="offer-review-track">
                {[...reviewRail, ...reviewRail].map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="offer-review-pill mx-3 inline-flex min-w-[18rem] max-w-[24rem] items-center gap-4 rounded-full border border-white/10 bg-[#0a0d14]/85 px-5 py-4 align-middle"
                  >
                    <div className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#9bb6ff]">
                      5-star
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{item.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Recent Work</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-tight text-white">
                Live project examples that make the offer feel credible.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/66">
              Visitors should be able to compare quality before they fill out the form. These are real websites, not mockups.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(7,10,16,0.92))] shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/18"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.featuredImageUrl}
                    alt={`${project.clientName} website preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 32vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_18%,rgba(2,4,8,0.7)_100%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-[#08101d]/70 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-white/88 backdrop-blur-md">
                    {project.industry}
                  </div>
                </div>
                <div className="px-6 py-6">
                  <h3 className="text-[1.8rem] font-medium tracking-tight text-white">{project.clientName}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">{project.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.servicesProvided.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/74"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-medium text-white underline underline-offset-4"
                  >
                    View live site
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="surface-primary px-7 py-7 md:px-10 md:py-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Client Reviews</p>
                <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.5rem)] font-semibold leading-[0.98] tracking-tight text-white">
                  Longer-form proof for people who need one more reason to trust it.
                </h2>
              </div>
              <p className="section-eyebrow text-white/66">For buyers who scroll before they submit</p>
            </div>

            <div className="mt-8 grid gap-4">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[1.4rem] border border-white/12 bg-white/[0.04] px-6 py-6">
                  <p className="section-eyebrow text-[#9bb6ff]">{testimonial.ratingLabel}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/86">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/78">
                    {testimonial.continuation}
                  </p>
                  {testimonial.close ? (
                    <p className="mt-4 text-[1.02rem] leading-relaxed text-white/78">
                      {testimonial.close}
                    </p>
                  ) : null}
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">
                    {testimonial.name}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-secondary px-7 py-7 md:px-8 md:py-9">
            <p className="kicker">Why This Converts</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1] tracking-tight text-white">
              A simple offer with enough proof to feel safe.
            </h2>
            <div className="mt-7 space-y-4">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                <p className="section-eyebrow text-white/58">No confusion</p>
                <p className="mt-2 text-lg font-medium text-white">Clear $800 pricing instead of vague custom quotes.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                <p className="section-eyebrow text-white/58">Real proof</p>
                <p className="mt-2 text-lg font-medium text-white">Live project links and detailed reviews before the form.</p>
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                <p className="section-eyebrow text-white/58">Fast action</p>
                <p className="mt-2 text-lg font-medium text-white">Direct contact, quick follow-up, and a short form.</p>
              </div>
            </div>
            <div className="mt-7 rounded-[1.35rem] border border-[#5c80f5] bg-[#305cde] px-5 py-5 shadow-[0_14px_35px_rgba(48,92,222,0.28)]">
              <p className="section-eyebrow text-white/82">Limited Offer</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-white">$800 custom website</p>
              <p className="mt-3 text-sm leading-relaxed text-white/84">
                If the work quality looks right and the offer makes sense, the next step is just claiming your spot below.
              </p>
              <Button href="#claim-form" className="mt-5 bg-white text-[#18308a] hover:bg-white/90">
                Claim My $800 Website
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div id="claim-form" className="scroll-mt-28" />
        <div className="mx-auto max-w-6xl">
          <OfferLeadForm />
          <div className="mt-5 text-center">
            <p className="text-sm text-white/70">
              Prefer to talk first?{" "}
              <a href={`tel:${site.contactPhone}`} data-analytics="phone_click" className="text-white underline underline-offset-4">
                {site.contactPhone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.contactEmail}`} data-analytics="email_click" className="text-white underline underline-offset-4">
                email us
              </a>
              .
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
