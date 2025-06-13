import { motion } from 'framer-motion';
import iso from "../assets/iso.jpg"
import iso2 from "../assets/iso2.jpg"

const features = [
  {
    id: "01",
    title: "Smart Control Systems",
    description:
      "Custom-designed controllers and automation panels tailored for energy systems, logistics, and public infrastructure.",
  },
  {
    id: "02",
    title: "Battery Management Expertise",
    description:
      "Advanced battery selection, integration, and lifecycle management for EVs, UPS, and hybrid energy systems.",
  },
  {
    id: "03",
    title: "Integrated Energy Monitoring",
    description:
      "Real-time energy data analysis and IoT-enabled monitoring for efficient power usage across verticals.",
  },
  {
    id: "04",
    title: "Tailored R&D and Prototyping",
    description:
      "Rapid prototyping and in-house testing of electronics and embedded systems to accelerate deployment cycles.",
  },
];

export default function Gallery() {
  return (
    <motion.section
      className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
              How we work
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Key Features
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Innovative solutions designed to power the future of energy and automation
          </motion.p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="group relative h-80 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Feature Number Background */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="text-8xl font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {feature.id}
                </div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Top Section */}
                <div>
                  {/* Decorative Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl border border-blue-400/30 text-blue-600 mb-6 backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 10 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  {/* Accent Line */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                    initial={{ width: "24px" }}
                    whileHover={{ width: "48px" }}
                  />

                  {/* Arrow Icon */}
                  <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Horizontal Scroll */}
        <div className="lg:hidden">
          <motion.div 
            className="overflow-x-auto pb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex gap-6 px-6 min-w-max">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.id}
                  className="w-80 sm:w-96 flex-shrink-0 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  {/* Feature Number */}
                  <div className="mb-6 relative">
                    <div className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent opacity-25">
                      {feature.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2">
              {features.map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-2 h-2 bg-blue-400/30 rounded-full"
                  whileHover={{ scale: 1.5, backgroundColor: "rgba(59, 130, 246, 0.8)" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ISO Certification Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } },
            }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-black mb-4 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              We are{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                ISO Certified
              </span>
              {' '}- 9001 & 14001
            </motion.h3>
          </motion.div>

          {/* ISO Certificates Grid */}
          <div className="grid gap-8 max-w-6xl mx-auto">
            {/* ISO 9001 Certificate */}
            <motion.div
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className="relative z-10 p-8">
                {/* Certificate Image */}
                <img 
                  src={iso} 
                  alt="ISO 9001:2015 Certificate" 
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>

            {/* ISO 14001 Certificate */}
            <motion.div
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className="relative z-10 p-8">
                {/* Certificate Image */}
                <img 
                  src={iso2} 
                  alt="ISO 14001:2015 Certificate" 
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"
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
    </motion.section>
  );
}