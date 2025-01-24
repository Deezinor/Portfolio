import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import React from "react";

const Header: React.FC = () => {
  // const linkClasses = "text-base md:text-2xl";

  return (
    <header className="container mx-auto">
      <nav className="mx-4 my-8 flex justify-between items-center ">
        <div>
          <h1 className="text-4xl font-medium text-nowrap uppercase">
            Jake Boulton
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-6 lg:gap-12 items-center text-base uppercase md:text-2xl text-gray-600">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <Link to="/cv" className="hover:text-black">
            CV
          </Link>
          <Link to="/about" className="hover:text-black">
            About
          </Link>
          <Link to="/contact" className="button button--black">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
