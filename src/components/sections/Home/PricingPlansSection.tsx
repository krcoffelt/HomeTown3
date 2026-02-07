const pricingPlans = [
  {
    name: 'KC Free',
    price: '$0',
    description: 'Free tools to get found and stay consistent.',
    items: [
      'Local visibility checklist',
      'Google Business starter audit',
      'Monthly content planner',
      'One-time 30-min consult',
    ],
    cta: 'Claim free kit',
    featured: false,
  },
  {
    name: 'KC Starter',
    price: '$149/mo',
    description: 'Light monthly support for visibility and content.',
    items: [
      '1-page site refresh',
      'Google Business tune-ups',
      '6 social posts + replies',
      'Monthly signal summary',
    ],
    cta: 'Start here',
    featured: false,
  },
  {
    name: 'KC Boost',
    price: '$349/mo',
    description: 'Full local growth system for leads and reviews.',
    items: [
      'Multi-page site + lead forms',
      'Weekly Google Business updates',
      '10 social posts + community',
      'Review automation & replies',
    ],
    cta: 'Get KC Boost',
    featured: true,
    badge: 'Most chosen',
  },
  {
    name: 'Neighborhood All-In',
    price: '$599/mo',
    description: 'Fractional marketing lead with ongoing optimization.',
    items: [
      'Custom pages + testing',
      'Weekly content + short video',
      'Always-on ads management',
      'Quarterly strategy sessions',
    ],
    cta: 'Talk with us',
    featured: false,
  },
];

export default function PricingPlansSection() {
  return (
    <section className="section" id="pricing">
      <div className="section-heading centered reveal">
        <p className="eyebrow">Pricing</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">Budget-friendly plans for KC businesses (and beyond).</span></span></h2>
        <p className="section-sub">Start free, upgrade anytime. Month-to-month with clear reporting.</p>
      </div>
      <div className="pricing-grid reveal">
        {pricingPlans.map((plan) => (
          <div key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
            {plan.badge ? <div className="badge">{plan.badge}</div> : null}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="desc">{plan.description}</p>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className={`button${plan.featured ? ' primary' : ' outline'}`} href="#contact">{plan.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}

