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
      <main className="section listing-page contact-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <header className="contact-page-hero">
          <p className="eyebrow">Start Project</p>
          <h1>Start your website setup and we&apos;ll map the fastest launch path.</h1>
          <p className="listing-lead">
            Form submission is the primary route. If you want to talk first, call us and we can scope your
            project immediately.
          </p>
          <div className="contact-page-hero-actions">
            <a className="button primary" href="#contact-form">Start My Website</a>
            <TrackedPhoneLink
              href={`tel:${contactInfo.phoneHref}`}
              eventName="click_call_cta_section"
              location="contact_page_hero"
              className="button ghost"
            >
              Call {contactInfo.phone}
            </TrackedPhoneLink>
          </div>
        </header>

        <section className="contact-page-grid">
          <ContactLeadForm />
          <aside className="detail-panel contact-page-aside">
            <h2>Need to talk first?</h2>
            <p>Phone is always available as the secondary conversion path.</p>
            <TrackedPhoneLink
              href={`tel:${contactInfo.phoneHref}`}
              eventName="click_call_cta_section"
              location="contact_page_aside"
              className="button ghost"
            >
              Call {contactInfo.phone}
            </TrackedPhoneLink>
            <p className="contact-page-aside-note">Kansas City service area</p>
            <p className="contact-page-aside-email">
              Email (fallback): <a className="text-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
          </aside>
        </section>
      </main>
    </SiteShell>
  );
}
