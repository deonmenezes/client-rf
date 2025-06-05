import React from 'react';

const posts = [
  {
    
    category: 'Industry',
    title: 'Creation of industrial projects around the world',
    date: '02',
    monthYear: "Aug '22",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog1.png',
  },
  {
    category: 'Manufacture',
    title: 'Manufacturing research in Kiev and other regions of the country',
    date: '02',
    monthYear: "Aug '22",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog2.png',
  },
  {
    category: 'Industry',
    title: 'Construction of a new high-tech plant in Washington',
    date: '02',
    monthYear: "Aug '22",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog3.png',
  },
  {
    category: 'Manufacture',
    title: 'Interactive technologies in factories and plants',
    date: '02',
    monthYear: "Aug '22",
    image: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048457/Website_demo/blog4.png',
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <p className="text-green-500 text-sm">. Blog</p>
        <h2 className="text-4xl font-bold text-gray-800 leading-snug mt-2">
          Articles & blog posts<br />with useful information
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-sm rounded-md overflow-hidden">
            <div className="relative">
              <img src={post.image} alt="Blog visual" className="w-full h-80 object-cover" />
              <div className="absolute bottom-4 right-4 flex flex-col items-center">
                <div className="bg-green-500 w-16 h-14 flex items-center justify-center">
                  <span className="text-gray-800 text-3xl font-bold">{post.date}</span>
                </div>
                <div className="bg-gray-900 w-16 h-6 flex items-center justify-center">
                  <span className="text-white text-xs">{post.monthYear}</span>
                </div>
              </div>
            </div>

            <div className="px-4 py-3">
              <p className="text-green-500 text-sm flex items-center">
                <span className="mr-1">.</span>{post.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-800 leading-snug">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="flex items-center gap-2 border-2 border-green-500 text-green-500 px-6 py-2 uppercase text-sm font-medium hover:bg-green-500 hover:text-white transition">
          More blog posts
          <span className="w-2 h-2 bg-green-500 rotate-45 transform inline-block ml-1"></span>
        </button>
      </div>
    </div>
  );
}
