'use client';

import Header from './Header';
import Footer from './Footer';
import ScrollBlurOverlay from '@/components/ui/ScrollBlurOverlay';
import { useCurrentPage } from '@/lib/hooks/useCurrentPage';

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  const currentPage = useCurrentPage();
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} />
      {children}
      <Footer />
      <ScrollBlurOverlay />
    </div>
  );
}
