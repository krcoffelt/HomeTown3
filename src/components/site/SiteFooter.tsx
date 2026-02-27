'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

const footerLinks = [
  { label: '$800 Websites', href: '/#website-package' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M18.901 2H22l-6.768 7.738L23.19 22h-6.229l-4.878-7.438L5.558 22H2.457l7.239-8.274L1.97 2h6.387l4.409 6.742L18.901 2Zm-1.088 18.012h1.718L7.419 3.882H5.576l12.237 16.13Z"
      />
    </svg>
  );
}

type SocialItem = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialItems: SocialItem[] = [
  { label: 'X', href: 'https://x.com/hometown', icon: XIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hometownkc/', icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/hometownkc/', icon: Instagram },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-cta-row">
        <div className="site-footer-cta-copy">
          <p className="site-footer-cta-eyebrow">Kansas City Websites</p>
          <h2>Ready to launch your first website?</h2>
          <p>Start with the form first. Prefer to talk now? Call us directly.</p>
        </div>
        <div className="site-footer-cta-actions">
          <a className="footer-pill footer-pill-primary" href="/contact">Start My Website</a>
          <TrackedPhoneLink
            className="footer-pill"
            href={`tel:${siteConfig.phoneE164}`}
            eventName="click_call_footer"
            location="site_footer"
          >
            Call {siteConfig.phoneDisplay}
          </TrackedPhoneLink>
        </div>
      </div>

      <div className="site-footer-top">
        <nav className="site-footer-nav" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <a className="footer-pill footer-pill-muted" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-social" aria-label="Social media links">
          {socialItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                className="site-footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                title={item.label}
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
        <p className="site-footer-meta">Kansas City businesses: websites first, then social media and logos.</p>
      </div>
    </footer>
  );
}
