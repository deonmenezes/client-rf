import { motion } from 'framer-motion';
import { useRef } from 'react';
import { getViewportSettings } from '../lib/utils';
import { CiLinkedin, CiTwitter, CiInstagram } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailto = `mailto:support@rfelectromechservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-4 md:px-20 text-gray-800 font-sans relative will-change-transform gpu-accelerated"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048985/Website_demo/back_earth.png)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
        {/* Left Column */}
        <motion.div
          className="flex-1 space-y-6 will-change-transform"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={getViewportSettings({ amount: 0.05 })}
          transition={{ delay: 0.1, duration: 0.5, type: 'spring', stiffness: 80 }}
        >
          <motion.p className="text-base text-blue-600 font-semibold uppercase tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Contacts</motion.p>

          <motion.h2 className="text-4xl md:text-5xl font-bold leading-snug text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We are always ready <br /> to help you and answer <br /> your questions
          </motion.h2>

          {/* Contact Info and Map */}
          <div className="space-y-6">
            {/* Address, Phones, Email, Social (unchanged) */}
            {/* ...same as your current structure... */}

            {/* Google Maps */}
            <motion.div
  className="w-full mt-8 rounded-lg overflow-hidden"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.9, duration: 0.5 }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.2568133441046!2d54.51836219999999!3d24.372368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4100348532ed%3A0xd8495d3bc8033e8f!2sRopa%20Fiesta%20electrical%20and%20mechanical%20Equipment%20Installation%20LLC!5e0!3m2!1sen!2sin!4v1753267892135!5m2!1sen!2sin"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</motion.div>

          </div>
        </motion.div>

        {/* Right Column - Contact Form (Smaller Width) */}
        <motion.div
          className="w-full max-w-md bg-white/80 text-gray-800 p-6 rounded-2xl shadow-xl border border-blue-200/50 backdrop-blur-lg z-10 self-start"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 60 }}
        >
          <motion.h2 className="text-2xl font-bold mb-4 text-blue-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Get in Touch
          </motion.h2>

          <motion.p className="text-gray-600 mb-6 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            We'd love to hear from you. Fill out the form below.
          </motion.p>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Name */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
              <label className="block text-blue-600 mb-1 text-sm">Full Name</label>
              <input
                name="name"
                type="text"
                className="w-full border-b border-blue-400 focus:outline-none focus:border-blue-600 py-1 bg-transparent text-sm"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}>
              <label className="block text-blue-600 mb-1 text-sm">Email</label>
              <input
                name="email"
                type="email"
                className="w-full border-b border-blue-400 focus:outline-none focus:border-blue-600 py-1 bg-transparent text-sm"
                required
              />
            </motion.div>

            {/* Subject */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
              <label className="block text-blue-600 mb-1 text-sm">Subject</label>
              <input
                name="subject"
                type="text"
                className="w-full border-b border-blue-400 focus:outline-none focus:border-blue-600 py-1 bg-transparent text-sm"
                required
              />
            </motion.div>

            {/* Message */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.4 }}>
              <label className="block text-blue-600 mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows="3"
                className="w-full border-b border-blue-400 focus:outline-none focus:border-blue-600 py-1 bg-transparent text-sm"
                required
              />
            </motion.div>

            {/* Button */}
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow hover:scale-105 transition-transform mt-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
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
