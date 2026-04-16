import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const sections = [
  {
    title: "What we collect",
    body:
      "When you submit a form on this site, we collect the information you enter, including your name, business name, email, phone number, project notes, and any attribution data tied to the visit such as landing page, referrer, UTM parameters, and click IDs."
  },
  {
    title: "How we use it",
    body:
      "We use that information to respond to inquiries, qualify whether a project is a fit, improve our marketing, and understand which pages and campaigns are generating leads."
  },
  {
    title: "Tracking and analytics",
    body:
      "This site uses analytics and advertising tags to understand visits, page activity, and form conversions. These tools may store technical information such as referrer data, campaign parameters, and interaction events."
  },
  {
    title: "How we store lead data",
    body:
      "Lead submissions are stored in the systems we use to run the business, including form, database, and email notification tools. We keep submissions only as long as they are useful for responding, quoting, reporting, or meeting basic record-keeping needs."
  },
  {
    title: "Your choices",
    body:
      "If you want us to update or delete information you submitted through the site, email us and we will handle reasonable requests as quickly as practical."
  }
];

export const metadata = createPageMetadata(
  "Privacy Policy",
  "How Hometown Marketing Agency collects, uses, and stores information submitted through this website.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  const schema = [
    webPageSchema({
      name: "Privacy Policy",
      description: "How Hometown Marketing Agency collects, uses, and stores website and lead information.",
      path: "/privacy-policy"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy-policy" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Privacy Policy"
            title="Privacy Policy"
            subtitle="A practical overview of what we collect, how we use it, and how to reach us if you need anything updated."
            light
          />
        </div>
      </section>

      <SectionShell>
        <div className="light-panel max-w-4xl p-7 md:p-10">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Effective date: April 15, 2026. This policy applies to <strong className="text-foreground">{site.brand.fullName}</strong> and the website at <strong className="text-foreground">{site.url}</strong>.
          </p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-secondary p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              Questions about privacy or data requests can be sent to{" "}
              <a href={`mailto:${site.contactEmail}`} className="font-medium underline decoration-border underline-offset-4">
                {site.contactEmail}
              </a>.
            </p>
          </div>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
