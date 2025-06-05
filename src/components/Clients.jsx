export default function Clients() {
  const logos = [
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052315/Website_demo/partner1.png",
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052334/Website_demo/partner2.png",
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052361/Website_demo/partner3.png",
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052377/Website_demo/partner4.png",
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052394/Website_demo/partner5.png",
    "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052634/Website_demo/wrlomnxcswtmqc6bbh0s.png",
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <p className="text-green-500 text-base font-medium">Partners</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          Partners who trust <br /> us
        </h2>

        {/* Logo Row */}
        <div className="mt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
          <div className="flex gap-12 min-w-max">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="h-14 opacity-20 hover:opacity-40 transition-opacity duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
