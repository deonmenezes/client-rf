import React from "react";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpg"

export default function Footer() {
  return (
    <motion.footer
      className="py-20 relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white px-6 md:px-20 font-[Manrope]"
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
        className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Left: Logo & Description */}
        <motion.div
          className="lg:pr-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="flex items-center space-x-4 mb-6">
            <img
              src={logo}
              alt="RF Electromech Services Logo"
              className="h-20 w-20 rounded-sm shadow-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-white">
              ROPA FIESTA ELECTRCIAL AND MECHANICAL EQUIPMENT INSTALLATION LLC.</h2>
              <p className="text-blue-300 text-sm font-medium">Services</p>
            </div>
          </div>
          <p className="text-blue-200 text-base leading-7 mb-6">
            RF Electromech Services is a trusted provider of electrical and mechanical 
            engineering solutions in Abu Dhabi, UAE.
          </p>
          <p className="text-blue-300 text-sm leading-6">
            We deliver high-quality, reliable services to meet your industrial and 
            commercial needs with precision and excellence.
          </p>
          
          {/* Social Links */}
         
        </motion.div>

        {/* Middle: Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
                Main Menu
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/" end className={({ isActive }) => `text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium border-l-2 border-blue-400 pl-3 ${isActive ? 'font-bold' : ''}`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/#about" className="text-blue-200 hover:text-white hover:pl-3 transition-all text-sm">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/services" className={({ isActive }) => `text-blue-200 hover:text-white hover:pl-3 transition-all text-sm ${isActive ? 'font-bold text-blue-300' : ''}`}>Services</NavLink>
                </li>
                <li>
                  <NavLink to="/projects" className={({ isActive }) => `text-blue-200 hover:text-white hover:pl-3 transition-all text-sm ${isActive ? 'font-bold text-blue-300' : ''}`}>Our Projects</NavLink>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink to="/blog" className={({ isActive }) => `text-blue-200 hover:text-white hover:pl-3 transition-all text-sm ${isActive ? 'font-bold text-blue-300' : ''}`}>Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts" className={({ isActive }) => `text-blue-200 hover:text-white hover:pl-3 transition-all text-sm ${isActive ? 'font-bold text-blue-300' : ''}`}>Contacts</NavLink>
                </li>
                
               
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Info & Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="space-y-8"
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-b border-blue-400/30 pb-2">
              Contact Us
            </h3>
            
            {/* Address */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-blue-200 mb-2">Address</h4>
              <p className="text-blue-300 text-sm leading-6">
                Shop 5 - M37<br />
                Abu Dhabi, UAE
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-blue-200 mb-2">Phone</h4>
              <div className="space-y-1">
                <p className="text-sm">
                  <a href="tel:+971563220189" className="text-blue-300 hover:text-blue-200 transition-colors">
                    +971 563 220 189
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+971564862202" className="text-blue-300 hover:text-blue-200 transition-colors">
                    +971 564 862 202
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+971544588384" className="text-blue-300 hover:text-blue-200 transition-colors">
                    +971 544 588 384
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-blue-200 mb-2">Email</h4>
              <a 
                href="mailto:support@rfelectromechservices.com" 
                className="text-blue-300 hover:text-blue-200 transition-colors text-sm break-all"
              >
                support@rfelectromechservices.com
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
        
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-t border-blue-700 mt-12 pt-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Bottom Section */}
        <motion.div
          className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <p className="text-blue-300 mb-4 md:mb-0">
            © 2025 RF Electromech Services. All Rights Reserved.
          </p>
         
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
    </motion.footer>
  );
}