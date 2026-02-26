import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = createPageMetadata({
  title: 'Start Your Website',
  description: 'Start your $800 website project with Hometown. Add social media or logo support when needed.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="section listing-page">
        <header className="listing-hero">
          <p className="eyebrow">Start Project</p>
          <h1>Launch your $800 website.</h1>
          <p className="listing-lead">
            Share your business details and we&apos;ll map a clean, fast launch plan. If needed, we&apos;ll
            also scope social media and logo support.
          </p>
        </header>

        <section className="detail-panels">
          <article className="detail-panel">
            <h2>Contact</h2>
            <p>Most projects start with the website package first.</p>
            <p>{contactInfo.email}</p>
            <p>{contactInfo.phone}</p>
            <p>Kansas City, Missouri</p>
          </article>

          <form className="detail-panel cta-form" action="#" method="post">
            <h2>Project Notes</h2>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="company" placeholder="Company" />
            <textarea name="message" rows={5} placeholder="Tell us about your business and what you need." />
            <button className="button primary" type="submit">Start My Website</button>
          </form>
        </section>
      </main>
    </SiteShell>
  );
}
