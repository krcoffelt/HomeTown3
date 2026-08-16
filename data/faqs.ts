export interface FAQItem {
  question: string;
  answer: string;
  page: "home";
}

export const faqs: FAQItem[] = [
  {
    question: "What is included in the free marketing audit?",
    answer:
      "We review the clearest available signals across your website, search visibility, paid campaigns, conversion tracking, and lead flow. You get a practical conversation about what is working, what needs attention, and the highest-value next step.",
    page: "home"
  },
  {
    question: "Do you only work with small businesses?",
    answer:
      "Small businesses are our focus. Our approach is designed for owner-led teams that need practical marketing, direct communication, and a clear connection between the work and real leads.",
    page: "home"
  },
  {
    question: "How do you track real conversions?",
    answer:
      "We define the actions that matter for your business—such as calls, forms, bookings, qualified leads, and sales conversations—then configure measurement so those actions can guide decisions.",
    page: "home"
  },
  {
    question: "Can you help if we do not know what is working?",
    answer:
      "Yes. That is exactly where the audit starts. We assess the available data, identify tracking gaps, and separate strong signals from assumptions so the next decision is clearer.",
    page: "home"
  },
  {
    question: "Do you manage both Google Ads and Meta Ads?",
    answer:
      "Yes. We use Google, Meta, or both based on customer intent, your offer, the sales process, and what can be measured reliably.",
    page: "home"
  },
  {
    question: "What if our current website is not producing leads?",
    answer:
      "We will audit the message, mobile experience, trust signals, calls to action, forms, traffic quality, and tracking. Then we will explain whether focused fixes or a new conversion-focused website is the better next move.",
    page: "home"
  }
];
