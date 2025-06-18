import React, { useState } from 'react';
import { Menu, X, Home, Wrench, Briefcase, FileText, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const navLinks = [
  { label: 'Home', to: '/', icon: <Home className="w-5 h-5 mr-2" /> },
  { label: 'Services', to: '/services', icon: <Wrench className="w-5 h-5 mr-2" /> },
  { label: 'Projects', to: '/projects', icon: <Briefcase className="w-5 h-5 mr-2" /> },
  { label: 'Blog', to: '/blog', icon: <FileText className="w-5 h-5 mr-2" /> },
  { label: 'Contacts', to: '/contacts', icon: <Phone className="w-5 h-5 mr-2" /> },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className="w-full h-24 fixed top-0 left-0 z-50 bg-blue-900/95 backdrop-blur-xl border-b border-blue-400/20 shadow-lg flex items-center justify-between px-4 md:px-12 font-manrope"
    >
      {/* Logo & Company Title */}
      <div className="flex items-center gap-4 z-50 relative">
        <motion.div whileTap={{ scale: 0.85 }} className="md:hidden">
          {mobileOpen ? (
            <X className="w-7 h-7 text-blue-300 cursor-pointer" onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 text-blue-300 cursor-pointer" onClick={() => setMobileOpen(true)} />
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="/">
            <img src={logo} alt="Logo" className="w-20 h-20 rounded-sm object-fill shadow-lg" />
          </Link>
        </motion.div>
        
        {/* Company Title - Responsive */}
        <div className="block flex-1 min-w-0">
          <Link to="/" className="flex flex-col">
            <span className="text-white font-bold text-xs sm:text-sm lg:text-base leading-tight truncate">
              ROPA FIESTA
            </span>
            <span className="text-blue-300 font-semibold text-xs leading-tight sm:block truncate">
              ELECTRICAL & MECHANICAL
            </span>
            <span className="text-blue-200 font-medium text-xs leading-tight lg:block truncate">
           EQUIPMENT INSTALLATION LLC.
            </span>
          </Link>
        </div>
      </div>

      {/* Centered Navigation Bar */}
      <div className="hidden md:flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-4 ml-14">
        <div className="flex items-center gap-2 w-full max-w-[820px] bg-blue-800/80 backdrop-blur-lg border border-blue-400/30 rounded-full px-4 py-2 shadow-md justify-between">
          <div className="flex gap-1">
            {navLinks.slice(0, -1).map((link, i) => (
              <motion.div
                key={link.label}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive ? 'text-white bg-blue-600' : 'text-blue-200 hover:bg-blue-700 hover:text-white'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Gradient "Say Hello" Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 shadow-md"
          >
            <div className="bg-blue-900 rounded-full px-5 py-2 text-sm font-medium text-white">
              <Link to="/contacts">Get in touch</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 h-screen w-[82vw] max-w-sm bg-blue-900/95 backdrop-blur-2xl border-l border-blue-400/20 z-[100] p-8 pt-10 flex flex-col gap-10"
          >
            <div className="flex justify-between items-center">
              
              <X className="w-7 h-7 text-blue-300 cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center text-base font-semibold px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive ? 'text-blue-300' : 'text-blue-200 hover:text-blue-300'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-white px-5 py-3 rounded-lg font-semibold shadow-lg"
              onClick={() => setMobileOpen(false)}
            >
              <Link to="/contacts">Get In Touch</Link>
            </motion.button>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
