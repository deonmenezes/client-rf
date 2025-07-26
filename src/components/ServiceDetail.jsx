import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img8 from "../assets/rf9.jpg";

const serviceDetails = {
  'electrical-services': {
    title: "Electrical Services",
    description: "Comprehensive industrial and commercial electrical installations, troubleshooting, and energy-efficient upgrades.",
    fullDescription: "Our electrical services cover everything from basic installations to complex industrial automation systems. We specialize in energy-efficient solutions that reduce operational costs while improving reliability.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    features: ["Industrial Installations", "Energy Audits", "Preventive Maintenance", "Emergency Repairs"]
  },
  'fabrication-services': {
    title: "Fabrication Services", 
    description: "Precision mechanical repair, maintenance, and system assembly for manufacturing and processing industries.",
    fullDescription: "Expert fabrication services including custom metalwork, precision machining, and assembly solutions for industrial applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    features: ["Custom Fabrication", "Precision Machining", "Welding Services", "Assembly Solutions"]
  },
  'hydraulic-services': {
    title: "Hydraulic Services",
    description: "Upgrading legacy systems with smart PLC, SCADA, and control panel automation for enhanced productivity.",
    fullDescription: "Comprehensive hydraulic system design, installation, and maintenance services for industrial applications. Our expert team ensures optimal performance and reliability.",
    image: "https://www.hydraulicdistributors.com.au/images/slides2019/industrial-commercial-hydraulic-services.jpg",
    features: ["System Design", "Installation & Setup", "Preventive Maintenance", "Emergency Repairs"]
  },
  'automation-retrofitting': {
    title: "Automation and Retrofitting",
    description: "Custom metal fabrication and high-quality welding solutions tailored for industrial and structural needs.",
    fullDescription: "Advanced automation solutions and system retrofitting to modernize existing equipment and improve operational efficiency.",
    image: "https://green.org/wp-content/uploads/2024/01/R-1-109.jpg",
    features: ["PLC Programming", "SCADA Systems", "Legacy System Upgrades", "Process Optimization"]
  },
  'pneumatic-systems': {
    title: "Pneumatic System Manufacturing and Service",
    description: "Design, maintenance, and integration of advanced hydraulic systems across multiple applications.",
    fullDescription: "Complete pneumatic system solutions including design, manufacturing, installation, and ongoing maintenance services.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7",
    features: ["System Design", "Custom Manufacturing", "Installation Services", "Maintenance Programs"]
  },
  'trading-manufacturing-parts': {
    title: "Trading & Manufacturing Parts",
    description: "Supply of quality engineering parts, spares, and equipment with custom manufacturing support.",
    fullDescription: "Comprehensive supply chain solutions for industrial parts and components, including custom manufacturing and quality assurance.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
    features: ["Parts Supply", "Custom Manufacturing", "Quality Assurance", "Inventory Management"]
  },
  'maintenance-repair': {
    title: "Maintenance & Repair",
    description: "Professional maintenance and repair services for industrial equipment and systems.",
    fullDescription: "Expert maintenance and repair services to ensure optimal performance and extend the lifespan of your industrial equipment.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    features: ["Preventive Maintenance", "Emergency Repairs", "Equipment Diagnostics", "Performance Optimization"]
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {service.title}
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-6">{service.fullDescription}</p>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}




