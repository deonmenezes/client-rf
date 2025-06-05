import { motion } from 'framer-motion';
import acImage from '../assets/H.png';

const services = [
  {
    title: "Electrical Services",
    description:
      "Comprehensive industrial and commercial electrical installations, troubleshooting, and energy-efficient upgrades.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Electrical panel/wiring image
  },
  {
    title: "Mechanical Services",
    description:
      "Precision mechanical repair, maintenance, and system assembly for manufacturing and processing industries.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Mechanical gears/machinery
  },
  {
    title: "Automation & Retrofitting",
    description:
      "Upgrading legacy systems with smart PLC, SCADA, and control panel automation for enhanced productivity.",
    image: "https://media.gettyimages.com/id/1435409342/photo/robot-workers-in-factory.jpg?s=612x612&w=gi&k=20&c=gQSO1lyRIybdxtBJSOeO9fR3vD7iCQ1Y1O9CBePuF3g=", // Automation/robotics
  },
  {
    title: "Fabrication & Welding",
    description:
      "Custom metal fabrication and high-quality welding solutions tailored for industrial and structural needs.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Welding sparks
  },
  {
    title: "Hydraulic Experts",
    description:
      "Design, maintenance, and integration of advanced hydraulic systems across multiple applications.",
    image: "https://media.istockphoto.com/id/1180187285/photo/low-key-photo-of-hydraulic-pipes-maintenance-on-heavy-industry-machine.jpg?s=170667a&w=is&k=20&c=4SP1BF7VWjN8nS-UX8_KuUVSj5cbNxYeYAM0S66LS2w=", // Hydraulic machinery
  },
  {
    title: "Machining",
    description:
      "High-precision CNC and manual machining services for components across diverse engineering sectors.",
    image: "https://www.shutterstock.com/image-photo/metal-machine-tools-industry-cnc-260nw-1772384783.jpg", // CNC machine
  },
  {
    title: "Trading & Manufacturing Parts",
    description:
      "Supply of quality engineering parts, spares, and equipment with custom manufacturing support.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Manufacturing parts
  },
  {
    title: "Dealership – Himalaya AC & More",
    description:
      "Authorized dealer of Himalaya Air Conditioners, Industrial Spray Systems, and Welding Solutions.",
    image: acImage, // Use the imported image
  },
];


export default function Features() {
  return (
    <motion.div
      className="bg-gray-900 text-white py-16 px-8"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', stiffness: 60 }}
    >
      {/* Header Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <motion.p
          className="text-green-500 text-sm font-medium uppercase mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >Our Services</motion.p>
        <motion.h2
          className="text-4xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >We provide one of the<br />best services</motion.h2>
        <motion.div
          className="mt-4 w-20 h-1 bg-green-500 mx-auto rounded-full shadow-green-500/30 shadow-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
        />
      </motion.div>

      {/* Scrollable Service Cards */}
      <motion.div
        className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-green-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        <div className="flex w-max gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative w-[380px] h-[480px] flex-shrink-0 bg-black text-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-green-500/30 transition-shadow duration-300"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 + idx * 0.15, duration: 0.7, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px #22c55e55' }}
            >
              {/* Image with zoom on hover */}
              <motion.div className="w-full h-full absolute inset-0 z-0 bg-gray-800">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-110 transition-transform duration-700 opacity-90"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.13 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                />
              </motion.div>
              
              {/* Overlay Text */}
              <motion.div
                className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 via-black/70 to-transparent w-full h-2/3 z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.7, type: 'spring' }}
              >
                <motion.h3
                  className="text-2xl font-bold text-green-400 mb-3 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                >{service.title}</motion.h3>
                <motion.p
                  className="text-base mt-2 text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                >{service.description}</motion.p>
                <motion.div
                  className="mt-4 w-6 h-6 border-l-4 border-b-4 border-green-500 rotate-[-45deg] group-hover:scale-125 group-hover:border-green-400 transition-all duration-300"
                  whileHover={{ scale: 1.3, borderColor: '#22c55e' }}
                  transition={{ type: 'spring', stiffness: 120 }}
                />
              </motion.div>
              {/* Glass overlay for extra effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.15 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
