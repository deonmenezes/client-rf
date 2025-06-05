import React from "react";

const services = [
  {
    title: "E-Mobility",
    description: "Spanish mackerel yellow weaver sixgill sandperch flyingfish yellowfi",
    image: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052126/Website_demo/cbtupgyv9i0ycaobwzel.png",
  },
  {
    title: "Renewable Energy",
    description: "Yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
    image: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052125/Website_demo/sxrjppevvcuob1be362p.png",
  },
  {
    title: "UPS Solutions",
    description: "Mackerel yellow weaver sixgill sandperch flyingfish yellowfin Wall",
    image: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052125/Website_demo/w36xxavqcqghxvnwej3b.png",
  },
  {
    title: "Logistics and Delivery",
    description: "Yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout",
    image: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052126/Website_demo/diwqofevuc823enel5zk.png",
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 text-white py-16 px-8">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <p className="text-green-500 text-sm font-medium uppercase mb-2">Our Services</p>
        <h2 className="text-4xl font-extrabold">We provide one of the<br />best services</h2>
        <div className="mt-4 w-20 h-1 bg-green-500" />
      </div>

      {/* Scrollable Service Cards */}
      <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-green-500">
      <div className="flex w-max gap-0">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative w-[480px] h-[500px] flex-shrink-0 bg-black text-white"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
              <h3 className="text-xl font-semibold text-green-400">{service.title}</h3>
              <p className="text-sm mt-1">{service.description}</p>
              <div className="mt-2 w-4 h-4 border-l-2 border-b-2 border-green-500 rotate-[-45deg]" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
