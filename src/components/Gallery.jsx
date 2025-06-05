const features = [
  {
    id: "01",
    title: "Smart Control Systems",
    description:
      "Custom-designed controllers and automation panels tailored for energy systems, logistics, and public infrastructure.",
  },
  {
    id: "02",
    title: "Battery Management Expertise",
    description:
      "Advanced battery selection, integration, and lifecycle management for EVs, UPS, and hybrid energy systems.",
  },
  {
    id: "03",
    title: "Integrated Energy Monitoring",
    description:
      "Real-time energy data analysis and IoT-enabled monitoring for efficient power usage across verticals.",
  },
  {
    id: "04",
    title: "Tailored R&D and Prototyping",
    description:
      "Rapid prototyping and in-house testing of electronics and embedded systems to accelerate deployment cycles.",
  },
];

export default function Gallery() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-gray-100 to-zinc-200 py-20 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
          How we work
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
          Our Key Features
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Innovative solutions designed to power the future of energy and automation
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature, i) => (
          <div
            key={feature.id}
            className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            
            {/* Feature Number */}
            <div className="relative mb-6">
              <div className="text-7xl font-black bg-gradient-to-br from-emerald-400 to-cyan-500 bg-clip-text text-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                {feature.id}
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet Horizontal Scroll */}
      <div className="lg:hidden">
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 px-6 min-w-max">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className="w-80 sm:w-96 flex-shrink-0 bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Feature Number */}
                <div className="mb-6">
                  <div className="text-6xl sm:text-7xl font-black bg-gradient-to-br from-emerald-400 to-cyan-500 bg-clip-text text-transparent opacity-25">
                    {feature.id}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {features.map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}