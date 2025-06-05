export default function Services() {
  return(
    <div className="bg-zinc-200 px-6 py-20">
  {/* Header */}
  <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
    <div>
      <p className="text-green-500 font-bold uppercase tracking-wide mb-2">Awesome services</p>
      <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
        We specialize in <br /> state-of-the-art energy solutions
      </h2>
    </div>
    <div>
      <p className="text-lg font-semibold text-neutral-800 mb-4">
        Allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. 
        Walleye poolfish sand goby butterfly ray stream catfish.
      </p>
      <p className="text-lg text-zinc-600">
        Spanish mackerel yellow weaver sixgill. Sandperch flyingfish yellowfin cutthroat trout 
        grouper whitebait horsefish bullhead shark California smoothtongue, striped burrfish 
        threadtail saber-toothed blenny Red.
      </p>
    </div>
  </div>

  {/* Cards */}
  <div className="max-w-screen-xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        id: "01",
        title: "Public Infrastructure",
        img: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051470/Website_demo/ant1.png",
      },
      {
        id: "02",
        title: "Customized Applications",
        img: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051498/Website_demo/ant2.png",
      },
      {
        id: "03",
        title: "Agriculture",
        img: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051522/Website_demo/ant3.png",
      },
      {
        id: "04",
        title: "Logistics and Delivery",
        img: "https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051548/Website_demo/ant4.png",
      },
    ].map((card) => (
      <div key={card.id} className="relative bg-white shadow-md  overflow-visible">
        <img src={card.img} alt={card.title} className="w-full h-[300px] object-cover" />
        <div className="absolute top-[-30px] left-4 text-white text-5xl font-bold font-manrope z-10">
          {card.id}
        </div>
        <div className="bg-gray-900 mb-5 text-white p-4 flex justify-between items-center">
          <p className="text-lg font-extrabold font-['Plus_Jakarta_Sans']">{card.title}</p>
          <span className="text-white">↗</span>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
