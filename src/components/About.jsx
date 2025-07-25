import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getViewportSettings } from '../lib/utils';

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
      className="py-20 relative bg-white will-change-transform gpu-accelerated"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 64, 175, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 64, 175, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

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
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
            <span className="w-2 h-2 bg-neutral-500 rounded-full mr-2"></span>
            About Our Company
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-neutral-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          About{' '}
          <span className="text-neutral-700">
          ROPA FIESTA ELECTRICIAL AND
MECHANICAL EQUIPMENT
INSTALLATION LLC.
          </span>
        </motion.h2>

        <motion.p
          className="text-neutral-600 mb-12 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
         ROPA FIESTA ELECTRICIAL AND
MECHANICAL EQUIPMENT
INSTALLATION LLC. is a leading provider of integrated Mechanical, Hydraulic, Electrical, and Automation solutions based in Abu Dhabi. We are known for our unwavering commitment to innovation, precision engineering, and client-centric services. Leveraging modern technologies and deep industry expertise, we deliver fully customized solutions that help businesses enhance efficiency, reduce downtime, and meet their operational goals. From design to implementation, we prioritize{' '}
          <span className="text-neutral-800 font-semibold">quality, safety, and sustainability</span> in everything we do.
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
              className="flex flex-col items-center p-8 bg-neutral-50/50 backdrop-blur-sm rounded-xl border border-neutral-200/30 hover:bg-white hover:shadow-sm transition-all duration-200 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4 + i * 0.05, duration: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -2 }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                {feature.icon}
              </motion.div>
              <p className="font-semibold text-neutral-700 group-hover:text-neutral-800 transition-colors duration-200 text-base text-center">
                {feature.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats or CTA */}
        <motion.div
          className="mt-16 p-8 bg-neutral-50 rounded-2xl border border-neutral-200/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-neutral-600 mb-6 text-lg">
            Let's discuss how our engineering expertise can drive your business forward.
          </p>
          <Link to="/contacts">
            <motion.button
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-neutral-800 text-white shadow-sm hover:bg-neutral-900 transition-all duration-200"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}