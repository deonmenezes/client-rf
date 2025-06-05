import { motion } from 'framer-motion';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <motion.div
      className="w-full bg-[#0f1c24] py-16 px-4 md:px-20 text-white font-[Manrope]"
      style={{ backgroundImage: 'url(https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048985/Website_demo/back_earth.png)' }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring', stiffness: 60 }}
        >
          <motion.p className="text-base" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>Contacts</motion.p>
          <motion.h2 className="text-4xl md:text-5xl font-bold leading-snug" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
            We are always ready <br /> to help you and answer <br /> your questions
          </motion.h2>

          <motion.div className="space-y-6" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            {/* Address */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
              <h3 className="text-xl font-bold">Abu Dhabi, UAE</h3>
              <p className="text-zinc-200 leading-7">
                Shop 5 - M37,<br />
                Abu Dhabi, UAE
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-green-500 leading-7">+971 563220189</p>
              <p className="text-green-500 leading-7">+971 564862202</p>
              <p className="text-green-500 leading-7">+971 544588384</p>
            </motion.div>

            {/* Email */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-zinc-200 leading-7">Interested in working with us?</p>
              <a
                href="mailto:support@rfelectromechservices.com"
                className="text-green-500 underline"
              >
                support@rfelectromechservices.com
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
              <h3 className="text-xl font-bold">Follow us</h3>
              <div className="flex gap-4 mt-2">
                {[<CiLinkedin />, <FaFacebookF />, <CiTwitter />, <CiInstagram />].map((platform, idx) => (
                  <motion.div
                    key={idx}
                    className="w-11 h-11 flex items-center justify-center bg-gray-900 border border-green-500 text-white hover:bg-green-500 hover:text-black transition rounded-full shadow-md"
                    whileHover={{ scale: 1.18, backgroundColor: '#22c55e', color: '#000' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i>{platform}</i>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="flex-1 bg-white text-black p-8 rounded shadow-xl"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring', stiffness: 60 }}
        >
          <motion.h2 className="text-3xl font-bold mb-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>Get in Touch</motion.h2>
          <motion.p className="text-zinc-600 mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
            We'd love to hear from you. Fill out the form and we'll get back to you soon!
          </motion.p>
          <motion.form className="space-y-4" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.4 }}>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.4 }}>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}>
              <label className="block text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.4 }}>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
                rows="4"
              ></textarea>
            </motion.div>
            <motion.button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wide hover:bg-green-600 rounded-full shadow-md"
              whileHover={{ scale: 1.07, boxShadow: '0 0 16px #22c55e' }}
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
