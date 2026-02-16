import { Link } from "react-router-dom";
import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="block md:hidden p-2 text-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

      {/* Navigation Menu - Fixed overlay */}
      <div
        id="mobile-menu"
        className={`fixed z-[9999] top-[72px] right-0 left-0 mx-4 bg-background/98 backdrop-blur-md border border-border shadow-2xl rounded-lg py-4 ${isOpen ? "block" : "hidden"}`}
      >
        <Link
          to="/"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-3 text-foreground hover:bg-muted/10 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/work"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-3 text-foreground hover:bg-muted/10 transition-colors"
        >
          Work
        </Link>
        <Link
          to="/about"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-3 text-foreground hover:bg-muted/10 transition-colors"
        >
          About
        </Link>
        <Link
          to="https://almostmakessense.blog"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-3 text-foreground hover:bg-muted/10 transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            return setIsOpen(false);
          }}
          className="block px-4 py-3 text-foreground hover:bg-muted/10 transition-colors border-t border-border mt-2 pt-3"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default HamburgerMenu;
