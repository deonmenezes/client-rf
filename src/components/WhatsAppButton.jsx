import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '971564862202'; // No +, no spaces
const WHATSAPP_MESSAGE = 'Hello! I would like to book a 15-minute consultation with ROPA FIESTA.';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-40 bg-gradient-to-br from-green-400 to-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label="Chat on WhatsApp"
    style={{ boxShadow: '0 8px 32px 0 rgba(16, 24, 40, 0.18)' }}
  >
    <FaWhatsapp className="w-7 h-7" />
  </motion.a>
);

export default WhatsAppButton;
