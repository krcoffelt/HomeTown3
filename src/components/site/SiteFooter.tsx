'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';
import type { ComponentType, SVGProps } from 'react';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

const footerLinks = [
  { label: '$800 Websites', href: '/#website-package' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

type SocialItem = {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const socialItems: SocialItem[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/hometown.kc/', icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61581320222706', icon: Facebook },
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
