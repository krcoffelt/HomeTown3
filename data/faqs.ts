export interface FAQItem {
  question: string;
  answer: string;
  page: "home" | "pricing";
}

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Our core Custom Website Package is $800 this month, with a regular price of $999.",
    page: "home"
  },
  {
    question: "What is included?",
    answer:
      "A custom multi-page website with strong layout structure, conversion-focused sections, mobile optimization, and lead form setup.",
    page: "home"
  },
  {
    question: "Do you work with Kansas City businesses only?",
    answer:
      "Kansas City is our focus, but we can work with nearby service businesses when the fit is right.",
    page: "home"
  },
  {
    question: "Can you redesign an existing site?",
    answer:
      "Yes. We can redesign your current site into a clearer, more modern and lead-focused experience.",
    page: "home"
  },
  {
    question: "Do you help with SEO?",
    answer:
      "Yes, we include local SEO fundamentals like metadata structure, page hierarchy, and local keyword alignment.",
    page: "home"
  },
  {
    question: "Do you help with hosting and domain?",
    answer:
      "Yes, we can guide you through it and ensure your website is connected properly once your preferred hosting is ready.",
    page: "home"
  },
  {
    question: "What do you need from me?",
    answer:
      "Basic business details, your services, and any photos or examples you already have. We keep the process simple.",
    page: "home"
  },
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Home services, local professionals, clinics, studios, contractors, and other service-based businesses.",
    page: "home"
  },
  {
    question: "How much does a small business website cost in Kansas City?",
    answer:
      "Our current website package is $800 this month, with a regular price of $999 for the same build scope.",
    page: "pricing"
  },
  {
    question: "What is included in a small business website?",
    answer:
      "A custom homepage, core internal pages, mobile optimization, conversion-focused sections, and contact lead capture setup.",
    page: "pricing"
  },
  {
    question: "Do I need a website for my local business?",
    answer:
      "Yes. A modern website helps local customers validate your business quickly and gives search traffic a direct way to contact you.",
    page: "pricing"
  },
  {
    question: "Can someone build my business website for me?",
    answer:
      "Yes. Hometown handles strategy, design, and build while keeping the process simple for local business owners.",
    page: "pricing"
  }
];
