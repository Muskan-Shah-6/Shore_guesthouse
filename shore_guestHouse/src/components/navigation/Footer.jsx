import React from 'react';
import { RiFacebookFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold tracking-wide"><Link  to='/'>Shore Guesthouse</Link></h2>
          <hr className="my-2 w-16 h-1 bg-amber-500 border-none rounded" />
          <p className="text-sm text-gray-400">© 2025 All Rights Reserved</p>
        </div>

        {/* Center Section - Contact Info */}
        <div className="space-y-2 cursor-pointer">
          <p className="text-sm font-medium">📧 webcodexinfo6@gmail.com</p>
          <p className="text-sm font-medium">📞 +91 63569 27255</p>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center sm:justify-end gap-5 text-white">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-200">
            <RiFacebookFill size={24} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-200">
            <AiFillInstagram size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-sky-400 transition-colors duration-200">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className='bg-[#d1aa80] p-5 mt-3'>
        <h1 className='text-center text-amber-900'>Made with ❤️ by <span className='text-amber-950 font-semibold underline cursor-pointer'>Webcodex</span></h1>
      </div>
    </footer>
  );
};

export default Footer;
