import { motion } from "framer-motion";
import client1 from "../assets/client1.jpeg"
import client2 from "../assets/client2.jpeg"
import client3 from "../assets/client3.jpeg"
import client4 from "../assets/client4.jpeg"
import client5 from "../assets/client5.jpeg"
const clients = [
  "Steel & Pipe Manufacturing",
  "Marine",
  "Construction",
  "EPC Contractors",
];

const clientCompanies = [
  {
    id: 1,
    logo: client1, // Placeholder - add your logo src here
   
  },
  {
    id: 2,
    logo: client2, // Placeholder - add your logo src here
   
  },
  {
    id: 3,
    logo: client3, // Placeholder - add your logo src here
  },
  {
    id: 4,
    logo: client4, // Placeholder - add your logo src here
  },
  {
    id: 5,
    logo: client5, // Placeholder - add your logo src here
  }
];

export default function Clients() {
  return (
    <motion.section
      className="py-20 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-xl"
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
        className="absolute bottom-32 left-16 w-24 h-24 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-lg rotate-45"
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
            <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Key Customers
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We proudly serve{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              diverse industries
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Providing tailored mechanical and electrical engineering solutions to match each industry's unique requirements.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="group relative h-32 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center p-6">
                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-10 h-10 bg-cyan-500/20 rounded-xl border border-cyan-400/30 text-cyan-300 mb-3 backdrop-blur-sm group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all duration-300 mx-auto"
                  whileHover={{ rotate: 10 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>

                {/* Title */}
                <h3 className="text-center text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {client}
                </h3>

                {/* Bottom Accent */}
                <motion.div 
                  className="mx-auto mt-3 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all duration-300"
                  initial={{ width: "16px" }}
                  whileHover={{ width: "32px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
            Trusted Partners
          </span>
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
            Companies We{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h3>
        </motion.div>

        {/* Client Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {clientCompanies.map((company, idx) => (
            <motion.div
              key={company.id}
              className="group relative h-48 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              {/* Logo Container */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                {/* Logo Placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  {company.logo ? (
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="max-w-full max-h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl border border-purple-400/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-br from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {company.name.charAt(0)}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Company Info */}
                <div className="text-center">
                  <h4 className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors duration-300">
                    {company.name}
                  </h4>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {company.industry}
                  </p>
                  
                  {/* Bottom Accent */}
                  <motion.div 
                    className="mx-auto mt-3 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full transition-all duration-300"
                    initial={{ width: "20px" }}
                    whileHover={{ width: "40px" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl"
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
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
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