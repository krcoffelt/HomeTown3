import { localSeoCities } from '@/data/localSeoCities';
import { siteConfig } from '@/lib/seo';

const faqItems = [
  {
    question: 'What if my business does not have a website right now?',
    answer:
      'That is exactly who this offer is for. We handle the messaging, design, and setup so you can launch quickly.',
  },
  {
    question: 'Is this focused on local Kansas City leads?',
    answer:
      'Yes. The site structure and copy are built to convert local traffic into phone calls and form submissions.',
  },
  {
    question: 'Can I add social media or logo work later?',
    answer:
      'Yes. Start with the website first, then add social media management or logo work when you are ready.',
  },
];

export default function LocalServiceAreaSection() {
  return (
    <section className="section local-service-area reveal" id="kc-metro">
      <div className="section-intro">
        <p className="eyebrow">Kansas City Focus</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">Built for local businesses that need their first website now.</span>
          </span>
        </h2>
      </div>

      <ul className="local-service-area-list" aria-label="Kansas City metro areas">
        {siteConfig.serviceAreas.map((area) => (
          <li key={area}>{area}</li>
        ))}
      </ul>

      <div className="local-service-city-links">
        {localSeoCities.map((city) => (
          <a key={city.slug} href={`/websites/${city.slug}`}>
            {city.name} Website Setup
          </a>
        ))}
      </div>

      <div className="local-service-faq">
        {faqItems.map((item) => (
          <article key={item.question} className="local-service-faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
