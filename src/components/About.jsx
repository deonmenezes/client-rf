import { motion } from 'framer-motion';
import { WavyBackground } from './ui/WavyBackground';

const features = [
  {
    icon: (
      <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
    ),
    label: 'Strategy Planning',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 18h16"/></svg>
    ),
    label: 'Innovative Design',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
    ),
    label: 'Product Analysis',
  },
  {
    icon: (
      <svg className="h-12 w-12 text-green-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16"/></svg>
    ),
    label: 'High Security',
  },
];

export default function About() {
  return (
    <motion.section
      className="py-16 relative"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      <WavyBackground 
        containerClassName="py-16" 
        colors={[
          '#22c55e',   // Vibrant green
          '#4ade80',   // Lighter green
          '#3b82f6',   // Bright blue
          '#8b5cf6'    // Purple
        ]} 
        waveWidth={50}
        backgroundFill="#f0f9ff"
        blur={15}
        waveOpacity={0.6}
        speed="slow"
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          <motion.div
            className="mx-auto mb-4 flex items-center justify-center"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 80 }}
          >
            <svg className="text-green-500 h-12 w-12 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            About Ropa Fiesta
          </motion.h2>
          <motion.p
            className="text-gray-700 mb-10 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            ROPA FIESTA is a leading provider of integrated Mechanical, Hydraulic, Electrical, and Automation solutions based in Abu Dhabi. We are known for our unwavering commitment to innovation, precision engineering, and client-centric services. Leveraging modern technologies and deep industry expertise, we deliver fully customized solutions that help businesses enhance efficiency, reduce downtime, and meet their operational goals. From design to implementation, we prioritize quality, safety, and sustainability in everything we do.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-8 flex-wrap"
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
                className="flex flex-col items-center mb-4 bg-white/80 rounded-xl shadow-md px-6 py-6 mx-2 min-w-[160px] hover:shadow-green-200 transition-shadow group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.7, type: 'spring', stiffness: 80 }}
                whileHover={{ scale: 1.08, boxShadow: '0 0 32px #22c55e55' }}
              >
                <motion.div
                  className="mb-2"
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  {feature.icon}
                </motion.div>
                <p className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300 text-base mt-2">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </WavyBackground>
    </motion.section>
  );
}
