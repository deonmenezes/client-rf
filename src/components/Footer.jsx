import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: Logo & Description */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749052925/Website_demo/nexus_logo.png"
              alt="Logo icon"
              className="h-16 w-16"
            />
            <img
              src="https://res.cloudinary.com/ddodvrq4x/image/upload/v1749053116/Website_demo/qyrhcvonvugxlhfubtv4.png"
              alt="Nexus Logo"
              className="h-14"
            />
          </div>
          <p className="text-zinc-200 text-sm leading-6">
            Arctic char, steelhead sprat sea lamprey grunion. Walleye poolfish
            sand goby butterfly ray stream catfish jewfish.
          </p>
        </div>

        {/* Middle: Navigation Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Main Menu</h3>
            <ul className="space-y-2 text-zinc-200 text-sm">
              <li className="text-green-500 border-b-2 border-green-500 w-fit">Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Our Projects</li>
            </ul>
          </div>
          <div className="mt-9 md:mt-12">
            <ul className="space-y-2 text-zinc-200 text-sm">
              <li>Careers</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-zinc-200 text-sm mb-4">
            Goosefish gar pleco, chum salmon armoured
          </p>
          <div className="flex items-center border-b border-neutral-600">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-sm text-gray-400 focus:outline-none py-2 w-full"
            />
            <button className="text-green-500 text-sm font-semibold underline ml-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-white mt-10" />

      {/* Bottom Section */}
      <div className="max-w-screen-xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>2022 Industrium. All Rights reserved by Artureanec</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of use
          </a>
        </div>
      </div>
    </footer>
  );
}
