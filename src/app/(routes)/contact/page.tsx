import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = createPageMetadata({
  title: 'Work With Us',
  description: 'Start a conversation with Hometown about programs, campaigns, and creative systems.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="section listing-page">
        <header className="listing-hero">
          <p className="eyebrow">Work With Us</p>
          <h1>Let&apos;s build the next chapter.</h1>
          <p className="listing-lead">
            Tell us what you&apos;re building and where traction is getting stuck. We&apos;ll recommend the
            best next program and timeline.
          </p>
        </header>

        <section className="detail-panels">
          <article className="detail-panel">
            <h2>Contact</h2>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
            <p>Kansas City, Missouri</p>
          </article>

          <form className="detail-panel cta-form" action="#" method="post">
            <h2>Project Notes</h2>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="company" placeholder="Company" />
            <textarea name="message" rows={5} placeholder="What do you need help with?" />
            <button className="button primary" type="submit">Send</button>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}
