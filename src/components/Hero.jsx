import { motion } from 'framer-motion';

const heading = [
  'Powering Progress with Engineering Excellence',
  'Cutting-Edge Automation & Energy Solutions',
];

export default function Hero() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background Image */}
      <motion.div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          src="http://rfelectromechservices.com/wp-content/uploads/2024/04/RF_BANNER7.jpg"
          alt="Background"
          className="absolute w-full h-full object-cover object-center z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ minWidth: '100%', minHeight: '100%' }}
        />
      </motion.div>
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-l from-black/0 to-emerald-950 opacity-70 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 1.2 }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto h-screen mt-24 md:mt-40">
        {/* Animated Heading (split lines) */}
        <motion.h1
          className="text-white text-2xl md:text-[50px] font-extrabold tracking-wide leading-snug max-w-3xl mb-2 drop-shadow-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {heading.map((line, i) => (
            <motion.span
              key={i}
              className="block relative"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2, type: 'spring', stiffness: 60 }}
            >
              <span className="text-white">
                {line}
              </span>
            </motion.span>
          ))}
        </motion.h1>
        {/* Animated Paragraph */}
        <motion.p
          className="mt-6 text-white text-base md:text-[18px] max-w-xl leading-loose drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          At ROPA FIESTA, we specialize in delivering advanced engineering, automation, and energy storage solutions tailored to industrial demands. Our mission is to foster innovation, optimize performance, and enable sustainability for businesses across the globe.
        </motion.p>
        {/* Animated Button */}
        <motion.button
          className="mt-8 flex items-center gap-3 border-2 border-green-400 px-8 py-4 text-white font-semibold text-lg rounded-full shadow-xl bg-gradient-to-r from-emerald-600/80 to-green-500/80 hover:from-green-500 hover:to-emerald-600 transition relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-400 hero-btn-glow"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.07, boxShadow: '0 0 32px #22c55e' }}
        >
          Explore more
          <motion.div
            className="w-5 h-5 bg-white rounded-full shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.7, type: 'spring', stiffness: 120 }}
            whileHover={{ scale: 1.2, backgroundColor: '#22c55e' }}
          />
        </motion.button>
      </div>

      {/* Side Number Navigation */}
      <motion.div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 space-y-10 z-30 hidden md:block"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7, type: 'spring', stiffness: 60 }}
      >
        <motion.div className="text-zinc-400 font-bold text-lg tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>01</motion.div>
        <motion.div className="w-px h-16 bg-gray-400 relative overflow-hidden">
          <motion.div
            className="w-px h-8 bg-green-500 absolute bottom-0 left-0"
            initial={{ height: 0 }}
            animate={{ height: '2rem' }}
            transition={{ delay: 1.4, duration: 0.7, type: 'spring' }}
          />
        </motion.div>
        <motion.div className="text-zinc-400 font-bold text-lg tracking-wider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>03</motion.div>
      </motion.div>

      {/* Custom button glow effect */}
      <style>{`
        .hero-btn-glow {
          box-shadow: 0 0 24px 0 #22c55e55, 0 0 80px 0 #22c55e22;
        }
      `}</style>
    </div>
  );
}
