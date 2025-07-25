import { motion } from 'framer-motion';
import { getViewportSettings } from '../lib/utils';

const posts = [
  {
    category: 'Infrastructure',
    title: 'How modern steel fabrication is transforming urban infrastructure',
    date: '12',
    monthYear: "Jan '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog1.png',
    link: 'https://buyabeam.com/blogs/steel-beams/steel-high-rise-buildings/',
  },
  {
    category: 'Automation',
    title: 'Smart factories: The role of AI and IoT in manufacturing efficiency',
    date: '25',
    monthYear: "Feb '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog2.png',
    link: 'https://www.epicor.com/en-us/blog/industries/smart-factories-ai-iot-manufacturing/',
  },
  {
    category: 'Project Insights',
    title: 'Behind the build: Case study of a high-speed pipe manufacturing plant',
    date: '08',
    monthYear: "Mar '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog3.png',
    link: 'https://www.anylogic.com/blog/case-study-modeling-the-work-of-a-pipe-rolling-factory/',
  },
  {
    category: 'Sustainability',
    title: 'Eco-friendly practices in industrial welding and material usage',
    date: '17',
    monthYear: "Apr '24",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog4.png',
    link: 'https://blog.red-d-arc.com/environmental-sustainable-welding-practices/',
  },
];

export default function Blog() {
  return (
    <motion.div
      className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 md:px-20 text-gray-800 font-sans will-change-transform gpu-accelerated"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-lg rotate-45"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          rotate: [45, 60, 45]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Latest Insights
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Articles & blog posts{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              with useful information
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stay updated with the latest industry trends, technical insights, and project case studies from our engineering experts.
          </motion.p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                />
                
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 flex flex-col items-center">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-14 flex items-center justify-center rounded-lg shadow-lg backdrop-blur-sm">
                    <span className="text-white text-2xl font-bold">{post.date}</span>
                  </div>
                  <div className="bg-gray-800/90 w-16 h-6 flex items-center justify-center rounded-b-lg backdrop-blur-sm">
                    <span className="text-blue-200 text-xs font-medium">{post.monthYear}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-700 border border-blue-400/30 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1.5"></span>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-3">
                  {post.title}
                </h3>

                {/* Read More Indicator */}
                <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
                  <span>Read more</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>

                {/* Bottom Accent */}
                <motion.div 
                  className="mt-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-300"
                  initial={{ width: "20px" }}
                  whileHover={{ width: "60px" }}
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

       
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </motion.div>
  );
}