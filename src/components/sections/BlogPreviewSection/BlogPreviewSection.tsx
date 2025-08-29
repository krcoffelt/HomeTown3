'use client';

import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    date: "February 2, 2025",
    title: "How a well-designed website can transform your business",
    description: "Discover the latest design trends shaping the digital world and how they impact business.",
    url: "/blog/how-a-well-designed-website-can-transform-your-business"
  },
  {
    id: 2,
    date: "January 26, 2025",
    title: "The Psychology of Color in Branding",
    description: "Colors influence emotions and decisions. Here's how to use them strategically in branding.",
    url: "/blog/the-psychology-of-color-in-branding-how-it-shapes-perception-and-behavior"
  }
];

export default function BlogPreviewSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Newest trends and insights from our team.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed about our latest projects, trends, and industry insights.
          </p>
          <button className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
            See all
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* What's New Section */}
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-light text-gray-400">Hometown</span>
          </div>
          <div className="mb-8">
            <h3 className="text-3xl font-semibold text-white mb-2">
              What's new
            </h3>
            <p className="text-xl text-gray-300">
              in digital?
            </p>
          </div>
          
          {/* Placeholder for image */}
          <div className="w-full max-w-2xl mx-auto h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              Person using MacBook with overlay text
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
