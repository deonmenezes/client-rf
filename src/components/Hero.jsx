import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// === STEP 1: IMPORT YOUR NEW IMAGES HERE ===
import myNewSlide1 from "../assets/car1.png";
import myNewSlide2 from "../assets/car2.png";
import finalSlide4 from "../assets/car3.png"; 

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

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      className="relative text-neutral-800 py-20 px-6 md:px-16 overflow-hidden gpu-accelerated"
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
              className="min-w-full h-full relative overflow-hidden"
            >
              <motion.img
                src={image}
                alt={`Background Slider Image ${index + 1}`}
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.05, 1],
                  x: [0, 20, 0]
                }}
                transition={{
                  duration: 20,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-neutral-900 opacity-10"></div>
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
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="md:w-1/2 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              opacity: { delay: 0.8, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
              y: { delay: 0.8, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] },
              backgroundPosition: {
                duration: 20,
                ease: "easeInOut",
                repeat: Infinity,
              }
            }}
            className="text-3xl md:text-4xl font-bold leading-tight mb-0 pb-1 -ml-4 md:-ml-2"
            style={{
              background: "linear-gradient(-45deg, #ffffff, #1e40af, #1e3a8a, #ffffff)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)",
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
            }}
          >
            We deliver advanced engineering, automation, and energy solutions
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-lg mb-6 mt-2 md:-ml-2"
            style={{
              background: "linear-gradient(-45deg, #ffffff, #60a5fa, #3b82f6, #ffffff)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.6)",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              backgroundPosition: {
                duration: 120,
                ease: "easeInOut",
                repeat: Infinity,
              }
            }}
          >
            tailored for the world's most demanding industries.{' '}
            <motion.span
              className="font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                delay: 2, 
                duration: 0.6,
                backgroundPosition: {
                  duration: 120,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
              }}
              style={{
                background: "linear-gradient(-45deg, #ffffff, #60a5fa, #2563eb, #ffffff)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.7)",
                textShadow: "0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2)",
              }}
            >
              Innovation, reliability, and performance
            </motion.span>{' '}
            —engineered for your success.
          </motion.p>

          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <motion.div variants={buttonVariants}>
              <Link to="/services">
                <motion.button
                  className="bg-blue-600 hover:bg-blue-700 transition-all px-6 py-2 rounded-full font-medium text-white"
                  whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Services
                </motion.button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link to="/projects">
                <motion.button
                  className="border border-blue-400 hover:border-blue-600 px-6 py-2 rounded-full font-medium text-gray-100 hover:text-blue-300"
                  whileHover={{ y: -2, borderColor: "#3b82f6" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}