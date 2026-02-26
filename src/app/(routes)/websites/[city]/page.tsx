import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { getLocalSeoCityBySlug, localSeoCities } from '@/data/localSeoCities';
import { createPageMetadata, siteConfig } from '@/lib/seo';
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProfessionalServiceSchema,
} from '@/lib/structuredData';

type LocalCityPageProps = {
  params: {
    city: string;
  };
};

export function generateStaticParams() {
  return localSeoCities.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: LocalCityPageProps): Metadata {
  const city = getLocalSeoCityBySlug(params.city);

  if (!city) {
    return createPageMetadata({
      title: 'Kansas City Metro Website Setup',
      description: siteConfig.description,
      path: '/websites',
      noIndex: true,
    });
  }

  const pagePath = `/websites/${city.slug}`;
  return createPageMetadata({
    title: `${city.name} Website Setup for Local Businesses`,
    description: `${city.intro} Start with our $800 website setup package and launch quickly.`,
    path: pagePath,
    keywords: [...city.keywords, ...siteConfig.defaultKeywords],
  });
}

export default function LocalCityPage({ params }: LocalCityPageProps) {
  const city = getLocalSeoCityBySlug(params.city);

  if (!city) {
    notFound();
  }

  const pagePath = `/websites/${city.slug}`;
  const faqSchema = buildFaqSchema(city.faq);
  const businessSchema = buildProfessionalServiceSchema({
    pagePath,
    areaServed: [city.name, ...city.nearbyAreas],
    description: `${city.intro} ${siteConfig.primaryOffer} for local businesses.`,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Websites', url: '/#website-package' },
    { name: `${city.name} Website Setup`, url: pagePath },
  ]);

  return (
    <SiteShell>
      <main className="section listing-page local-city-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <header className="listing-hero">
          <p className="eyebrow">{city.name}, {city.state}</p>
          <h1>{city.name} website setup for local businesses without a website.</h1>
          <p className="listing-lead">{city.intro}</p>
          <div className="local-city-actions">
            <a className="button primary" href="/contact">Start My Website</a>
            <TrackedPhoneLink
              href={`tel:${siteConfig.phoneE164}`}
              eventName="click_call_cta_section"
              location={`city_page_hero_${city.slug}`}
              className="button ghost"
            >
              Call {siteConfig.phoneDisplay}
            </TrackedPhoneLink>
          </div>
        </header>

        <section className="local-city-block">
          <h2>Nearby Kansas City metro areas we support</h2>
          <ul className="local-city-chip-list">
            {city.nearbyAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>

        <section className="local-city-block">
          <h2>Frequently asked questions</h2>
          <div className="local-city-faq">
            {city.faq.map((item) => (
              <article key={item.question} className="local-city-faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="local-city-block local-city-cta">
          <h2>Ready to launch in {city.name}?</h2>
          <p>Start with the form and we will map the fastest launch path for your business.</p>
          <div className="local-city-actions">
            <a className="button primary" href="/contact">Start My Website</a>
            <TrackedPhoneLink
              href={`tel:${siteConfig.phoneE164}`}
              eventName="click_call_cta_section"
              location={`city_page_footer_${city.slug}`}
              className="button outline"
            >
              Call Now
            </TrackedPhoneLink>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
