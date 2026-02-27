import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { painSolutionCards } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

export default function PainContrastSection() {
  return (
    <section className="section home-contrast reveal" aria-labelledby="contrast-heading">
      <div className="section-intro home-contrast-intro">
        <p className="eyebrow">Before and After</p>
        <h2 id="contrast-heading">From no website to a conversion-ready business presence.</h2>
        <p className="section-sub">
          The goal is simple: remove friction and make the next action obvious for every visitor.
        </p>
      </div>

      <div className="home-contrast-grid">
        {painSolutionCards.map((item) => (
          <article key={item.title} className="home-contrast-card">
            <h3>{item.title}</h3>
            <div className="home-contrast-columns">
              <div>
                <p className="home-contrast-label">Before</p>
                <p>{item.before}</p>
              </div>
              <div>
                <p className="home-contrast-label">After</p>
                <p>{item.after}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="home-inline-cta">
        <a className="button primary" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="home_before_after"
          className="button outline"
        >
          Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
