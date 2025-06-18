import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import img1 from "../assets/rf2.jpg"
import img2 from "../assets/rf3.jpg"
import img3 from "../assets/rf4.jpg"
import img4 from "../assets/rf5.jpg"
import img5 from "../assets/rf6.jpg"
import img6 from "../assets/rf7.jpg"
import img7 from "../assets/rf8.jpg"
import img8 from "../assets/rf9.jpg"

const services = [
  {
    title: "Electrical Services",
    description: "Comprehensive industrial and commercial electrical installations, troubleshooting, and energy-efficient upgrades.",
    image:img6,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Fabrication Services",
    description: "Precision mechanical repair, maintenance, and system assembly for manufacturing and processing industries.",
    image: img4,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Hydraulic Services",
    description: "Upgrading legacy systems with smart PLC, SCADA, and control panel automation for enhanced productivity.",
    image:img7,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "Automation and retrofitting",
    description: "Custom metal fabrication and high-quality welding solutions tailored for industrial and structural needs.",
    image:img5,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: "Pneumatic system manufacturing and service",
    description: "Design, maintenance, and integration of advanced hydraulic systems across multiple applications.",
    image: img3,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    )
  },
  
  {
    title: "Trading & Manufacturing Parts",
    description: "Supply of quality engineering parts, spares, and equipment with custom manufacturing support.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
      </svg>
    )
  },
  {
    title: "Machining service",
    description: "Authorized dealer of Himalaya Air Conditioners, Industrial Spray Systems, and Welding Solutions.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
      </svg>
    )
  },
];

export default function Features() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.ceil(services.length / itemsPerView);

  useEffect(() => {
    if (currentIndex >= maxSlides) {
      setCurrentIndex(0);
    }
  }, [itemsPerView, maxSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  const getVisibleServices = () => {
    const startIndex = currentIndex * itemsPerView;
    return services.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <motion.section
      className="py-12 md:py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100"
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
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/30 blur-xl hidden md:block"
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
        className="absolute bottom-32 left-16 w-24 h-24 rounded-lg bg-gradient-to-br from-cyan-400/30 to-blue-500/30 blur-lg rotate-45 hidden md:block"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Our Services
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            We provide{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Engineering Excellence
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            From electrical systems to precision machining, we deliver comprehensive solutions tailored to your industry needs.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-2 sm:left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-500/30 text-blue-600 hover:bg-blue-500/20 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-2 sm:right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-500/30 text-blue-600 hover:bg-blue-500/20 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="px-8 sm:px-12 md:px-12">
            <motion.div
              key={currentIndex}
              className={`grid gap-4 sm:gap-6 ${
                itemsPerView === 1 ? 'grid-cols-1' : 
                itemsPerView === 2 ? 'grid-cols-2' : 
                'grid-cols-3'
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {getVisibleServices().map((service, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="relative h-[400px] sm:h-[450px] md:h-[500px] bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] sm:group-hover:scale-105 group-hover:shadow-lg sm:group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6">
                      {/* Icon */}
                      <motion.div
                        className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg sm:rounded-xl border border-blue-400/30 text-blue-600 mb-3 sm:mb-4 backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 10 }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-200 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Arrow */}
                      <motion.div
                        className="mt-3 sm:mt-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-blue-400/30 hover:bg-blue-400/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl sm:blur-3xl hidden sm:block"
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
        className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl sm:blur-3xl hidden sm:block"
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
    </motion.section>
  );
}