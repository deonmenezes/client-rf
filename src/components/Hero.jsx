export default function Hero() {
  return(
    <div className="w-full min-h-screen relative overflow-hidden bg-black">
  {/* Background Image with Gradient */}
  <img
    src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749051295/Website_demo/page1_img.png"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="absolute inset-0 bg-gradient-to-l from-black/0 to-emerald-950 opacity-60 z-10" />

  {/* Main Content */}
  <div className="relative z-20 flex flex-col justify-center items-start px-6 md:px-20 max-w-7xl mx-auto h-screen">
    <h1 className="text-white text-2xl md:text-[50px]  font-extrabold tracking-wide leading-snug max-w-3xl">
      Redefining Energy with <br></br>Innovative Storage for a <br></br> Sustainable Tomorrow
    </h1>
    <p className="mt-6 text-white text-base md:text-[18px] max-w-xl leading-loose">
      allan wrasse climbing gourami amur pike Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish sand goby butterfly ray stream catfish jewfish, Spanish
    </p>
    <button className="mt-8 flex items-center gap-3 border-2 border-green-500 px-6 py-3 text-white font-medium hover:bg-green-600 transition">
      Explore more
      <div className="w-4 h-4 bg-white rounded-full" />
    </button>
  </div>

  {/* Side Number Navigation */}
  <div className="absolute top-1/2 left-2  transform -translate-y-1/2 space-y-10 z-30 hidden md:block">
    <div className="text-zinc-600 font-medium ">01</div>
    <div className="w-px h-16 bg-gray-400">
      <div className="w-px h-8 bg-green-500" />
    </div>
    <div className="text-zinc-600 font-medium">03</div>
  </div>

  {/* Pagination Circles */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-30">
    <div className="w-4 h-4 border-2 border-gray-900 rounded-full bg-white"></div>
    <div className="w-4 h-4 rounded-full bg-neutral-300"></div>
    <div className="w-4 h-4 rounded-full bg-neutral-300"></div>
  </div>
</div>

  )
}
