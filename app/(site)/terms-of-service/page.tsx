import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const sections = [
  {
    title: "Website use",
    body:
      "This website is provided to help prospective clients learn about Hometown Marketing Agency and submit legitimate business inquiries. You agree not to misuse the site, interfere with its operation, or submit misleading, abusive, or automated spam inquiries."
  },
  {
    title: "Project information",
    body:
      "Content on this site is for general marketing and informational purposes. Timelines, recommendations, and project-scope examples are directional and may change based on the actual needs of each project."
  },
  {
    title: "Intellectual property",
    body:
      "Unless otherwise stated, the design, copy, branding, and site content belong to Hometown Marketing Agency. Client names, logos, and project examples remain the property of their respective owners."
  },
  {
    title: "No guarantee of results",
    body:
      "Marketing, websites, ads, and SEO can improve visibility and lead flow, but no specific ranking, revenue, or lead guarantee is made unless clearly stated in a written agreement."
  },
  {
    title: "Third-party tools",
    body:
      "This site may rely on third-party platforms for analytics, forms, hosting, and communications. Their services and interruptions are outside our direct control."
  }
];

export const metadata = createPageMetadata(
  "Terms of Service",
  "Basic terms governing the use of the Hometown Marketing Agency website and inquiry forms.",
  "/terms-of-service"
);

export default function TermsOfServicePage() {
  const schema = [
    webPageSchema({
      name: "Terms of Service",
      description: "The basic terms governing use of the Hometown website and inquiry forms.",
      path: "/terms-of-service"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Terms of Service", path: "/terms-of-service" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Terms"
            title="Terms of Service"
            subtitle="The practical rules for using the site, submitting inquiries, and understanding what our marketing language and recommendations do and do not promise."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="light-panel max-w-4xl p-7 md:p-10">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Effective date: April 15, 2026. These terms apply to visitors and inquiries submitted through {site.url}.
          </p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-secondary p-6 text-base leading-relaxed text-muted-foreground">
            Any project work, deliverables, and payment terms are ultimately governed by the written agreement created for that specific client engagement.
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
