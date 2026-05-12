export interface FAQItem {
  question: string;
  answer: string;
  page: "home" | "pricing";
}

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Our custom websites start at $800, a fraction of what big agencies charge. Every site is mobile-optimized, fast, and built to convert visitors into paying customers.",
    page: "home"
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "Never. We work month-to-month on recurring services and project-by-project on one-time builds. You stay because you want to, not because you have to.",
    page: "home"
  },
  {
    question: "How fast can I get my website?",
    answer:
      "Most websites are delivered within 7 business days. Complex projects may take longer, but we will always give you a clear timeline upfront.",
    page: "home"
  },
  {
    question: "I'm not tech-savvy. Is that okay?",
    answer:
      "Absolutely. Most of our clients are not. You tell us about your business, and we handle the rest. No jargon, no confusing dashboards, just results you can see.",
    page: "home"
  },
  {
    question: "Do you work with businesses outside KC?",
    answer:
      "We do, but our roots are here in Kansas City and that is where we do our best work. If you are anywhere in the metro, we can even meet in person.",
    page: "home"
  },
  {
    question: "What if I already have a website but it's not working?",
    answer:
      "We will audit it for free and tell you exactly what is holding it back. Sometimes it is a quick fix. Sometimes a fresh start makes more sense. Either way, we will be honest.",
    page: "home"
  },
  {
    question: "How much does a small business website cost in Kansas City?",
    answer:
      "Our current website package is $800, with a regular price of $1,000 for the same build scope.",
    page: "pricing"
  },
  {
    question: "What is included in a small business website?",
    answer:
      "A custom homepage, core internal pages, mobile optimization, conversion-focused sections, analytics installation, and contact lead capture setup.",
    page: "pricing"
  },
  {
    question: "What does monthly SEO cost?",
    answer:
      "Local SEO is $250/month per business for Google Maps and Google Business Profile visibility. Website SEO is $400/month per business for keyword tracking, audits, Search Console review, page recommendations, and a monthly action plan.",
    page: "pricing"
  },
  {
    question: "What does paid ads management cost?",
    answer:
      "Paid ads management is $300/month per platform. Paid ads setup is $250 one-time per platform for campaign setup, tracking setup, audience or keyword setup, ad structure, and launch preparation.",
    page: "pricing"
  }
];
