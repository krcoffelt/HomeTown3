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

      <SectionShell className="pb-6 pt-14 md:pb-8 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Start Here</p>
          <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.5rem,7vw,5.6rem)] font-semibold leading-[0.95] tracking-tight text-white">
            We will build you a custom website for only $800.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Satisfaction guaranteed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
            <p className="section-eyebrow text-white/72">Takes 2 minutes</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pb-4 pt-2">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="surface-secondary px-6 py-5">
              <p className="section-eyebrow text-white/72">Trust Signal</p>
              <p className="mt-3 text-xl font-medium text-white">Real client reviews from completed website projects.</p>
            </div>
            <div className="surface-secondary px-6 py-5">
              <p className="section-eyebrow text-white/72">Proof</p>
              <p className="mt-3 text-xl font-medium text-white">Live project examples visitors can compare for quality.</p>
            </div>
            <div className="surface-secondary px-6 py-5">
              <p className="section-eyebrow text-white/72">Offer</p>
              <p className="mt-3 text-xl font-medium text-white">Clear $800 pricing with direct contact and fast follow-up.</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="surface-primary px-7 py-7 md:px-10 md:py-9">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="kicker">Client Reviews</p>
                <h2 className="mt-3 text-[clamp(1.9rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-tight text-white">
                  What clients say after working with Hometown.
                </h2>
              </div>
              <p className="section-eyebrow text-white/72">Built for trust before the form</p>
            </div>

            <div className="mt-8 grid gap-4">
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="rounded-[1.4rem] border border-white/12 bg-white/[0.04] px-6 py-6">
                  <p className="section-eyebrow text-[#9bb6ff]">{testimonial.ratingLabel}</p>
                  <p className="mt-4 text-[1.02rem] leading-relaxed text-white/86">
                    "{testimonial.quote}"
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
            <p className="kicker">Recent Projects</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1] tracking-tight text-white">
              Recent website work that helps build trust fast.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/76">
              These are live website projects that show the visual quality and clarity we bring to local businesses.
            </p>

            <div className="mt-7 space-y-4">
              {featuredProjects.map((project) => (
                <article key={project.slug} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.03]">
                  <div className="relative h-44">
                    <Image
                      src={project.featuredImageUrl}
                      alt={`${project.clientName} website preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 32vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <p className="section-eyebrow text-white/66">{project.industry}</p>
                    <h3 className="mt-2 text-2xl font-medium tracking-tight text-white">{project.clientName}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/74">{project.summary}</p>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-medium text-white underline underline-offset-4"
                    >
                      View live site
                    </a>
                  </div>
                </article>
              ))}
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
