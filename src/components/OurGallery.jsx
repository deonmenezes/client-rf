import { motion } from 'framer-motion';
import { useState } from 'react';
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

// // Add more imports as needed...

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
  // Add more images as you select them...
];

export default function OurGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

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
              onClick={() => setSelectedImage(image)}
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

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={`Gallery image ${selectedImage.id}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
