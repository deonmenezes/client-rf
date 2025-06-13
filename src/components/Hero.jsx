import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import engimg from "../assets/engineering.jpg";
import { useEffect } from 'react';

export default function Hero() {
  const controls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    // Industrial grid pulse animation
    controls.start({
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [controls]);

  const backgroundVariants = {
    rest: { 
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)',
    },
    hover: {
      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #dbeafe 100%)',
    }
  };

  const gridVariants = {
    rest: { 
      opacity: 0.1,
      scale: 1,
      rotate: 0,
    },
    hover: {
      opacity: [0.1, 0.4, 0.6, 0.4, 0.1],
      scale: [1, 1.02, 1.05, 1.02, 1],
      rotate: [0, 0.5, -0.5, 0.2, 0],
      transition: {
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    }
  };

  const circuitVariants = {
    rest: { 
      opacity: 0.1,
    },
    hover: {
      opacity: [0.1, 0.4, 0.6, 0.4, 0.1],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    }
  };

  const gearsVariants = {
    rest: { 
      rotate: 0,
      opacity: 0.08,
    },
    hover: {
      rotate: [0, 360],
      opacity: [0.08, 0.25, 0.08],
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
      },
    }
  };

  return (
    <motion.section
      className="relative text-gray-800 py-20 px-6 md:px-16"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={backgroundVariants}
      style={{
        transformOrigin: 'center center',
      }}
    >
      {/* Industrial Grid Pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={gridVariants}
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Circuit Board Pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={circuitVariants}
      >
        <div className="absolute top-20 left-20 w-32 h-px bg-blue-400/30"></div>
        <div className="absolute top-20 left-52 w-px h-16 bg-blue-400/30"></div>
        <div className="absolute top-36 left-52 w-20 h-px bg-blue-400/30"></div>
        <div className="absolute top-36 right-40 w-px h-24 bg-blue-400/30"></div>
        <div className="absolute top-60 right-40 w-32 h-px bg-blue-400/30"></div>
        
        <div className="absolute bottom-32 left-32 w-24 h-px bg-blue-300/30"></div>
        <div className="absolute bottom-32 left-56 w-px h-20 bg-blue-300/30"></div>
        <div className="absolute bottom-12 left-56 w-40 h-px bg-blue-300/30"></div>
        <div className="absolute bottom-12 right-32 w-px h-16 bg-blue-300/30"></div>
        
        {/* Circuit nodes */}
        <div className="absolute top-20 left-52 w-3 h-3 bg-blue-400/40 rounded-full"></div>
        <div className="absolute top-36 left-72 w-3 h-3 bg-blue-400/40 rounded-full"></div>
        <div className="absolute top-60 right-40 w-3 h-3 bg-blue-400/40 rounded-full"></div>
        <div className="absolute bottom-32 left-56 w-3 h-3 bg-blue-300/40 rounded-full"></div>
        <div className="absolute bottom-12 right-32 w-3 h-3 bg-blue-300/40 rounded-full"></div>
        
        {/* Additional circuit traces for more detail */}
        <div className="absolute top-10 right-20 w-20 h-px bg-blue-300/25"></div>
        <div className="absolute top-10 right-40 w-px h-12 bg-blue-300/25"></div>
        <div className="absolute bottom-20 left-10 w-28 h-px bg-blue-200/25"></div>
        <div className="absolute bottom-40 right-10 w-px h-18 bg-blue-200/25"></div>
      </motion.div>

      {/* Mechanical Gears */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        variants={gearsVariants}
      >
        {/* Large gear - top right */}
        <div className="absolute -top-16 -right-16 w-32 h-32 border-2 border-blue-500/15 rounded-full">
          <div className="absolute inset-4 border border-blue-500/10 rounded-full">
            <div className="absolute inset-2 border border-blue-500/10 rounded-full"></div>
          </div>
          {/* Gear teeth */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-4 bg-blue-500/10"
              style={{
                top: '-2px',
                left: '50%',
                transformOrigin: '50% 66px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Medium gear - bottom left */}
        <div className="absolute -bottom-12 -left-12 w-24 h-24 border-2 border-blue-400/15 rounded-full">
          <div className="absolute inset-3 border border-blue-400/10 rounded-full">
            <div className="absolute inset-2 border border-blue-400/10 rounded-full"></div>
          </div>
          {/* Gear teeth */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-3 bg-blue-400/10"
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

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 skew-hover">
            Available for Work
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 skew-hover text-gray-800">
            We deliver advanced{' '}
            <span className="text-blue-600 skew-hover inline-block">
              engineering, automation, and energy solutions
            </span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 skew-hover">
            tailored for the world's most demanding industries.{' '}
            <span className="text-blue-600 font-medium skew-hover">
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
              <button className="border border-blue-400 hover:border-blue-600 px-6 py-2 rounded-full font-medium skew-hover text-gray-700 hover:text-blue-600">
                Our Work
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2"
        >
          <img
            src={engimg}
            alt="Engineering Visual"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg border border-gray-700"
          />
        </motion.div>
      </div>

      {/* Enhanced Technical Hover Style */}
      <style>
        {`
          .skew-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            display: inline-block;
          }
          .skew-hover:hover {
            transform: translateY(-2px) scale(1.02);
            filter: drop-shadow(0 4px 8px rgba(59, 130, 246, 0.15));
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.1);
          }
        `}
      </style>
    </motion.section>
  );
}