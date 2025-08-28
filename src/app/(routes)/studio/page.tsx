import BaseLayout from '@/components/layout/BaseLayout';

export default function Studio() {
  return (
    <BaseLayout currentPage="/studio">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Studio.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're a creative studio focused on branding, web design, and digital marketing. 
              Our team brings together expertise in design, development, and strategy.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-4">001</div>
              <h3 className="text-xl font-semibold text-white mb-4">Web Design and Development</h3>
              <p className="text-gray-400">Custom websites and web applications built with modern technologies.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-4">002</div>
              <h3 className="text-xl font-semibold text-white mb-4">Social Media Marketing</h3>
              <p className="text-gray-400">Strategic social media campaigns that build brand awareness and engagement.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-4">003</div>
              <h3 className="text-xl font-semibold text-white mb-4">SEO and Content Marketing</h3>
              <p className="text-gray-400">Search engine optimization and content strategies that drive organic traffic.</p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <div className="text-4xl font-bold text-white mb-4">004</div>
              <h3 className="text-xl font-semibold text-white mb-4">Branding and Identity</h3>
              <p className="text-gray-400">Complete brand identity systems including logos, guidelines, and visual assets.</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
