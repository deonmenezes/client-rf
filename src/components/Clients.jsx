import { motion } from "framer-motion";

import NImage from "../assets/N.png"

const clients = [
  "Steel & Pipe Manufacturing",
  "Marine",
  "Construction",
  "EPC Contractors",
];

export default function Clients() {
  return (
    <motion.div
      className="bg-white text-gray-800 py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: "spring", stiffness: 60 }}
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.p 
          className="text-green-500 text-sm font-medium uppercase mb-2 tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Key Customers
        </motion.p>
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We proudly serve a wide range of industries
        </motion.h2>
        <motion.p 
          className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Providing tailored mechanical and electrical engineering solutions to
          match each industry's unique requirements.
        </motion.p>
        <motion.div 
          className="mt-6 w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full shadow-lg shadow-green-500/30"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </div>

      {/* Clients List */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            className="group bg-gradient-to-br from-gray-50 to-gray-100 hover:from-green-50 hover:to-green-100 transition-all duration-500 px-6 py-8 rounded-xl shadow-md hover:shadow-xl hover:shadow-green-500/10 border border-gray-200/50 hover:border-green-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.15, duration: 0.6, type: "spring", stiffness: 80 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-700 group-hover:text-gray-800 transition-colors">
                {client}
              </p>
              <div className="w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
            </div>
            <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500 rounded-full"></div>
          </motion.div>
        ))}
      </div>

      {/* Companies Image Banner */}
      <motion.div
        className="mt-20 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {/* Section Divider */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <motion.p 
            className="text-green-500 text-sm font-medium uppercase mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Trusted Partners
          </motion.p>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            Companies We Work With
          </motion.h3>
        </div>

        {/* Image Container */}
        <motion.div
          className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Gradient Overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
          
          {/* Main Image */}
          <div className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64">
            <img
              src={NImage}
              alt="Companies and partners we work with"
              className="w-full h-full object-cover object-center filter hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Optional overlay content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20">
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <p className="text-gray-800 font-semibold text-sm">Our Valued Partners</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}