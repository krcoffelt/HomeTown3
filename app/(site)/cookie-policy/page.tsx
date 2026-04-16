import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const sections = [
  {
    title: "Why this site uses cookies and similar storage",
    body:
      "We use cookies, local storage, and similar browser technologies to remember attribution details, measure traffic sources, understand form performance, and support advertising and analytics tools."
  },
  {
    title: "What may be stored",
    body:
      "Depending on the visit, the site may store landing page details, referrer data, campaign parameters, click IDs, and interaction flags that help us understand where leads came from."
  },
  {
    title: "How that data is used",
    body:
      "The stored data helps us measure marketing performance, improve pages, and connect lead submissions to the campaigns or sources that generated them."
  },
  {
    title: "Managing cookies",
    body:
      "Most browsers let you clear cookies, block storage, or limit tracking. If you disable them, parts of the site may still work, but attribution and analytics may be less accurate."
  }
];

export const metadata = createPageMetadata(
  "Cookie Policy",
  "A simple explanation of how Hometown Marketing Agency uses cookies, local storage, and tracking technologies on this website.",
  "/cookie-policy"
);

export default function CookiePolicyPage() {
  const schema = [
    webPageSchema({
      name: "Cookie Policy",
      description: "How Hometown uses cookies, local storage, and tracking technologies on this website.",
      path: "/cookie-policy"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Cookie Policy", path: "/cookie-policy" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Cookie Policy"
            title="Cookie & Tracking Policy"
            subtitle="What this site stores in the browser, why it is used, and how it supports analytics, attribution, and lead tracking."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="light-panel max-w-4xl p-7 md:p-10">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
