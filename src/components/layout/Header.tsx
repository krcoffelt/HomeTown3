'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/ui/Logo';
import Navigation from '@/components/ui/Navigation';
import { HeaderProps } from '@/types/navigation';
import { primaryNavigation, secondaryNavigation, contactInfo, legalLinks } from '@/data/navigation';

export default function Header({ currentPage = '/' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo variant="header" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Primary Navigation */}
            <Navigation items={primaryNavigation} currentPage={currentPage} />
            
            {/* Contact Information */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-gray-800">
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation */}
              <Navigation items={secondaryNavigation} currentPage={currentPage} isMobile={true} />
              
              {/* Mobile Contact Information */}
              <div className="space-y-3 text-sm text-gray-400">
                <a href={`tel:${contactInfo.phone}`} className="block hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
                <a href={`mailto:${contactInfo.email}`} className="block hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex space-x-4 text-xs text-gray-500">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
