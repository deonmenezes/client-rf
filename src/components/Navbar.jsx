import React, { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo69.jpg"

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contacts', href: '#' },
];

const Navbar = ({ onNavigate, activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Animation variants
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 12 } },
  };
  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
  };
  const mobileMenuVariants = {
    closed: { x: '100%' },
    open: { x: 0, transition: { type: 'spring', stiffness: 60, damping: 15 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full h-20 fixed top-0 left-0 z-50 bg-white/60 backdrop-blur-lg shadow-lg flex items-center justify-between px-4 md:px-10 border-b border-white/20"
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
    >
      {/* Left: Hamburger and Logo */}
      <div className="flex items-center gap-4">
        {/* Hamburger for mobile */}
        <motion.div
          whileTap={{ scale: 0.85 }}
          className="md:hidden"
        >
          {mobileOpen ? (
            <X className="w-7 h-7 text-green-600 cursor-pointer" onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 text-green-600 cursor-pointer" onClick={() => setMobileOpen(true)} />
          )}
        </motion.div>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.12, rotate: -3 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 drop-shadow-lg rounded-xl"
          />
          
        </motion.div>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex gap-10 items-center">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href="#"
            custom={i}
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.13, color: '#22c55e' }}
            className={`relative text-lg font-medium transition-colors duration-300 px-2 group ${activeSection === link.label ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
            onClick={e => {
              e.preventDefault();
              onNavigate && onNavigate(link.label);
              setMobileOpen(false);
            }}
          >
            {link.label}
            <motion.span
              layoutId="underline"
              className={`block h-0.5 bg-green-500 absolute left-0 -bottom-1 rounded-full ${activeSection === link.label ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'}`}
            />
          </motion.a>
        ))}
      </nav>

      {/* Right: Search and Button */}
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.07, boxShadow: '0 0 16px #22c55e' }}
          whileTap={{ scale: 0.96 }}
          className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-base hidden md:block focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 glow-btn"
          onClick={() => onNavigate && onNavigate('Contacts')}
        >
          Get In Touch
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 w-[80vw] max-w-xs h-screen bg-white/90 backdrop-blur-xl shadow-2xl z-[100] flex flex-col p-8 gap-8"
          >
            <div className="flex justify-between items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -3 }}
                className="flex items-center gap-2"
              >
                <img
                  src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052925/Website_demo/nexus_logo.png"
                  alt="Logo"
                  className="w-8 h-8"
                />
                <span className="text-xl font-extrabold text-green-600 tracking-wide">NEXUS</span>
              </motion.div>
              <X className="w-7 h-7 text-green-600 cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href="#"
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: 0.1 + i * 0.07 } }}
                  exit={{ x: 40, opacity: 0 }}
                  whileHover={{ scale: 1.08, color: '#22c55e' }}
                  className={`text-lg font-semibold px-2 py-1 rounded transition-colors duration-300 ${activeSection === link.label ? 'text-green-500' : 'text-gray-700 hover:text-green-500'}`}
                  onClick={e => {
                    e.preventDefault();
                    onNavigate && onNavigate(link.label);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: '0 0 16px #22c55e' }}
              whileTap={{ scale: 0.96 }}
              className="mt-10 bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
              onClick={() => onNavigate && onNavigate('Contacts')}
            >
              Get In Touch
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
