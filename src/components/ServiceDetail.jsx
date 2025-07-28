import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import fabImage from "../assets/fab.jpeg";

console.log('fabImage:', fabImage); // Add this line temporarily

const serviceDetails = {
  'electrical-services': {
    title: "Electrical Services",
    description: "Industrial Electrical Solutions by RF Electromech Services",
    fullDescription: `Industrial Electrical Solutions by RF Electromech Services
At RF Electromech Services, we specialize in delivering comprehensive electrical solutions tailored for a wide range of industrial applications. With a proven track record in execution and engineering excellence, we provide end-to-end electrical services — from design to commissioning — ensuring power, control, and automation systems operate safely and efficiently.

🔧 Our Core Electrical Services Include:
✅ Industrial Power Distribution
LV/MV Panel Design, Fabrication & Installation
Transformer and Switchgear Setup
Cable Laying, Termination & Tray Work
Earthing & Lightning Protection Systems

✅ Control & Automation
PLC Panel Wiring & Logic Testing
SCADA & HMI Integration
VFD Drive Panel Installation
Energy Management Systems

✅ Machine & Plant Electricals
Equipment Electrical Erection
Wiring for Hydraulic & Pneumatic Systems
Sensor & Safety Interlock Configuration
Commissioning of CNC, Bending & Fabrication Machines

✅ Lighting & Utilities
Industrial LED Lighting Design
Emergency Lighting Systems
HVAC Electrical Works
Fire Alarm & BMS Integration

🛠️ Industries We Serve:
Oil & Gas
Steel & Pipe Manufacturing
Energy & Power, Aviation, Water & Wastewater
Food & Beverage
Packaging & Automation
Civil & Infrastructure Projects`,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    features: ["Industrial Installations", "Energy Audits", "Preventive Maintenance", "Emergency Repairs"]
  },
  'fabrication-services': {
    title: "Fabrication Services", 
    description: "Industrial Solutions for Design, Development & Engineering",
    fullDescription: `🔧 Fabrication Services
Industrial Solutions for Design, Development & Engineering
At RF Electromech Services, we offer precision-driven fabrication services designed to meet the diverse needs of industrial sectors. From design to development and execution, we provide tailored engineering solutions that align with your project's specific requirements.

Whether you need custom-built components or large-scale structural assemblies, our experienced team is equipped to deliver high-quality, cost-effective results—on time and to specification.

✅ Our Core Fabrication Capabilities Include:
Custom Steel & Metal Fabrication
Industrial Skid & Modular Structures
Equipment Frames & Support Structures
Sheet Metal Design & Prototyping
On-site Fabrication & Installation
CNC Machining, Welding & Finishing

👷 Designed for a Range of Industries:
We serve key industries including:
Oil & Gas
Power & Energy
Steel & Pipe Manufacturing
Chemical & Process Plants
Infrastructure & Utilities

💡 From Concept to Commissioning:
Our engineering team works closely with clients through every stage:
Concept Design & 3D Modeling
Material Selection & Stress Analysis
Fabrication, QA/QC & Testing
Delivery, Installation & Support

RF Electromech Services is committed to quality, innovation, and safety across all fabrication projects. Let us bring your industrial design ideas to life with precision and reliability.

📞 Contact us today to discuss your fabrication requirements.`,
    image: fabImage,
    features: ["Custom Fabrication", "Precision Machining", "Welding Services", "Assembly Solutions"]
  },
    'hydraulic-services': {
    title: "Hydraulic Services",
    description: "Industrial Solutions for Hydraulic Design, Development & Engineering",
    fullDescription: `💧 Hydraulic Testing & Manufacturing Services
Industrial Solutions for Hydraulic Design, Development & Engineering
At RF Electromech Services, we specialize in providing Hydraulic Testing Services and New Hydraulic Equipment Manufacturing for a wide range of industrial applications. Our solutions are engineered to meet the highest standards of performance, reliability, and safety—customized to your design and operational requirements.

Whether you require pressure testing, leak detection, or complete hydraulic system development, we deliver precision and dependability at every stage of the process.

🔍 Our Hydraulic Services Include:
Hydrostatic & Pressure Testing (up to 1000 bar)
Hydraulic Cylinder Testing & Repairs
Leak Testing & Flushing
Functional Testing of Hydraulic Systems
New Hydraulic System Design & Manufacturing
Commissioning & Performance Validation

🏭 Custom Hydraulic Manufacturing:
We design and manufacture a range of hydraulic components and systems including:
Power Packs
Hydraulic Cylinders
Hose Assemblies
Manifolds & Control Blocks
Skid-Mounted Hydraulic Units

🛠️ Engineered for Critical Industries:
Our solutions serve:
Oil & Gas
Marine & Offshore
Steel & Pipe Plants
Construction Equipment
Utilities & Water Management

🔧 End-to-End Engineering Support:
From initial concept to on-site delivery, our team provides:
Design & 3D Modeling
Material Selection & Load Analysis
Precision Manufacturing & Assembly
Testing, Documentation & Certification

RF Electromech Services is your reliable partner for hydraulic innovation, maintenance, and project execution. Trust us to power your operations with engineered hydraulic solutions built for performance.

📞 Get in touch today to explore how we can support your hydraulic needs.`,
    image: "https://www.hydraulicdistributors.com.au/images/slides2019/industrial-commercial-hydraulic-services.jpg",
    features: ["System Design", "Installation & Setup", "Preventive Maintenance", "Emergency Repairs"]
  },
  'automation-retrofitting': {
    title: "Automation and Retrofitting",
    description: "Industrial Solutions for Smart Design, Development & Engineering",
    fullDescription: `🤖 Automation & Retrofitting Services
Industrial Solutions for Smart Design, Development & Engineering
At RF Electromech Services, we offer Automation and Retrofitting Solutions designed to enhance the performance, efficiency, and lifespan of industrial systems. Our expertise bridges the gap between existing machinery and modern automation technologies—delivering value through intelligent engineering and system upgrades.

Whether you're looking to modernize outdated equipment or implement new automated processes, our solutions are tailored to your plant's operational goals and technical specifications.

⚙️ Our Key Services Include:
Industrial Automation System Design & Integration
PLC, HMI, and SCADA Programming & Commissioning
Machine Retrofitting & Control Panel Upgrades
Sensor & Actuator Integration
Variable Frequency Drives (VFD) & Servo Systems
Electrical & Mechanical System Synchronization

🔄 Retrofitting Services:
We specialize in upgrading legacy systems with:
New Control Logic & Automation Features
Energy-Efficient Drives & Motors
Safety System Enhancements
Remote Monitoring & Predictive Maintenance Capabilities

🏭 Solutions Tailored for:
Manufacturing Lines
Steel & Pipe Processing Plants
Oil & Gas Equipment
Packaging & Handling Systems
Custom Industrial Machinery

💡 From Engineering to Execution:
System Study & Functional Analysis
Design & Control Architecture Development
Panel Fabrication, PLC Programming & Integration
Testing, Training & Commissioning Support

RF Electromech Services delivers smarter, safer, and more efficient industrial automation solutions. Our retrofitting expertise ensures your equipment evolves with technology—without the cost of full replacement.

📞 Contact us today to upgrade your operations with reliable automation.`,
    image: "https://green.org/wp-content/uploads/2024/01/R-1-109.jpg",
    features: ["PLC Programming", "SCADA Systems", "Legacy System Upgrades", "Process Optimization"]
  },
    'pneumatic-systems': {
    title: "Pneumatic System Manufacturing and Service",
    description: "Industrial Solutions for Pneumatic Design, Development & Engineering",
    fullDescription: `🛠️ Pneumatic System & Manufacturing Services
Industrial Solutions for Pneumatic Design, Development & Engineering
At RF Electromech Services, we provide Pneumatic System Solutions and Custom Manufacturing tailored to industrial environments requiring precise, reliable, and energy-efficient operations. From concept to commissioning, we deliver engineering-driven pneumatic systems designed to improve automation, productivity, and control.

Whether you're developing a new system or upgrading an existing one, our solutions are built for performance, durability, and seamless integration into your operations.

💨 Our Pneumatic Services Include:
Custom Pneumatic Circuit Design
Manufacturing of Pneumatic Control Panels
Valve, Cylinder & Actuator Sizing and Supply
Air Preparation Units (FRL), Piping & Tubing Layout
Troubleshooting & Preventive Maintenance
On-Site Installation & Commissioning

⚙️ Pneumatic Equipment We Manufacture & Integrate:
Pneumatic Control Panels & Cabinets
Air Compressors & Storage Systems
Cylinders (Standard & Customized)
Solenoid Valves & Directional Control Valves
Air Dryers & Filters
Safety and Shut-Off Systems

🏭 Applications Across Industries:
Steel & Pipe Manufacturing
Packaging & Assembly Lines
Oil & Gas Facilities
Automotive & Aerospace
Food Processing Plants

🔧 End-to-End Engineering Workflow:
System Study & Requirement Analysis
CAD Design & Schematic Development
Component Selection & Panel Manufacturing
Testing, Documentation & Field Installation

At RF Electromech Services, we combine innovation with engineering excellence to provide pneumatic systems that are robust, efficient, and tailored to your unique process needs.

📞 Reach out today to discuss your pneumatic automation or manufacturing requirements.`,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7",
    features: ["System Design", "Custom Manufacturing", "Installation Services", "Maintenance Programs"]
  },
  'trading-manufacturing-parts': {
    title: "Trading & Manufacturing Parts",
    description: "Industrial Solutions for Design, Development & Engineering",
    fullDescription: `🏭 Trading & Precision Manufacturing
Industrial Solutions for Design, Development & Engineering
At RF Electromech Services, we offer a comprehensive range of Trading and Precision Manufacturing Services, focused on supporting industrial sectors with high-quality components, custom-built parts, and engineering-grade materials. Our expertise ensures seamless integration between product sourcing and precision fabrication—delivering reliable solutions tailored to your operational and project demands.

We serve as a one-stop partner for clients seeking excellence in industrial supply and engineered manufacturing.

🛒 Industrial Trading Services:
We supply a wide range of industrial products from globally trusted brands, including:
Mechanical, Electrical & Pneumatic Components
Industrial Automation & Control Systems
Pipes, Fittings, Flanges & Fasteners
Hydraulic & Pneumatic Valves and Accessories
Power Transmission Equipment (Belts, Bearings, Couplings, etc.)
Tools, Safety Gear & Consumables

🔩 Precision Manufacturing Services:
Our in-house manufacturing capabilities include:
CNC Machining & Turning
Custom Component Fabrication
Sheet Metal Works & Laser Cutting
Jigs, Fixtures & Tooling
Small-to-Medium Batch Production
Material Selection & Technical Consultation

🏗️ Serving Diverse Industrial Segments:
Oil & Gas
Steel & Pipe Manufacturing
Power & Utilities
Automation & Robotics
Construction & Infrastructure

🔧 From Design to Delivery:
Requirement Analysis & Technical Review
Sourcing of Certified Industrial Materials
CAD/CAM-Based Design & Machining
Inspection, Quality Control & On-Time Delivery

RF Electromech Services bridges the gap between engineering ideas and industrial execution. Whether you're sourcing components or developing custom parts, we provide unmatched reliability, precision, and technical support.

📞 Get in touch to source or manufacture your next industrial requirement with confidence.`,
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
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center px-4 py-2 text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 rounded-lg transition-all duration-300 group"
          >
            <svg className="w-5 h-5 mr-2 group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {service.description}
          </p>
        </motion.div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="sticky top-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`relative w-full h-auto object-cover rounded-xl shadow-2xl ${
                    serviceId === 'fabrication-services' ? 'max-w-sm mx-auto' : 'max-w-lg mx-auto'
                  }`}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                  {service.fullDescription}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact RF Electromech Services today to discuss your project requirements and discover how we can help bring your vision to life.
            </p>
            <Link to="/contacts">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
                Get in Touch
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}


