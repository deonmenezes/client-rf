import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// === STEP 1: IMPORT YOUR NEW IMAGES HERE ===
import myNewSlide1 from "../assets/unnamed.jpg";
import myNewSlide2 from "../assets/unnamedd.jpg";
import finalSlide4 from "../assets/unnames.jpeg";

// === STEP 2: DEFINE YOUR SLIDER IMAGES ARRAY ===
const backgroundSliderImages = [myNewSlide1, myNewSlide2, finalSlide4];

const bgImageVariants = {
  enter: {
    x: "100%"
  },
  center: {
    x: "0%"
  },
  exit: {
    x: "-100%"
  }
};

export default function Hero() {
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImageIndex((prevIndex) => (prevIndex + 1) % backgroundSliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const backgroundVariants = {
    rest: { background: 'transparent' },
    hover: { background: 'transparent' }
  };

  const gridVariants = {
    rest: { opacity: 0.05, scale: 1, rotate: 0 },
    hover: {
      opacity: [0.05, 0.15, 0.05],
      scale: [1, 1.01, 1],
      transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    }
  };

  const circuitVariants = {
    rest: { opacity: 0.03 },
    hover: {
      opacity: [0.03, 0.1, 0.03],
      transition: { duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    }
  };

  const gearsVariants = {
    rest: { rotate: 0, opacity: 0.02 },
    hover: {
      rotate: [0, 360],
      opacity: [0.02, 0.08, 0.02],
      transition: { duration: 6, ease: 'linear', repeat: Infinity },
    }
  };

  return (
    <motion.section
      className="relative text-neutral-800 py-20 px-6 md:px-16 overflow-hidden bg-white gpu-accelerated"
      style={{
        transformOrigin: 'center center',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={backgroundVariants}
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="flex w-full h-full"
          animate={{
            x: `-${currentBgImageIndex * 100}%`
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 25,
            duration: 2.5
          }}
        >
          {backgroundSliderImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full relative"
            >
              <img
                src={image}
                alt={`Background Slider Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-neutral-900 opacity-40"></div>
      </div>

      {/* Grid Pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        variants={gridVariants}
        style={window.innerWidth > 768 ? {
          backgroundImage: `
            linear-gradient(rgba(115, 115, 122, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(115, 115, 122, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        } : {}}
      />

      {/* Circuit Pattern */}
      <motion.div className="absolute inset-0 pointer-events-none z-20 hidden md:block" variants={circuitVariants}>
        {/* lines */}
        <div className="absolute top-20 left-20 w-32 h-px bg-accent-500/20"></div>
        <div className="absolute top-20 left-52 w-px h-16 bg-neutral-400/10"></div>
        <div className="absolute top-36 left-52 w-20 h-px bg-neutral-400/10"></div>
        <div className="absolute top-36 right-40 w-px h-24 bg-neutral-400/10"></div>
        <div className="absolute top-60 right-40 w-32 h-px bg-neutral-400/10"></div>
        <div className="absolute bottom-32 left-32 w-24 h-px bg-neutral-400/10"></div>
        <div className="absolute bottom-32 left-56 w-px h-20 bg-neutral-400/10"></div>
        <div className="absolute bottom-12 left-56 w-40 h-px bg-neutral-400/10"></div>
        <div className="absolute bottom-12 right-32 w-px h-16 bg-neutral-400/10"></div>

        {/* nodes */}
        <div className="absolute top-20 left-52 w-3 h-3 bg-neutral-400/15 rounded-full"></div>
        <div className="absolute top-36 left-72 w-3 h-3 bg-neutral-400/15 rounded-full"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-neutral-400/15 rounded-full"></div>
        <div className="absolute bottom-32 left-56 w-3 h-3 bg-neutral-400/15 rounded-full"></div>
        <div className="absolute bottom-12 right-32 w-3 h-3 bg-neutral-400/15 rounded-full"></div>

        {/* extras */}
        <div className="absolute top-10 right-20 w-20 h-px bg-neutral-400/08"></div>
        <div className="absolute top-10 right-40 w-px h-12 bg-neutral-400/08"></div>
        <div className="absolute bottom-20 left-10 w-28 h-px bg-neutral-400/08"></div>
        <div className="absolute bottom-40 right-10 w-px h-18 bg-neutral-400/08"></div>
      </motion.div>

      {/* Gear Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden z-30 hidden lg:block"
        variants={gearsVariants}
      >
        {/* Large Gear */}
        <div className="absolute -top-16 -right-16 w-32 h-32 border-2 border-neutral-400/05 rounded-full">
          <div className="absolute inset-4 border border-neutral-400/05 rounded-full">
            <div className="absolute inset-2 border border-neutral-400/05 rounded-full"></div>
          </div>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-4 bg-neutral-400/05"
              style={{
                top: '-2px',
                left: '50%',
                transformOrigin: '50% 66px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>

        {/* Medium Gear */}
        <div className="absolute -bottom-12 -left-12 w-24 h-24 border-2 border-neutral-400/05 rounded-full">
          <div className="absolute inset-3 border border-neutral-400/05 rounded-full">
            <div className="absolute inset-2 border border-neutral-400/05 rounded-full"></div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-3 bg-neutral-400/05"
              style={{
                top: '-1.5px',
                left: '50%',
                transformOrigin: '50% 49px',
                transform: `translateX(-50%) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-40 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <span className="inline-block bg-neutral-800 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            Professional Engineering
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We deliver advanced{' '}
            <span className="text-neutral-300 inline-block">
              engineering, automation, and energy solutions
            </span>
          </h1>

          <p className="text-lg text-neutral-200 mb-8">
            tailored for the world's most demanding industries.{' '}
            <span className="text-neutral-300 font-medium">
              Innovation, reliability, and performance
            </span>{' '}
            —engineered for your success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/services">
              <button className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-full font-medium skew-hover text-white">
                Services
              </button>
            </Link>
            <Link to="/projects">
              <button className="border border-blue-400 hover:border-blue-600 px-6 py-2 rounded-full font-medium skew-hover text-gray-100 hover:text-blue-300">
                Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
