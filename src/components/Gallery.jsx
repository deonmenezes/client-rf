const features = [
  {
    id: "01",
    title: "Advance Technology",
    description:
      "Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish",
  },
  {
    id: "02",
    title: "High-Energy Battery",
    description:
      "Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish",
  },
  {
    id: "03",
    title: "Rapid Charging Solutions",
    description:
      "Sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish. Spanish mackerel",
  },
  {
    id: "04",
    title: "Seamless Integration",
    description:
      "Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish",
  },
];

export default function 

Gallery() {
  return (
    <div className="bg-zinc-200 py-16 px-6">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <p className="text-green-500 text-sm font-medium">How we work</p>
        <h2 className="text-4xl font-bold text-gray-800">Our key features</h2>
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-x-auto h-[400px] scrollbar-thin scrollbar-thumb-gray-400">
  <div className="flex gap-6 px-6 w-[calc(350px*4+6rem)]"> {/* 4 cards + gaps */}

          {features.map((feature, i) => (
            <div
              key={i}
              className={`w-[350px]  flex-shrink-0 bg-white border-b-4 border-gray-900 p-6 rounded-lg relative ${
                i === features.length - 1 ? "opacity-50" : ""
              }`}
            >
              {/* Number */}
              <div className="absolute -top-8 left-6 text-7xl text-green-500 font-bold opacity-80">
                {feature.id}
              </div>
              {/* Title */}
              <h3 className="mt-10 text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
