import { motion } from 'framer-motion';
import { getViewportSettings } from '../lib/utils';
import { useResponsiveViewport } from '../lib/hooks';


const cards = [
  {
    id: '01',
    title: 'Energy Storage Solutions',
    img: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051470/Website_demo/ant1.png',
  },
  {
    id: '02',
    title: 'BMS & Thermal',
    img: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051498/Website_demo/ant2.png',
  },
  {
    id: '03',
    title: 'EV Battery Solutions',
    img: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051522/Website_demo/ant3.png',
  },
  {
    id: '04',
    title: 'Custom Energy Systems',
    img: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051548/Website_demo/ant4.png',
  },
];

export default function Services() {
  // Use our responsive viewport hook for better animation triggers
  const responsiveViewport = useResponsiveViewport();
  
  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 px-6 py-20 overflow-x-hidden text-gray-800 font-sans relative overflow-hidden will-change-transform gpu-accelerated"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 mb-16 will-change-opacity"
        initial="hidden"
        whileInView="visible"
        viewport={getViewportSettings({ amount: 0.05 })}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 80 }}
          className="will-change-transform"
        >
          <motion.p
            className="text-blue-600 font-bold uppercase tracking-wide mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Our Expertise
          </motion.p>
          <motion.h2
            className="text-4xl font-extrabold text-gray-800 leading-tight mb-2 drop-shadow-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Advanced Battery & Energy Storage Systems
          </motion.h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 80 }}
          className="will-change-transform"
        >
          <motion.p
            className="text-lg font-semibold text-blue-600 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            We specialize in energy storage solutions, EV battery pack design, BMS development, and
            power management systems tailored for industries like EVs, agriculture, and solar.
          </motion.p>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            From public infrastructure to last-mile delivery and customized energy systems,
            we deliver performance-driven, safe, and scalable solutions for a sustainable future.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 will-change-transform"
        initial="hidden"
        whileInView="visible"
        viewport={getViewportSettings({ amount: 0.05 })}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            className="relative bg-white/80 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-400/20 transition-shadow duration-300 flex flex-col border border-blue-200/50 backdrop-blur-lg z-10 will-change-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={getViewportSettings({ amount: 0.05 })}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute top-6 left-6 text-blue-600 text-5xl font-bold z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={getViewportSettings({ amount: 0.05 })}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
            >
              {card.id}
            </motion.div>
            
            <div className="relative flex-grow">
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-56 sm:h-60 md:h-64 object-cover rounded-t-xl"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />
            </div>
            
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white p-4 flex justify-between items-center w-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={getViewportSettings({ amount: 0.05 })}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
            >
              <p className="text-lg font-bold">{card.title}</p>
              <motion.span
                className="text-white text-2xl"
                whileHover={{ rotate: 45 }}
                transition={{ type: 'spring', stiffness: 120 }}
              >↗</motion.span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
