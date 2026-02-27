import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';
import {
  buildProfessionalServiceSchema,
  buildWebsiteSchema,
} from '@/lib/structuredData';
import ServicesHeroSection from '@/components/sections/ServicesPage/ServicesHeroSection';
import DetailedServicesSection from '@/components/sections/ServicesPage/DetailedServicesSection';
import ServicesProcessSection from '@/components/sections/ServicesPage/ServicesProcessSection';
import ServicesOverviewSection from '@/components/sections/ServicesPage/ServicesOverviewSection';
import ServicesPricingSection from '@/components/sections/ServicesPage/ServicesPricingSection';
import ServicesTestimonialsSection from '@/components/sections/ServicesPage/ServicesTestimonialsSection';
import ServicesCTASection from '@/components/sections/ServicesPage/ServicesCTASection';

export const metadata: Metadata = createPageMetadata({
  title: 'Kansas City Website, Social, and Logo Services',
  description:
    'Conversion-focused website setup for Kansas City businesses, plus social media and logo support. Start with the $800 website offer.',
  path: '/services',
  keywords: [
    'kansas city website services',
    '$800 website kansas city',
    'social media services kansas city',
    'logo design support kansas city',
  ],
});

export default function ServicesPage() {
  const websiteSchema = buildWebsiteSchema();
  const serviceSchema = buildProfessionalServiceSchema({ pagePath: '/services' });

  return (
    <SiteShell>
      <main className="section listing-page services-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ServicesHeroSection />
        <DetailedServicesSection />
        <ServicesProcessSection />
        <ServicesOverviewSection />
        <ServicesTestimonialsSection />
        <ServicesPricingSection />
      </main>
      <ServicesCTASection />
    </SiteShell>
  );
}
