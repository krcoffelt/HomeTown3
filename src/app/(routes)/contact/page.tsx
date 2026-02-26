import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';
import ContactLeadForm from '@/components/forms/ContactLeadForm';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { contactInfo } from '@/data/navigation';
import {
  buildFaqSchema,
  buildProfessionalServiceSchema,
} from '@/lib/structuredData';

export const metadata: Metadata = createPageMetadata({
  title: 'Start Your Kansas City Website Project',
  description:
    'Start your $800 website setup for your Kansas City metro business. Submit the form or call to begin.',
  path: '/contact',
  keywords: [
    'kansas city website setup',
    'start website project kansas city',
    'small business website form submission',
    'call for website design kansas city',
  ],
});

export default function ContactPage() {
  const contactFaqSchema = buildFaqSchema([
    {
      question: 'What is the fastest way to get started?',
      answer: 'Submit the contact form with your business details and we will map your website launch plan.',
    },
    {
      question: 'Can I call instead of submitting the form?',
      answer: `Yes. You can call ${contactInfo.phone} for a quick kickoff conversation.`,
    },
  ]);
  const businessSchema = buildProfessionalServiceSchema({ pagePath: '/contact' });

  return (
    <SiteShell>
      <main className="section listing-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <header className="listing-hero">
          <p className="eyebrow">Start Project</p>
          <h1>Launch your Kansas City website for $800.</h1>
          <p className="listing-lead">
            Submit the form and we&apos;ll map a clean, fast launch plan for your local business. Prefer
            phone? Call us and we can scope it immediately.
          </p>
          <TrackedPhoneLink
            href={`tel:${contactInfo.phoneHref}`}
            eventName="click_call_cta_section"
            location="contact_page_hero"
            className="button ghost"
          >
            Call {contactInfo.phone}
          </TrackedPhoneLink>
        </header>

        <section className="detail-panels">
          <article className="detail-panel">
            <h2>Contact</h2>
            <p>Most projects start with the website package first.</p>
            <p>
              <TrackedPhoneLink
                href={`tel:${contactInfo.phoneHref}`}
                eventName="click_call_cta_section"
                location="contact_page_detail_panel"
                className="text-link"
              >
                {contactInfo.phone}
              </TrackedPhoneLink>
            </p>
            <p><a className="text-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
            <p>Kansas City Metro service area</p>
          </article>
          <ContactLeadForm />
        </section>
      </main>
    </SiteShell>
  );
}
