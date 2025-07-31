import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getViewportSettings } from '../lib/utils';

// Import images from assets - Corporate
import corp1 from "../assets/img1.jpeg";
// import corp2 from "../assets/gallery/corporate/img2.jpeg";
// import corp3 from "../assets/gallery/corporate/img3.jpeg";
// import corp4 from "../assets/gallery/corporate/img4.jpeg";
// import corp5 from "../assets/gallery/corporate/img5.jpeg";
// import corp6 from "../assets/gallery/corporate/img6.jpeg";

// Import images from assets - Erection & Commissioning
 import erect1 from "../assets/img7.jpeg";
 import erect2 from "../assets/img8.jpeg";
 import erect3 from "../assets/img9.jpeg";
 import erect4 from "../assets/img10.jpeg";
 import erect5 from "../assets/img11.jpeg";
 import erect6 from "../assets/img12.jpeg";
 import erect7 from "../assets/img70.jpeg";
 import erect8 from "../assets/img71.jpeg";
 import erect9 from "../assets/img72.jpeg";
 import erect10 from "../assets/img73.jpeg";
 import erect11 from "../assets/img74.jpeg";
 import erect12 from "../assets/img75.jpeg";
 import erect13 from "../assets/img76.jpeg";
 import erect14 from "../assets/img77.jpeg";


// Import images from assets - Manufacturing
 import manuf1 from "../assets/img13.jpeg";
 import manuf2 from "../assets/img14.jpeg";
 import manuf3 from "../assets/img15.jpeg";
 import manuf4 from "../assets/img16.jpeg";
 import manuf5 from "../assets/img17.jpeg";
 import manuf6 from "../assets/img18.jpeg";
 import manuf7 from "../assets/img19.jpeg";
 import manuf8 from "../assets/img20.jpeg";
 import manuf9 from "../assets/img21.jpeg";
 import manuf10 from "../assets/img22.jpeg";
 import manuf11 from "../assets/img23.jpeg";
 import manuf12 from "../assets/img24.jpeg";
 import manuf13 from "../assets/img90.jpeg";
 import manuf14 from "../assets/img91.jpeg";
 import manuf15 from "../assets/img92.jpeg";
 import manuf16 from "../assets/img93.jpeg";
 import manuf17 from "../assets/img94.jpeg";
 import manuf18 from "../assets/img95.jpeg";

// Import images from assets - Electrical & Automation
 import elec1 from "../assets/img50.jpeg";
 import elec2 from "../assets/img51.jpeg";
 import elec3 from "../assets/img52.jpeg";
 import elec4 from "../assets/img53.jpeg";
 import elec5 from "../assets/img54.jpeg";
 import elec6 from "../assets/img55.jpeg";

// Import images from assets - Machining
import mach1 from "../assets/img25.jpeg";
import mach2 from "../assets/img26.jpeg";
import mach3 from "../assets/img27.jpeg";
import mach4 from "../assets/img28.jpeg";
import mach5 from "../assets/img29.jpeg";
import mach6 from "../assets/img30.jpeg";
import mach7 from "../assets/img80.jpeg";
import mach8 from "../assets/img81.jpeg";
import mach9 from "../assets/img82.jpeg";
import mach10 from "../assets/img83.jpeg";
import mach11 from "../assets/img84.jpeg";
import mach12 from "../assets/img85.jpeg";
import mach13 from "../assets/img86.jpeg";
import mach14 from "../assets/img87.jpeg";
import mach15 from "../assets/img88.jpeg";
import mach16 from "../assets/img89.jpeg";
import mach17 from "../assets/img888.jpeg";

// Import images from assets - Miscellaneous
import misc1 from "../assets/img31.jpeg";
import misc2 from "../assets/img32.jpeg";
import misc3 from "../assets/img33.jpeg";
// import misc4 from "../assets/gallery/miscellaneous/img34.jpeg";
// import misc5 from "../assets/gallery/miscellaneous/img35.jpeg";
// import misc6 from "../assets/gallery/miscellaneous/img36.jpeg";

// Organized gallery data by categories using imported images
const galleryData = {
  corporate: [
    { id: 1, src: corp1 },
    // { id: 2, src: corp2 },
    // { id: 3, src: corp3 },
    // { id: 4, src: corp4 },
    // { id: 5, src: corp5 },
    // { id: 6, src: corp6 },
  ],
  erection: [
   { id: 7, src: erect1 },
   { id: 8, src: erect2 },
   { id: 9, src: erect3 },
   { id: 10, src: erect4 },
   { id: 11, src: erect5 },
   { id: 12, src: erect6 },
   { id: 41, src: erect7 },
   { id: 42, src: erect8 },
   { id: 43, src: erect9 },
   { id: 44, src: erect10 },
   { id: 45, src: erect11 },
   { id: 46, src: erect12 },
   { id: 47, src: erect13 },
   { id: 48, src: erect14 },
   ],
  manufacturing: [
  { id: 13, src: manuf1 },
  { id: 14, src: manuf2 },
  { id: 15, src: manuf3 },
  { id: 16, src: manuf4 },
  { id: 17, src: manuf5 },
  { id: 18, src: manuf6 },
  { id: 19, src: manuf7 },
  { id: 20, src: manuf8 },
  { id: 21, src: manuf9 },
  { id: 22, src: manuf10 },
  { id: 23, src: manuf11 },
  { id: 24, src: manuf12 },
  { id: 90, src: manuf13 },
  { id: 91, src: manuf14 },
  { id: 92, src: manuf15 },
  { id: 93, src: manuf16 },
  { id: 94, src: manuf17 },
  { id: 95, src: manuf18 },
  ],
  electrical: [
     { id: 60, src: elec1 },
     { id: 61, src: elec2 },
     { id: 62, src: elec3 },
     { id: 63, src: elec4 },
     { id: 64, src: elec5 },
     { id: 65, src: elec6 },
   ],
   machining: [
   { id: 25, src: mach1 },
   { id: 26, src: mach2 },
   { id: 27, src: mach3 },
   { id: 28, src: mach4 },
   { id: 29, src: mach5 },
   { id: 30, src: mach6 },
   { id: 80, src: mach7 },
   { id: 81, src: mach8 },
   { id: 82, src: mach9 },
   { id: 83, src: mach10 },
   { id: 84, src: mach11 },
   { id: 85, src: mach12 },
   { id: 86, src: mach13 },
   { id: 87, src: mach14 },
   { id: 88, src: mach15 },
   { id: 89, src: mach16 },
   { id: 96, src: mach17 },
  ],
   miscellaneous: [
    { id: 31, src: misc1 },
    { id: 32, src: misc2 },
    { id: 33, src: misc3 },
  //   { id: 34, src: misc4 },
  //   { id: 35, src: misc5 },
  //   { id: 36, src: misc6 },
   ],
};

const categories = [
  { key: 'all', label: 'All Projects', icon: '🏭' },
  { key: 'corporate', label: 'Corporate', icon: '🏢' },
  { key: 'erection', label: 'Erection & Commissioning', icon: '🏗️' },
  { key: 'manufacturing', label: 'Manufacturing', icon: '⚙️' },
  { key: 'electrical', label: 'Electrical & Automation', icon: '⚡' },
  { key: 'machining', label: 'Machining', icon: '🔧' },
  { key: 'miscellaneous', label: 'Miscellaneous', icon: '📋' },
];

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  // Filter images based on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      const allImages = Object.values(galleryData).flat();
      setFilteredImages(allImages);
    } else {
      setFilteredImages(galleryData[activeCategory] || []);
    }
  }, [activeCategory]);

  // Prevent scrolling when modal is open and force viewport to top
  useEffect(() => {
    if (selectedImage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
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

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border backdrop-blur-sm ${
                activeCategory === category.key
                  ? 'bg-blue-600 text-white border-blue-700 shadow-lg shadow-blue-500/25'
                  : 'bg-white/80 text-gray-700 border-blue-200/50 hover:bg-blue-50 hover:border-blue-300'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${activeCategory}-${image.id}`}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
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
                  alt="Gallery image"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No images found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}

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
                e.preventDefault();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 text-xl font-bold z-10 shadow-lg"
              style={{ zIndex: 100000 }}
            >
              ✕
            </button>

            {/* Image container */}
            <motion.div
              className="relative flex items-center justify-center flex-col"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                width: '100vw',
                height: '100vh',
                padding: '80px 30px 60px 30px',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <img
                src={selectedImage.src}
                alt="Gallery image"
                style={{
                  maxWidth: '80vw',
                  maxHeight: '70vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  userSelect: 'none',
                  display: 'block'
                }}
              />
            </motion.div>

            {/* Instructions text */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
              Click anywhere outside the image or press ESC to close
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}