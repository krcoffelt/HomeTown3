import type { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { createPageMetadata } from '@/lib/seo';
import {
  buildFaqSchema,
  buildProfessionalServiceSchema,
  buildWebsiteSchema,
} from '@/lib/structuredData';

export const metadata: Metadata = createPageMetadata({
  title: 'Kansas City Website Setup for Local Businesses | $800 Website Launch',
  description:
    'Affordable Kansas City website setup for local businesses with no current website. Launch for $800 and start converting calls and form leads.',
  path: '/',
  keywords: [
    'kansas city website design',
    'affordable website design kansas city',
    'small business website kansas city metro',
    'website setup for local businesses',
    '$800 website kansas city',
  ],
});

export default function HomePage() {
  const faqSchema = buildFaqSchema([
    {
      question: 'Who is this website service for?',
      answer: 'It is built for Kansas City metro businesses that do not currently have a website and need one launched quickly.',
    },
    {
      question: 'What does the $800 website package include?',
      answer: 'The package includes core layout, messaging, mobile optimization, and conversion-focused setup for local lead generation.',
    },
    {
      question: 'How do I get started?',
      answer: 'Use the contact form to start your project, or call directly for a fast kickoff conversation.',
    },
  ]);
  const websiteSchema = buildWebsiteSchema();
  const serviceSchema = buildProfessionalServiceSchema({ pagePath: '/' });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageClient />
    </>
  );
}
