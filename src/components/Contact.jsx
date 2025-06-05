import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="w-full bg-[#0f1c24] py-16 px-4 md:px-20 text-white font-[Manrope]"
    style={{ backgroundImage: 'https://res.cloudinary.com/ddodvrq4x/image/upload/v1749048985/Website_demo/back_earth.png' }}
    
   
    >
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <p className="text-base">Contacts</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            We are always ready <br /> to help you and answer <br /> your questions
          </h2>

          <div className="space-y-6">
            {/* Address */}
            <div>
              <h3 className="text-xl font-bold">New York</h3>
              <p className="text-zinc-200 leading-7">
                523 Sylvan Ave, 5th Floor <br /> Mountain View, CA 94041 USA
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-green-500 leading-7">+1 234 719 8948</p>
              <p className="text-green-500 leading-7">+1 987 654 3210</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-zinc-200 leading-7">Interested in working with us?</p>
              <a
                href="mailto:support@consultum.com"
                className="text-green-500 underline"
              >
                support@consultum.com
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold">Follow us</h3>
              <div className="flex gap-4 mt-2">
                {[<CiLinkedin />, <FaFacebookF />, <CiTwitter />, <CiInstagram />].map((platform) => (
                  <div
                    key={platform}
                    className="w-11 h-11 flex items-center justify-center bg-gray-900 border border-green-500 text-white hover:bg-green-500 hover:text-black transition"
                  >
                    <i >{platform}</i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-white text-black p-8 rounded shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-zinc-600 mb-6">
            We’d love to hear from you. Fill out the form and we’ll get back to you soon!
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Subject</label>
              <input
                type="text"
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                className="w-full border-b border-neutral-300 focus:outline-none focus:border-green-500 py-2"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 uppercase text-sm font-semibold tracking-wide hover:bg-green-600"
            >
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
