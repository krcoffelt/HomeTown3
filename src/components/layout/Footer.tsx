'use client';

import Logo from '@/components/ui/Logo';
import Navigation from '@/components/ui/Navigation';
import { secondaryNavigation, contactInfo, legalLinks, socialLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-4" variant="header" />
            <p className="text-gray-400 mb-6 max-w-md">
              We're a creative studio focused on branding, web design, and digital marketing. 
              Let's build something amazing together.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>{contactInfo.phone}</p>
              <p>{contactInfo.email}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <Navigation items={secondaryNavigation} isMobile={true} />
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 fabrica® Studio. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span>Built in Framer</span>
            <span>•</span>
            <span>Created by Kyle Coffelt</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
