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
    role: "Marketing client",
    quote:
      "I highly recommend working with Kyle Coffelt with Hometown Marketing. From start to finish, the experience was outstanding. Kyle was incredibly punctual, responsive, and organized throughout the entire process, which made everything run smoothly and stress-free.",
    continuation:
      "What truly stood out was his creativity and how he was able to understand what we were looking for. Kyle brought fresh ideas to the table and had a great ability to turn concepts into effective marketing strategies. His attention to detail and willingness to go above and beyond made a huge difference in the final result.",
    close:
      "It is rare to find someone who combines reliability and genuine creativity the way he did. I would absolutely recommend Hometown Marketing to anyone looking for high-quality marketing support."
  },
  {
    name: "Chris Kidd",
    role: "Website client",
    quote:
      "Kyle built a website for my business and absolutely nailed it. Not only did he deliver it incredibly fast, but the final result looked clean, modern, and professional.",
    continuation:
      "He was also extremely patient with all the revisions and tweaks I asked for along the way. The whole process was smooth from start to finish, and I could not be happier with how everything turned out."
  }
];

const featuredProjects = projects.slice(0, 3);

const offerInclusions = [
  "Custom multi-page website",
  "Clean, premium design",
  "Mobile-first responsive build",
  "Lead form setup",
  "Direct communication with the team"
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

      <SectionShell className="relative overflow-hidden pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_20%_18%,rgba(70,102,211,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.07),transparent_20%)]" />
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,25rem)] lg:items-center">
            <div className="relative z-10">
              <p className="kicker">Website Offer</p>
              <h1 className="mt-4 max-w-4xl text-balance text-[clamp(2.9rem,6.3vw,5.35rem)] font-semibold leading-[0.95] tracking-tight text-white">
                Get a custom website built for your business for only $800.
              </h1>
              <p className="mt-5 max-w-2xl text-[1.08rem] leading-relaxed text-white/82 md:text-[1.14rem]">
                Premium-looking design, fast turnaround, and direct communication from the first message to launch.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#claim-form" dataAnalytics="cta-offer-800">
                  Claim My $800 Website
                </Button>
                <p className="section-eyebrow text-white/72">Takes 2 minutes</p>
              </div>
            </div>

            <aside className="surface-primary relative overflow-hidden px-7 py-7 md:px-8 md:py-8">
              <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),transparent_42%)]" />
              <div className="relative z-10">
                <p className="section-eyebrow text-[#9bb6ff]">Client Review</p>
                <div className="mt-4 flex items-center gap-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-white/76">
                  <span className="text-[#9bb6ff]">★★★★★</span>
                  <span>Chris Kidd</span>
                </div>
                <p className="mt-4 text-[1.22rem] leading-relaxed text-white/90">
                  &ldquo;Kyle built a website for my business and absolutely nailed it. The final result looked clean, modern, and professional.&rdquo;
                </p>
                <p className="mt-5 text-sm leading-relaxed text-white/68">
                  Fast delivery, patient revisions, and a smooth process from start to finish.
                </p>
                <div className="mt-6 border-t border-white/10 pt-5" />
              </div>
            </aside>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">Recent Work</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[0.98] tracking-tight text-white">
                A few recent website projects.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/66">
              These are real client websites, not concept mockups.
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
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="surface-primary px-7 py-7 md:px-10 md:py-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Client Reviews</p>
                <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[0.98] tracking-tight text-white">
                  What clients said after the work was done.
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[1.4rem] border border-white/12 bg-white/[0.04] px-6 py-6">
                  <div className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-white/72">
                    <span className="text-[#9bb6ff]">★★★★★</span>
                    <span>{testimonial.role}</span>
                  </div>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/86">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/78">{testimonial.continuation}</p>
                  {testimonial.close ? (
                    <p className="mt-4 text-[1.02rem] leading-relaxed text-white/78">{testimonial.close}</p>
                  ) : null}
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-white">{testimonial.name}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-secondary px-7 py-7 md:px-8 md:py-9">
            <p className="kicker">Offer Details</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1] tracking-tight text-white">
              The $800 website offer.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/72">
              Straightforward pricing, direct communication, and a clean process from inquiry to launch.
            </p>

            <div className="mt-7 rounded-[1.35rem] border border-[#5c80f5] bg-[#305cde] px-5 py-5 shadow-[0_14px_35px_rgba(48,92,222,0.28)]">
              <p className="section-eyebrow text-white/82">Limited Offer</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-white">$800 custom website</p>
              <p className="mt-3 text-sm leading-relaxed text-white/84">
                Best fit for local businesses that need a sharper website and a faster path to getting online.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {offerInclusions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <span className="mt-0.5 text-[#9bb6ff]">•</span>
                  <p className="text-base leading-relaxed text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="section-eyebrow text-white/58">Response time</p>
              <p className="mt-2 text-lg font-medium text-white">You will hear back in under 24 hours.</p>
            </div>

            <Button href="#claim-form" className="mt-6 w-full" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
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
