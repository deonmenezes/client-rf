import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getViewportSettings } from '../lib/utils';

// Import your images from assets
import img1 from "../assets/gallery/img1.jpeg";
import img2 from "../assets/gallery/img2.jpeg";
import img3 from "../assets/gallery/img3.jpeg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpeg";
import img6 from "../assets/gallery/img6.jpeg";
import img7 from "../assets/gallery/img7.jpeg";
import img8 from "../assets/gallery/img8.jpeg";
import img9 from "../assets/gallery/img9.jpeg";
import img10 from "../assets/gallery/img10.jpeg";
import img11 from "../assets/gallery/img11.jpeg";
import img12 from "../assets/gallery/img12.jpeg";
import img13 from "../assets/gallery/img13.jpeg";
import img14 from "../assets/gallery/img14.jpeg";
import img15 from "../assets/gallery/img15.jpeg";
import img16 from "../assets/gallery/img16.jpeg";
import img17 from "../assets/gallery/img17.jpeg";
import img18 from "../assets/gallery/img18.jpeg";
import img19 from "../assets/gallery/img19.jpeg";
import img20 from "../assets/gallery/img20.jpeg";
import img21 from "../assets/gallery/img21.jpeg";
import img22 from "../assets/gallery/img22.jpeg";
import img23 from "../assets/gallery/img23.jpeg";
import img24 from "../assets/gallery/img24.jpeg";
import img25 from "../assets/gallery/img25.jpeg";
import img26 from "../assets/gallery/img26.jpeg";
import img27 from "../assets/gallery/img27.jpeg";
import img28 from "../assets/gallery/img28.jpeg";
import img29 from "../assets/gallery/img29.jpeg";
import img30 from "../assets/gallery/img30.jpeg";
import img31 from "../assets/gallery/img31.jpeg";
import img32 from "../assets/gallery/img32.jpeg";
import img33 from "../assets/gallery/img33.jpeg";
import img34 from "../assets/gallery/img34.jpeg";
import img35 from "../assets/gallery/img35.jpeg";
import img36 from "../assets/gallery/img36.jpeg";

// Gallery images array - add your selected high-quality images here
const galleryImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 25, src: img25 },
  { id: 26, src: img26 },
  { id: 27, src: img27 },
  { id: 28, src: img28 },
  { id: 29, src: img29 },
  { id: 30, src: img30 },
  { id: 31, src: img31 },
  { id: 32, src: img32 },
  { id: 33, src: img33 },
  { id: 34, src: img34 },
  { id: 35, src: img35 },
  { id: 36, src: img36 },
];

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent scrolling when modal is open and force viewport to top
  useEffect(() => {
    if (selectedImage) {
      // Scroll to top immediately
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Prevent all scrolling
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Prevent touch scrolling on mobile
      document.addEventListener('touchmove', preventScroll, { passive: false });
      document.addEventListener('wheel', preventScroll, { passive: false });
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, [selectedImage]);

  // Function to prevent scrolling
  const preventScroll = (e) => {
    e.preventDefault();
    return false;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedImage]);

  return (
    <motion.section
      className="py-20 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 will-change-transform gpu-accelerated"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={getViewportSettings()}
      transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
    >
      {/* Background elements */}
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

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-700 border border-blue-500/20 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Our Work
          </span>

          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Showcasing our expertise through completed projects and engineering solutions
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                setSelectedImage(image);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={`Gallery image ${image.id}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fixed Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0,
              zIndex: 99999,
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(8px)',
              overflow: 'hidden',
              margin: 0,
              padding: 0
            }}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 text-xl font-bold z-10 shadow-lg"
            >
              ✕
            </button>

            {/* Image container */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                width: '100vw',
                height: '100vh',
                padding: '60px 30px 30px 30px',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={selectedImage.src}
                alt={`Gallery image ${selectedImage.id}`}
                style={{
                  maxWidth: '80vw',
                  maxHeight: '80vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  userSelect: 'none',
                  display: 'block'
                }}
              />
            </motion.div>

            {/* Instructions text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
              Click anywhere outside the image or press ESC to close
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}