export default function ProjectHighlight() {
  return (
    <div className="relative w-full h-[748px] bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052774/Website_demo/bridge_bk.png" // replace with actual path
        alt="Structure"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White & Black blocks overlapping at the top left */}
      <div className="absolute top-0 left-[330px]">
        <div className="w-36 h-32 bg-white relative z-10" />
        <div className="w-36 h-32 bg-gray-900 absolute -top-[129px] left-0 z-0" />
      </div>

      {/* Testimonial Card */}
      <div className="relative z-20 max-w-2xl bg-gray-900 p-10 text-white ml-auto mt-40 mr-[200px] shadow-lg">
        {/* Quotation Icon */}
        <div className="mb-6">
          <div className="w-11 h-10 bg-green-500" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 leading-snug">
          What people says <br /> about us
        </h2>

        {/* Paragraph */}
        <p className="text-lg leading-loose mb-8">
          Spanish mackerel yellow weaver sixgill sandperch flyingfish yellowfin cutthroat trout
          grouper whitebait horsefi Bichir neon tetra blue eye bleak sergeant major lumpsucker
          tilapia Ratfish darter leatherjacket woody sculpin fierasfer Pacific salmon Chinook
          salmon zebra danio nase. Salamanderfish; pumpkinseed spikefish Black mackerel Spanish
          mackerel
        </p>

        {/* Author */}
        <p className="text-lg font-semibold">Samuel Smith / CEO Atlant</p>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-white flex items-center justify-end pr-[390px]">
        <div className="flex gap-4">
          <span className="w-2.5 h-2.5 border border-gray-800 rounded-full" />
          <span className="w-2 h-2 bg-white rounded-full" />
          <span className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>

      {/* Green Bottom Stripe */}
      <div className="absolute bottom-0 right-[200px] w-[672px] h-28 bg-green-500 z-10" />
    </div>
  );
}
