// Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = 'gemini-1.5-flash'; // Or use 'gemini-1.5-pro' for more advanced answers

const COMPANY_CONTEXT = `You are an assistant for ROPA FIESTA, a trusted provider of integrated Mechanical, Hydraulic, Electrical, and Automation solutions based in Abu Dhabi. Known for its dedication to innovation, customization, and cutting-edge technologies, the company empowers clients across diverse industries to achieve operational excellence.

Vision: To lead the industry in mechanical and automation engineering by offering smart, sustainable solutions through continuous improvement, innovation, and customer-focused services.

If the user asks for more details or contact, provide:
Phone: +971 563 220 189, +971 564 862 202, +971 544 588 384
Email: support@rfelectromechservices.com

Only answer questions related to ROPA FIESTA and its services, vision, or contact info. If asked about anything else, politely say you can only answer queries about ROPA FIESTA.`;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am the ROPA FIESTA assistant. Ask your queries about our company, services, or contact info.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL });

      const chat = model.startChat({
        history: [
          { role: 'user', parts: [{ text: COMPANY_CONTEXT }] },
        ]
      });

      const result = await chat.sendMessage(userMsg.text);
      const response = await result.response.text();

      setMessages((prev) => [...prev, { from: 'bot', text: response }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { from: 'bot', text: 'Error: Could not connect to Gemini API.' }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-cyan-400 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        aria-label="Open Chatbot"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="fixed right-6 bottom-6 top-24 w-[90vw] max-w-sm bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl border border-cyan-400/20 z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-400/10">
              <span className="font-bold text-white text-lg">Ask Your Queries</span>
              <button onClick={() => setOpen(false)} className="text-cyan-300 hover:text-pink-400 transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-xl px-4 py-2 max-w-[80%] text-sm shadow-md ${msg.from === 'user' ? 'bg-cyan-500 text-white' : 'bg-white/10 text-white border border-cyan-400/10'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t border-cyan-400/10 bg-slate-900/80">
              <input
                type="text"
                className="flex-1 bg-transparent text-white placeholder-cyan-200 px-3 py-2 rounded-lg border border-cyan-400/20 focus:outline-none focus:border-cyan-400"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:from-cyan-500 hover:to-purple-600 transition-all disabled:opacity-60"
                disabled={loading || !input.trim()}
                aria-label="Send"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
