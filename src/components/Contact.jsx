import { motion } from 'framer-motion';
import { useRef } from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.elements[0].value;
    const email = form.elements[1].value;
    const subject = form.elements[2].value;
    const message = form.elements[3].value;
    const mailto = `mailto:support@rfelectromechservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-16 px-4 md:px-20 text-white font-sans relative"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048985/Website_demo/back_earth.png)' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 60 }}
        >
          <motion.p className="text-base text-cyan-400 font-semibold uppercase tracking-widest" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>Contacts</motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-bold leading-snug text-white drop-shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
            We are always ready <br /> to help you and answer <br /> your questions
          </motion.h2>

          <motion.div className="space-y-6" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            {/* Address */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <h3 className="text-xl font-bold text-cyan-400">Abu Dhabi, UAE</h3>
              <p className="text-cyan-200 leading-7">
                Shop 5 - M37,<br />
                Abu Dhabi, UAE
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <h3 className="text-xl font-bold text-cyan-400">Phone</h3>
              <p className="text-cyan-300 leading-7">+971 563220189</p>
              <p className="text-cyan-300 leading-7">+971 564862202</p>
              <p className="text-cyan-300 leading-7">+971 544588384</p>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <h3 className="text-xl font-bold text-cyan-400">Email</h3>
              <p className="text-cyan-200 leading-7">Interested in working with us?</p>
              <a
                href="mailto:support@rfelectromechservices.com"
                className="text-cyan-400 underline"
              >
                support@rfelectromechservices.com
              </a>
            </motion.div>

            {/* Social Media */}
           
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-white/5 text-white p-8 rounded-2xl shadow-xl border border-cyan-400/20 backdrop-blur-lg z-10"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 60 }}
        >
          <motion.h2 className="text-3xl font-bold mb-4 text-cyan-400 drop-shadow-lg" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>Get in Touch</motion.h2>
          <motion.p className="text-cyan-200 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            We'd love to hear from you. Fill out the form and we'll get back to you soon!
          </motion.p>
          <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-4" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
              <label className="block text-cyan-400 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border-b border-cyan-400 focus:outline-none focus:border-purple-400 py-2 bg-transparent text-white placeholder-cyan-200"
                required
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}>
              <label className="block text-cyan-400 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-cyan-400 focus:outline-none focus:border-purple-400 py-2 bg-transparent text-white placeholder-cyan-200"
                required
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
              <label className="block text-cyan-400 mb-1">Subject</label>
              <input
                type="text"
                className="w-full border-b border-cyan-400 focus:outline-none focus:border-purple-400 py-2 bg-transparent text-white placeholder-cyan-200"
                required
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.4 }}>
              <label className="block text-cyan-400 mb-1">Message</label>
              <textarea
                className="w-full border-b border-cyan-400 focus:outline-none focus:border-purple-400 py-2 bg-transparent text-white placeholder-cyan-200"
                rows="4"
                required
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wide hover:bg-cyan-400 hover:text-[#101828] rounded-full shadow-md mt-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              whileHover={{ scale: 1.07, boxShadow: '0 0 16px #06b6d4' }}
              whileTap={{ scale: 0.96 }}
            >
              Send a Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
