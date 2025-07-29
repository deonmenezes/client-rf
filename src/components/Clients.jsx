import { motion } from "framer-motion";
import { getViewportSettings } from '../lib/utils';
import client1 from "../assets/client1.jpeg"
//import client2 from "../assets/client2.jpeg"
import client3 from "../assets/client3.jpeg"
//import client4 from "../assets/client4.jpeg"
import client5 from "../assets/client5.jpeg"
import client6 from "../assets/client6.jpeg"
import client7 from "../assets/client7.png"
import client8 from "../assets/client8.png"
import client9 from "../assets/client9.jpeg"
import client11 from "../assets/client11.jpg"
import client12 from "../assets/client12.png"
//import client13 from "../assets/client13.jpeg"
import client14 from "../assets/client14.jpeg"
import client15 from "../assets/client15.png"
import { useNavigate } from 'react-router-dom';

const clients = [
  { 
    name: "Oil & Gas Sector", 
    serviceId: "hydraulic-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V19h2v7.949c5.16-.21 9-4.399 9-9.949V7l-10-5z"/>
      </svg>
    )
  },
  { 
    name: "Marine", 
    serviceId: "pneumatic-systems",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 12C5.67 12 5 12.67 5 13.5S5.67 15 6.5 15 8 14.33 8 13.5 7.33 12 6.5 12M17.5 12C16.67 12 16 12.67 16 13.5S16.67 15 17.5 15 19 14.33 19 13.5 18.33 12 17.5 12M9.84 8.16L8.5 9.5L10.19 11.19C10.07 11.61 10 12.05 10 12.5C10 13.14 10.12 13.75 10.34 14.31L2.5 22.14L3.86 23.5L11.69 15.66C12.25 15.88 12.86 16 13.5 16S14.75 15.88 15.31 15.66L23.14 23.5L24.5 22.14L16.66 14.31C16.88 13.75 17 13.14 17 12.5C17 12.05 16.93 11.61 16.81 11.19L18.5 9.5L17.16 8.16L15.34 10C14.75 9.12 13.86 8.5 12.84 8.16V6H11.16V8.16C10.14 8.5 9.25 9.12 8.66 10L6.84 8.16Z"/>
      </svg>
    )
  },
  { 
    name: "Steel & Pipe Manufacturing", 
    serviceId: "fabrication-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V19h2v7.949c5.16-.21 9-4.399 9-9.949V7l-10-5z"/>
      </svg>
    )
  },
  { 
    name: "Aviation Sector", 
    serviceId: "automation-retrofitting",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    )
  },
  { 
    name: "Railways", 
    serviceId: "electrical-services",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
      </svg>
    )
  },
  { 
    name: "Construction & EPC Contractors", 
    serviceId: "maintenance-repair",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12H5V20H19V12H22L12 3M12 7.7L17 12V18H15V14H9V18H7V12L12 7.7Z"/>
      </svg>
    )
  },
  { 
    name: "Erection & Commissioning", 
    serviceId: "erection-commissioning",
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M12 21L10.91 14.74L2 14L10.91 13.26L12 7L13.09 13.26L22 14L13.09 14.74L12 21Z"/>
      </svg>
    )
  },
];

const clientCompanies = [
  {
    id: 1,
    logo: client1, // Placeholder - add your logo src here
   
  },
  {
    id: 3,
    logo: client3, // Placeholder - add your logo src here
  },
  {
    id: 5,
    logo: client5, // Placeholder - add your logo src here
  },
  {
    id: 6,
    logo: client6, // Placeholder - add your logo src here
  },
  {
    id: 7,
    logo: client7, // Placeholder - add your logo src here
  },
  {
    id: 9,
    logo: client8, // Placeholder - add your logo src here
  },
  {
    id: 10,
    logo: client9, // Placeholder - add your logo src here
  },
  {
    id: 11,
    logo: client11, // Placeholder - add your logo src here
  },
  {
    id: 12,
    logo: client12, // Placeholder - add your logo src here
  },
  {
    id: 14,
    logo: client14, // Placeholder - add your logo src here
  },

  {
    id: 15,
    logo: client15, // Placeholder - add your logo src here
  },
];

export default function Clients() {
  const navigate = useNavigate();

  const handleClientClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <motion.section
      className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 will-change-transform gpu-accelerated"
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 will-change-opacity"
          initial="hidden"
          whileInView="visible"
          viewport={getViewportSettings({ amount: 0.05 })}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
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
              Key Customers
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We proudly serve{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              diverse industries
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Providing tailored mechanical and electrical engineering solutions to match each industry's unique requirements.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-6 mb-20">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              className="group relative h-32 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer flex items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => handleClientClick(client.serviceId)}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 text-center px-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300 mx-auto mb-3">
                  {client.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-center">
                  {client.name}
                </h3>
                <motion.div 
                  className="mx-auto mt-2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                  initial={{ width: "20px" }}
                  whileHover={{ width: "40px" }}
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
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Trusted Partners
          </span>
          
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Companies We{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Work With
            </span>
          </h3>
        </motion.div>

        {/* Client Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {clientCompanies.map((company, idx) => (
            <motion.div
              key={company.id}
              className="group relative h-48 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
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
                      className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-400/30 flex items-center justify-center backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <span className="text-2xl font-bold bg-gradient-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {company.name.charAt(0)}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Company Info */}
                <div className="text-center">
                  <h4 className="text-gray-800 font-semibold mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {company.name}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {company.industry}
                  </p>
                  
                  {/* Bottom Accent */}
                  <motion.div 
                    className="mx-auto mt-3 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
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
