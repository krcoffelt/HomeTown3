'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer: "The timeline for building a website depends on its complexity and specific requirements. On average, We'll provide a detailed timeline during the initial consultation to ensure clear expectations."
  },
  {
    id: 2,
    question: "Do you offer custom websites or use templates?",
    answer: "We create fully custom websites tailored to your brand. No generic templates—just unique, high-performing designs."
  },
  {
    id: 3,
    question: "What's included in your SEO services?",
    answer: "We optimize your site structure, content, and speed, ensuring better search rankings and visibility."
  },
  {
    id: 4,
    question: "How does the monthly subscription model work?",
    answer: "You pay a fixed monthly fee, and we handle everything—design, updates, and ongoing support. No large upfront costs, just a seamless experience."
  },
  {
    id: 5,
    question: "Can you redesign my existing website?",
    answer: "Yes! We can refresh your current site while improving its design, functionality, and performance."
  },
  {
    id: 6,
    question: "How do I get started?",
    answer: "Just reach out! We'll discuss your needs, create a plan, and get to work on your website."
  }
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">FAQ.</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here's everything you need to know about working with us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: faq.id * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <div className={`w-6 h-6 transition-transform duration-200 ${
                    openFaq === faq.id ? 'rotate-45' : ''
                  }`}>
                    <div className="w-6 h-1 bg-white rounded-full mb-1"></div>
                    <div className={`w-1 h-6 bg-white rounded-full transition-all duration-200 ${
                      openFaq === faq.id ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                  </div>
                </div>
              </button>
              
              <div className={`px-8 transition-all duration-300 overflow-hidden ${
                openFaq === faq.id ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
