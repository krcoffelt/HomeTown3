import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

const faqItems = [
  {
    question: "What should a contractor website include?",
    answer:
      "A strong contractor website should include clear services, project photos, service areas, reviews, licensing or insurance details when relevant, a direct phone number, and a simple quote-request path."
  },
  {
    question: "Do contractors need separate service pages?",
    answer:
      "Usually, yes. Separate service pages help customers understand each offer and give Google clearer context for searches like remodeling, carpentry, roofing, HVAC, or construction services in a specific city."
  },
  {
    question: "Are project photos important for contractor websites?",
    answer:
      "Yes. Project photos are one of the fastest ways to build trust, especially when they show real work, before-and-after progress, location context, and the type of jobs the contractor wants more of."
  },
  {
    question: "How much does a contractor website cost?",
    answer:
      "Hometown custom websites start at $800. Contractor websites can cost more when they need many service pages, project galleries, copywriting, advanced SEO, or integrations for booking and estimates."
  }
];

const essentials = [
  {
    title: "Clear services",
    text: "Spell out what you actually do. A visitor should not have to guess whether you handle remodels, repairs, installs, maintenance, or full project work."
  },
  {
    title: "Real project proof",
    text: "Use job photos, before-and-after examples, short project notes, and case studies to show the kind of work you want to keep winning."
  },
  {
    title: "Service area signals",
    text: "Mention the cities and neighborhoods you serve naturally, then support important areas with stronger service-area or location content."
  },
  {
    title: "Trust details",
    text: "Reviews, years in business, insurance or licensing notes, warranty language, and recognizable local work all help reduce hesitation."
  },
  {
    title: "Fast quote path",
    text: "Make it easy to call, text, or request an estimate from every important page, especially on mobile."
  },
  {
    title: "Tracking",
    text: "Track calls, form submissions, and quote starts so you can see whether the website is creating real opportunities."
  }
];

const quoteFlow = [
  "Phone number visible near the top of the page",
  "Short quote form with only the fields needed to start",
  "Project type dropdown or checkbox list",
  "Photo upload option if the business can support it",
  "Clear service area expectations",
  "Thank-you message that tells the customer what happens next"
];

const seoStructure = [
  "A main contractor or construction website page",
  "Separate pages for high-value services",
  "Location language for the cities you actually serve",
  "Descriptive project gallery text instead of photo dumps",
  "Internal links between services, work examples, and contact pages",
  "Basic metadata, headings, analytics, and Search Console setup"
];

const mistakes = [
  "Only showing a gallery without explaining services",
  "Using vague copy like quality work without saying what kind of work",
  "Hiding the phone number or quote button on mobile",
  "Trying to rank one page for every service and every city",
  "Using stock photos instead of real project proof",
  "Launching without call, form, or conversion tracking"
];

export const metadata = createPageMetadata(
  "Contractor Website Checklist",
  "A practical contractor website checklist for Kansas City contractors and home-service businesses that need more quote requests from their website.",
  "/what-should-a-contractor-website-include"
);

export default function ContractorWebsiteChecklistPage() {
  const schema = [
    webPageSchema({
      name: "What Should a Contractor Website Include?",
      description:
        "A contractor website checklist covering service pages, project proof, local SEO structure, quote forms, and conversion tracking.",
      path: "/what-should-a-contractor-website-include"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "What Should a Contractor Website Include?", path: "/what-should-a-contractor-website-include" }
    ]),
    faqItemsSchema(faqItems)
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contractor Websites</p>
            <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              What should a contractor website include?
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              A contractor website should prove the work, explain the services, build local trust, and make it easy for a qualified customer to request a quote.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#form" className="h-14 px-8">
                Get a Website Quote
              </Button>
              <Button href="/industries/construction-website-design-kansas-city" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
                Contractor Website Design
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">The Short Answer</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">Your website needs to answer three questions fast.</h2>
            <div className="mt-7 grid gap-4">
              {["Can you do the job?", "Have you done work like this before?", "How do I get a quote?"].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/76">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>

          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Why It Matters</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Most customers are comparing trust before they compare price.</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Contractor and home-service customers usually want proof before they reach out. They are looking for signs that the business is real, experienced, local, responsive, and capable of handling their specific project.
              </p>
              <p>
                That is why a good contractor website should not be a thin brochure. It should work like a project portfolio, service guide, local trust builder, and quote-request tool in one place.
              </p>
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Website Checklist</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Six essentials every contractor website should cover.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {essentials.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg font-bold tracking-tight text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <section className="light-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Quote Flow</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Make the next step obvious from every page.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A contractor website should not make people hunt for the phone number or wonder what details to send. The quote path should be simple, especially on mobile.
            </p>
            <div className="mt-8 grid gap-3">
              {quoteFlow.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="dark-panel p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Local SEO Structure</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">Help Google understand what you do and where you do it.</h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/74">
              Good SEO starts with clear structure. Contractors usually need more than one generic services page if they want to show up for specific jobs and service areas.
            </p>
            <div className="mt-8 grid gap-3">
              {seoStructure.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/78">
                  <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="light-panel p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Common Mistakes</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">The site should not make customers work to trust you.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The biggest contractor website problems are usually simple: vague services, weak proof, poor mobile experience, and no clear path to request an estimate.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {mistakes.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-background px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Where to Go Next</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Build the website around the jobs you want more of.</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A remodeler, carpenter, HVAC company, landscaper, and moving company should not all have the same website. The best structure depends on the services, geography, proof, and quote process.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { label: "Contractor website design Kansas City", href: "/industries/construction-website-design-kansas-city" },
              { label: "Home services website design Kansas City", href: "/industries/home-services-website-design-kansas-city" },
              { label: "Website design Kansas City", href: "/services/website-design" },
              { label: "See website work", href: "/work" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-5 py-4 text-sm font-bold text-foreground shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {link.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className={`group border-b border-border ${index === faqItems.length - 1 ? "border-b-0" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left text-base font-bold text-card-foreground md:pl-4 md:text-lg">
                {item.question}
                <span className="text-muted-foreground transition group-open:rotate-45">+</span>
              </summary>
              <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</div>
            </details>
          ))}
        </div>
      </SectionShell>

      <ContactCta
        title="Need a contractor website built around quote requests?"
        accentText="quote requests?"
        body="Hometown builds custom websites for Kansas City contractors and small businesses starting at $800."
        links={[{ href: "/services/website-design", label: "Website Design Service" }]}
      />
    </div>
  );
}
