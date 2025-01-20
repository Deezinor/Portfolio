import { Link } from "react-router-dom";
import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="block md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <div
        className={`absolute z-[999] right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link to="/"
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Home
        </Link>
        <Link to="/about"
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          About
        </Link>
        <Link to="/services"
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Services
        </Link>
        <Link to="/contact"
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
