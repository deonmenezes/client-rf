import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import fabImage from "../assets/fab.jpeg";

console.log('fabImage:', fabImage); // Add this line temporarily

const serviceDetails = {
  'electrical-services': {
    title: "Electrical Services",
    description: "Comprehensive industrial and commercial electrical installations, troubleshooting, and energy-efficient upgrades.",
    fullDescription: "Our electrical services cover everything from basic installations to complex industrial automation systems. We specialize in energy-efficient solutions that reduce operational costs while improving reliability.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    features: [
      {
        title: "Industrial Installations",
        description: "Complete electrical infrastructure setup for manufacturing facilities, including power distribution systems, control panels, and safety circuits designed to meet industrial standards and regulatory compliance."
      },
      {
        title: "Energy Audits",
        description: "Comprehensive analysis of your electrical systems to identify inefficiencies, recommend energy-saving solutions, and help reduce operational costs while maintaining optimal performance levels."
      },
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance programs to prevent electrical failures, extend equipment lifespan, and ensure continuous operation through regular inspections, testing, and component replacement."
      },
      {
        title: "Emergency Repairs",
        description: "24/7 emergency response service for critical electrical failures, ensuring minimal downtime with rapid diagnosis and repair of electrical systems and equipment."
      }
    ]
  },
  'fabrication-services': {
    title: "Fabrication Services", 
    description: "Precision mechanical repair, maintenance, and system assembly for manufacturing and processing industries.",
    fullDescription: "Expert fabrication services including custom metalwork, precision machining, and assembly solutions for industrial applications.",
    image: fabImage,
    features: [
      {
        title: "Custom Fabrication",
        description: "Tailored metal fabrication solutions including structural steelwork, custom machinery components, and specialized industrial equipment designed to meet your specific operational requirements."
      },
      {
        title: "Precision Machining",
        description: "High-precision CNC machining services for critical components, ensuring tight tolerances and superior finish quality for aerospace, automotive, and industrial applications."
      },
      {
        title: "Welding Services",
        description: "Expert welding capabilities including TIG, MIG, and arc welding for various materials and applications, from structural welding to precision component assembly and repair work."
      },
      {
        title: "Assembly Solutions",
        description: "Complete assembly services for complex mechanical systems, sub-assemblies, and finished products with quality control processes to ensure optimal performance and reliability."
      }
    ]
  },
  'hydraulic-services': {
    title: "Hydraulic Services",
    description: "Upgrading legacy systems with smart PLC, SCADA, and control panel automation for enhanced productivity.",
    fullDescription: "Comprehensive hydraulic system design, installation, and maintenance services for industrial applications. Our expert team ensures optimal performance and reliability.",
    image: "https://www.hydraulicdistributors.com.au/images/slides2019/industrial-commercial-hydraulic-services.jpg",
    features: [
      {
        title: "System Design",
        description: "Custom hydraulic system design tailored to your specific application requirements, including pressure calculations, component selection, and circuit optimization for maximum efficiency and performance."
      },
      {
        title: "Installation & Setup",
        description: "Professional installation of hydraulic systems including pumps, cylinders, valves, and control systems with proper commissioning and testing to ensure optimal operation from day one."
      },
      {
        title: "Preventive Maintenance",
        description: "Comprehensive maintenance programs including fluid analysis, filter replacement, seal inspection, and system performance monitoring to prevent costly breakdowns and extend equipment life."
      },
      {
        title: "Emergency Repairs",
        description: "Rapid response hydraulic repair services for critical system failures, including mobile repair units and emergency parts supply to minimize production downtime."
      }
    ]
  },
  'automation-retrofitting': {
    title: "Automation and Retrofitting",
    description: "Custom metal fabrication and high-quality welding solutions tailored for industrial and structural needs.",
    fullDescription: "Advanced automation solutions and system retrofitting to modernize existing equipment and improve operational efficiency.",
    image: "https://green.org/wp-content/uploads/2024/01/R-1-109.jpg",
    features: [
      {
        title: "PLC Programming",
        description: "Advanced programmable logic controller programming and configuration for industrial automation systems, including ladder logic, function blocks, and structured text programming for optimal control."
      },
      {
        title: "SCADA Systems",
        description: "Supervisory control and data acquisition system implementation providing real-time monitoring, data logging, alarm management, and remote control capabilities for industrial processes."
      },
      {
        title: "Legacy System Upgrades",
        description: "Modernization of outdated control systems and equipment with current technology while maintaining operational continuity and improving efficiency, reliability, and safety standards."
      },
      {
        title: "Process Optimization",
        description: "Analysis and optimization of industrial processes through automation integration, workflow improvement, and performance monitoring to maximize productivity and reduce operational costs."
      }
    ]
  },
  'pneumatic-systems': {
    title: "Pneumatic System Manufacturing and Service",
    description: "Design, maintenance, and integration of advanced hydraulic systems across multiple applications.",
    fullDescription: "Complete pneumatic system solutions including design, manufacturing, installation, and ongoing maintenance services.",
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7",
    features: [
      {
        title: "System Design",
        description: "Custom pneumatic system engineering including air flow calculations, pressure requirements, actuator sizing, and control valve selection to ensure optimal performance for your specific application."
      },
      {
        title: "Custom Manufacturing",
        description: "In-house manufacturing of pneumatic components including cylinders, valves, manifolds, and control panels built to exact specifications with quality materials and precision craftsmanship."
      },
      {
        title: "Installation Services",
        description: "Professional pneumatic system installation including air line routing, component mounting, control integration, and system commissioning with thorough testing and documentation."
      },
      {
        title: "Maintenance Programs",
        description: "Comprehensive pneumatic system maintenance including air quality monitoring, filter replacement, lubricator service, and leak detection to ensure consistent performance and longevity."
      }
    ]
  },
  'trading-manufacturing-parts': {
    title: "Trading & Manufacturing Parts",
    description: "Supply of quality engineering parts, spares, and equipment with custom manufacturing support.",
    fullDescription: "Comprehensive supply chain solutions for industrial parts and components, including custom manufacturing and quality assurance.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8",
    features: [
      {
        title: "Parts Supply",
        description: "Extensive inventory of industrial parts and components from leading manufacturers, ensuring quick availability of genuine parts for maintenance, repair, and replacement requirements."
      },
      {
        title: "Custom Manufacturing",
        description: "On-demand manufacturing of specialized parts and components when standard options are unavailable, including reverse engineering and custom design capabilities for unique applications."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous quality control processes including material certification, dimensional inspection, and performance testing to ensure all parts meet industry standards and application requirements."
      },
      {
        title: "Inventory Management",
        description: "Strategic inventory management services including demand forecasting, automated reordering, and just-in-time delivery to optimize your parts inventory and reduce carrying costs."
      }
    ]
  },
  'maintenance-repair': {
    title: "Maintenance & Repair",
    description: "Professional maintenance and repair services for industrial equipment and systems.",
    fullDescription: "Expert maintenance and repair services to ensure optimal performance and extend the lifespan of your industrial equipment.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12",
    features: [
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance programs designed to prevent equipment failures through regular inspections, lubrication, adjustments, and component replacement based on manufacturer recommendations and operational history."
      },
      {
        title: "Emergency Repairs",
        description: "24/7 emergency repair services with rapid response teams equipped with common parts and tools to restore critical equipment functionality and minimize production losses."
      },
      {
        title: "Equipment Diagnostics",
        description: "Advanced diagnostic services using modern testing equipment and techniques to identify root causes of equipment problems, predict potential failures, and recommend corrective actions."
      },
      {
        title: "Performance Optimization",
        description: "Equipment performance analysis and optimization services to improve efficiency, reduce energy consumption, and extend equipment life through proper calibration and operational adjustments."
      }
    ]
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img 
              src={service.image} 
              alt={service.title}
              className={`w-full h-auto object-contain rounded-xl shadow-lg ${
                serviceId === 'fabrication-services' ? 'max-w-xs' : 'max-w-md'
              }`}
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 mb-6">{service.fullDescription}</p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Features & Services</h3>
            <div className="space-y-6">
              {service.features.map((feature, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Other Services Section */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Explore Our Other Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(serviceDetails)
              .filter(([key]) => key !== serviceId)
              .map(([key, otherService], index) => (
                <motion.div
                  key={key}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <Link
                    to={`/services/${key}`}
                    className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 group"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {otherService.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                      {otherService.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                      Learn More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

















