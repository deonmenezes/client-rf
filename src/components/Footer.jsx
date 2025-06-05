import React from "react";
import { motion } from 'framer-motion';
import logo from "../assets/logo69.jpg"


export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 md:px-20 py-16 font-[Manrope]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      <motion.div
        className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
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
              className="h-16 w-16 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-xl font-bold text-white">RF Electromech</h2>
              <p className="text-green-400 text-sm font-medium">Services</p>
            </div>
          </div>
          <p className="text-gray-300 text-base leading-7 mb-6">
            RF Electromech Services is a trusted provider of electrical and mechanical 
            engineering solutions in Abu Dhabi, UAE.
          </p>
          <p className="text-gray-400 text-sm leading-6">
            We deliver high-quality, reliable services to meet your industrial and 
            commercial needs with precision and excellence.
          </p>
          
          {/* Social Links Placeholder */}
          <div className="flex space-x-4 mt-6">
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors cursor-pointer">
              <span className="text-green-400 text-sm">f</span>
            </div>
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors cursor-pointer">
              <span className="text-green-400 text-sm">in</span>
            </div>
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center hover:bg-green-500/30 transition-colors cursor-pointer">
              <span className="text-green-400 text-sm">@</span>
            </div>
          </div>
        </motion.div>

        {/* Middle: Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-green-500/30 pb-2">
                Main Menu
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium border-l-2 border-green-500 pl-3">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Our Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 text-white border-b border-green-500/30 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white hover:pl-3 transition-all text-sm">
                    Contacts
                  </a>
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
            <h3 className="text-lg font-bold mb-6 text-white border-b border-green-500/30 pb-2">
              Contact Us
            </h3>
            
            {/* Address */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Address</h4>
              <p className="text-gray-400 text-sm leading-6">
                Shop 5 - M37<br />
                Abu Dhabi, UAE
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Phone</h4>
              <div className="space-y-1">
                <p className="text-sm">
                  <a href="tel:+971563220189" className="text-green-400 hover:text-green-300 transition-colors">
                    +971 563 220 189
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+971564862202" className="text-green-400 hover:text-green-300 transition-colors">
                    +971 564 862 202
                  </a>
                </p>
                <p className="text-sm">
                  <a href="tel:+971544588384" className="text-green-400 hover:text-green-300 transition-colors">
                    +971 544 588 384
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Email</h4>
              <a 
                href="mailto:support@rfelectromechservices.com" 
                className="text-green-400 hover:text-green-300 transition-colors text-sm break-all"
              >
                support@rfelectromechservices.com
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-lg font-bold mb-3 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4 leading-6">
              Subscribe to our newsletter to get the latest updates, industry insights, and exclusive offers.
            </p>
            <motion.div
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <motion.button
                className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="border-t border-gray-700 mt-12 pt-8"
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
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 RF Electromech Services. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}