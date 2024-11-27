'use client'; // Add this at the top to specify client-side rendering

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light-sky-blue shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">ToolsHub</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (Desktop & Mobile) */}
        <ul
          className={`lg:flex flex-col lg:flex-row gap-8 items-center lg:static absolute lg:bg-transparent bg-light-sky-blue lg:w-auto w-full lg:top-0 top-20 left-0 lg:px-0 px-6 py-4 transition-all duration-300 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="group">
            <Link
              href="/"
              className="text-black hover:text-white hover:bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 relative group-hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li className="group">
            <Link
              href="/tools"
              className="text-black hover:text-white hover:bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 relative group-hover:scale-105"
            >
              Tools
            </Link>
          </li>
          <li className="group">
            <Link
              href="/about"
              className="text-black hover:text-white hover:bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 relative group-hover:scale-105"
            >
              About
            </Link>
          </li>
          <li className="group">
            <Link
              href="/contact"
              className="text-black hover:text-white hover:bg-orange-500 px-4 py-2 rounded-lg transition-all duration-300 relative group-hover:scale-105"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
