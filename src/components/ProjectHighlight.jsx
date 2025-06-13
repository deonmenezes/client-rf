import { motion } from 'framer-motion';

export default function ProjectHighlight() {
  return (
    <motion.div
      className="relative w-full h-[748px] bg-blue-50 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      {/* Animated Background Image */}
      <motion.img
        src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052774/Website_demo/bridge_bk.png"
        alt="Structure"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* White & Blue blocks overlapping at the top left */}
      <motion.div
        className="absolute top-0 left-[330px]"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
      >
        <div className="w-36 h-32 bg-white relative z-10 shadow-lg" />
        <div className="w-36 h-32 bg-blue-600 absolute -top-[129px] left-0 z-0" />
      </motion.div>

      {/* Testimonial Card */}
      <motion.div
        className="relative z-20 max-w-2xl bg-white/90 p-10 text-gray-800 ml-auto mt-40 mr-[200px] shadow-2xl rounded-2xl backdrop-blur-lg border border-blue-200/50"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8, type: 'spring', stiffness: 60 }}
      >
        {/* Quotation Icon */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5, type: 'spring', stiffness: 120 }}
        >
          <div className="w-11 h-10 bg-blue-600 rounded-lg shadow-lg" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-6 leading-snug drop-shadow-lg text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          Project Highlights
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-lg leading-loose mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          Our team successfully completed the full-scale electrical and mechanical installation for
          the new GalvaTech Pipe Manufacturing Plant in Gujarat. The project involved integration of
          high-capacity hydraulic lines, automated control panels, and retrofitting of existing
          fabrication systems. Despite tight deadlines, we ensured zero downtime and full client
          satisfaction.
        </motion.p>

        {/* Author */}
        <motion.p
          className="text-lg font-semibold text-blue-600"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Mr. Rajeev Menon / Operations Director, GalvaTech Pvt. Ltd.
        </motion.p>
      </motion.div>

      {/* Pagination Dots */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-28 bg-white flex items-center justify-end pr-[390px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <div className="flex gap-4">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === 0 ? 'border border-blue-600 bg-blue-600' : 'bg-blue-200'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5 + i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={i !== 0 ? { scale: 1.2, backgroundColor: '#3b82f6' } : {}}
            />
          ))}
        </div>
      </motion.div>

      {/* Blue Bottom Stripe */}
      <motion.div
        className="absolute bottom-0 right-[200px] w-[672px] h-28 bg-blue-600 z-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.7, type: 'spring' }}
      />
    </motion.div>
  );
}
