import { Link } from "react-router-dom";
import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="block md:hidden p-2 text-gray-700 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
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
        id="mobile-menu"
        className={`absolute z-[999] right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ${isOpen ? "block" : "hidden"}`}
      >
        <Link
          to="/"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Home
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Projects
        </Link>
        <Link
          to="/about"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          About
        </Link>
        <Link
          to="https://almostmakessense.blog"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-2 text-gray-700 hover:underline hover:text-black"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
