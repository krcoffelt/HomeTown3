import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, MapPinIcon } from "@/components/ui/site-icons";
import type { GuidePageItem } from "@/data/guides";
import { blogPostingSchema, breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

export function GuideArticlePage({ guide }: { guide: GuidePageItem }) {
  const schema = [
    webPageSchema({ name: guide.title, description: guide.description, path: guide.path }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: guide.title, path: guide.path }
    ]),
    faqItemsSchema(guide.faqItems),
    blogPostingSchema({
      headline: guide.title,
      description: guide.description,
      path: guide.path,
      datePublished: guide.publishedAt,
      dateModified: guide.updatedAt,
      image: guide.image
    })
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise relative isolate overflow-hidden bg-gradient-dark pb-20 pt-32 text-primary-foreground md:pb-28 md:pt-40">
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.16] mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/84 via-black/64 to-black/35" />
        <div className="site-container relative z-10">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{guide.category}</p>
            <h1 className="mt-6 max-w-5xl font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              {guide.heroTitle}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-primary-foreground/78 md:text-xl">{guide.heroIntro}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/64">
              <span className="inline-flex items-center gap-2"><ClockIcon className="h-4 w-4 text-accent" />{guide.readingTime}</span>
              <span className="inline-flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-accent" />Kansas City metro</span>
              <span>Updated {guide.displayDate}</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#guide">Read the guide</Button>
              <Button href="#form" variant="secondary" className="border-primary-foreground/16 text-primary-foreground hover:text-primary-foreground">
                Get a Free Marketing Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionShell className="border-b border-border" containerClassName="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
        <article>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">The Short Answer</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{guide.shortAnswerTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{guide.shortAnswer}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {guide.keyTakeaways.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium leading-relaxed text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </article>

        <aside className="rounded-2xl border border-border bg-secondary/55 p-7 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">In This Guide</p>
          <nav aria-label="Article table of contents" className="mt-5 grid gap-2">
            {guide.sections.map((section, index) => (
              <Link key={section.id} href={`#${section.id}`} className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm font-bold leading-snug text-foreground transition hover:bg-background hover:text-accent">
                <span className="text-accent/70">{String(index + 1).padStart(2, "0")}</span>
                <span>{section.title}</span>
              </Link>
            ))}
          </nav>
        </aside>
      </SectionShell>

      <div id="guide">
        {guide.sections.map((section, index) => (
          <SectionShell key={section.id} className={index % 2 === 1 ? "bg-secondary/35" : undefined}>
            <article id={section.id} className="scroll-mt-28 mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{section.eyebrow}</p>
                  <p className="mt-4 font-display text-6xl font-bold tracking-tight text-foreground/10">{String(index + 1).padStart(2, "0")}</p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{section.title}</h2>
                  <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>

                  {section.items?.length ? (
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {section.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                          <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span className="text-sm leading-relaxed text-foreground/82">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {section.callout ? (
                    <aside className="mt-8 rounded-2xl border-l-4 border-accent bg-foreground p-6 text-primary-foreground md:p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Kansas City Example</p>
                      <h3 className="mt-3 text-xl font-bold tracking-tight">{section.callout.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary-foreground/72">{section.callout.body}</p>
                    </aside>
                  ) : null}
                </div>
              </div>
            </article>
          </SectionShell>
        ))}
      </div>

      {guide.sourceLinks?.length ? (
        <SectionShell className="border-y border-border bg-secondary/35">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Official Sources</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Check the current Google documentation before changing an account.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {guide.sourceLinks.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="flex items-center justify-between gap-4 font-bold text-foreground transition group-hover:text-accent">
                    {source.label}
                    <ArrowRightIcon className="h-4 w-4 shrink-0" />
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-muted-foreground">{source.note}</span>
                </a>
              ))}
            </div>
          </div>
        </SectionShell>
      ) : null}

      <SectionShell className="noise bg-gradient-dark text-primary-foreground">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Keep Going</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Useful next steps for your Kansas City business.</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/68">
              These pages connect the guide to the service, local proof, and decision support behind it.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {guide.relatedLinks.map((link) => (
              <Link key={`${link.href}-${link.label}`} href={link.href} className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                {link.label}
                <ArrowRightIcon className="h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Questions Kansas City owners ask before the next step.</h2>
          </div>
          <div className="mt-9 rounded-2xl border border-border bg-card px-3 shadow-[var(--shadow-card)] md:px-7">
            {guide.faqItems.map((item, index) => (
              <details key={item.question} className={`group border-b border-border ${index === guide.faqItems.length - 1 ? "border-b-0" : ""}`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-base font-bold text-card-foreground md:text-lg">
                  {item.question}
                  <span className="text-xl text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionShell>

      <ContactCta
        title={guide.ctaTitle}
        accentText={guide.ctaAccent}
        body={guide.ctaBody}
        links={guide.ctaLinks}
      />
    </div>
  );
}
