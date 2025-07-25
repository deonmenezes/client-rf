// Navbar.jsx
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
      // Increased height (e.g., h-28 or h-32) and changed background to white (bg-white)
      className="w-full h-28 fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200 flex items-center justify-between px-4 md:px-12"
    >
      {/* Remove the white fade at bottom as the navbar will be white */}
      {/* <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-[-1]" /> */}

      {/* Logo and hamburger */}
      <div className="flex items-center gap-4 z-50 relative">
        <motion.div whileTap={{ scale: 0.85 }} className="md:hidden">
          {mobileOpen ? (
            <X className="w-7 h-7 text-blue-500 cursor-pointer" onClick={() => setMobileOpen(false)} />
          ) : (
            <Menu className="w-7 h-7 text-blue-500 cursor-pointer" onClick={() => setMobileOpen(true)} />
          )}
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-20 max-h-16 object-contain rounded-sm"
            />
          </Link>
        </motion.div>
        <div className="block flex-1 min-w-0">
          <Link to="/" className="flex flex-col">
            <span className="text-slate-800 font-bold text-xs sm:text-sm lg:text-base leading-tight truncate">
              ROPA FIESTA
            </span>
            <span className="text-blue-700 font-semibold text-xs leading-tight sm:block truncate">
              ELECTRICAL & MECHANICAL
            </span>
            <span className="text-slate-600 font-medium text-xs leading-tight lg:block truncate">
              EQUIPMENT INSTALLATION LLC.
            </span>
          </Link>
        </div>
      </div>

      {/* Center nav links */}
      <div className="hidden md:flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full px-4 ml-14">
        {/* Changed background of this div to white, removed backdrop-blur and border for a cleaner look */}
        <div className="flex items-center gap-2 w-full max-w-[820px] bg-white rounded-full px-4 py-2 shadow-sm justify-between">
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
                      isActive ? 'text-white bg-blue-600' : 'text-slate-700 hover:bg-blue-50 hover:text-blue-700'
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-blue-600 to-blue-700 shadow-sm"
          >
            <div className="bg-white rounded-full px-5 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-colors">
              <Link to="/contacts">Get in touch</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-0 right-0 h-screen w-[82vw] max-w-sm bg-white/60 backdrop-blur-lg border-l border-blue-200/40 z-[100] p-8 pt-10 flex flex-col gap-10"
          >
            <div className="flex justify-between items-center">
              <X className="w-7 h-7 text-blue-500 cursor-pointer" onClick={() => setMobileOpen(false)} />
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center text-base font-semibold px-3 py-2 rounded-md transition-all duration-200 ${
                      isActive ? 'text-blue-500 bg-blue-50/30 backdrop-blur-sm' : 'text-blue-600 hover:text-blue-400 hover:bg-blue-50/20 hover:backdrop-blur-sm'
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
              className="mt-auto bg-blue-900/70 text-white px-5 py-3 rounded-lg font-semibold shadow-sm hover:bg-blue-800/70 backdrop-blur-md transition-all"
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