export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Blog.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Insights, tips, and stories from our creative studio on design, development, and digital marketing.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-sm text-gray-400 mb-3">Design • 2 days ago</div>
              <h3 className="text-xl font-semibold text-white mb-3">The Future of Brand Identity Design</h3>
              <p className="text-gray-400 mb-4">Exploring emerging trends and technologies that are shaping the future of brand identity design.</p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Read more →</a>
            </article>
            
            <article className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-sm text-gray-400 mb-3">Development • 1 week ago</div>
              <h3 className="text-xl font-semibold text-white mb-3">Building Scalable Web Applications</h3>
              <p className="text-gray-400 mb-4">Best practices and architectural patterns for building web applications that scale with your business.</p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Read more →</a>
            </article>
            
            <article className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <div className="text-sm text-gray-400 mb-3">Marketing • 2 weeks ago</div>
              <h3 className="text-xl font-semibold text-white mb-3">SEO Strategies for 2025</h3>
              <p className="text-gray-400 mb-4">Updated SEO strategies and techniques to improve your website's search engine rankings.</p>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Read more →</a>
            </article>
          </div>
      </div>
    </div>
  );
}
