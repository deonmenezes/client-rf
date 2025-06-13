import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: (
      <svg className="h-12 w-12 text-cyan-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Strategy Planning',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-cyan-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
      </svg>
    ),
    label: 'Innovative Design',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-cyan-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: 'Product Analysis',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-cyan-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'High Security',
  },
];

export default function About() {
  return (
    <motion.section
      id="about"
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

      <motion.div
        className="max-w-6xl mx-auto px-4 text-center relative z-10"
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
            About Our Company
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-black mb-6 text-gray-800 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          About{' '}
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
          ROPA FIESTA ELECTRICIAL AND
MECHANICAL EQUIPMENT
INSTALLATION LLC.
          </span>
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
         ROPA FIESTA ELECTRICIAL AND
MECHANICAL EQUIPMENT
INSTALLATION LLC. is a leading provider of integrated Mechanical, Hydraulic, Electrical, and Automation solutions based in Abu Dhabi. We are known for our unwavering commitment to innovation, precision engineering, and client-centric services. Leveraging modern technologies and deep industry expertise, we deliver fully customized solutions that help businesses enhance efficiency, reduce downtime, and meet their operational goals. From design to implementation, we prioritize{' '}
          <span className="text-blue-600 font-semibold">quality, safety, and sustainability</span> in everything we do.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              className="flex flex-col items-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.7, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >
                {feature.icon}
              </motion.div>
              <p className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-base text-center">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats or CTA */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl border border-blue-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Let's discuss how our engineering expertise can drive your business forward.
          </p>
          <Link to="/contacts">
            <motion.button
              className="px-8 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-500/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

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