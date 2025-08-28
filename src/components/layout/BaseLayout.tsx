import { BaseLayoutProps } from '@/types/navigation';
import Header from './Header';
import Footer from './Footer';
import TransitionProvider from '@/app/_transition/TransitionProvider';

export default function BaseLayout({ children, currentPage = '/' }: BaseLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header currentPage={currentPage} />
      <TransitionProvider className="pt-20">
        {children}
      </TransitionProvider>
      <Footer />
    </div>
  );
}
