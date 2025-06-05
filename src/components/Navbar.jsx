import React from 'react';
import { Menu, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-white shadow-md flex items-center justify-between px-4 md:px-10">
      
      {/* Left: Hamburger and Logo */}
      <div className="flex items-center gap-4">

        <Menu className="w-5 h-5 text-gray-700 cursor-pointer md:hidden" />
        <div className="flex items-center gap-2">

          <img src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052925/Website_demo/nexus_logo.png" alt="Logo" className="w-8 h-8" />
          
          <span className="text-xl font-semibold text-gray-700">NEXUS</span>
        </div>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#" className="text-green-500 relative">
          Home
          <span className="block h-0.5 w-full bg-green-500 absolute bottom-[-4px] left-0" />
        </a>
        <a href="#" className="text-gray-700 hover:text-green-500">Services</a>
        <a href="#" className="text-gray-700 hover:text-green-500">Projects</a>
        <a href="#" className="text-gray-700 hover:text-green-500">Blog</a>
        <a href="#" className="text-gray-700 hover:text-green-500">Contacts</a>
      </nav>

      {/* Right: Search and Button */}
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
        <button className="bg-green-500 text-white px-4 py-5 rounded-md hidden md:block">
          Get In Touch
        </button>
      </div>
    </header>
  );
};

export default Navbar;
