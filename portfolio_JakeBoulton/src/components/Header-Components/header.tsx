import { NavLink } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import React from "react";

const Header: React.FC = () => {
  const baseClasses =
    "hover:text-black transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
  const activeClasses = "text-black border-b-2 border-accent pb-1";

  return (
    <header className="container mx-auto" id="header">
      <nav className="mx-4 my-8 flex justify-between items-center">
        <NavLink to="/">
          <h1 className="text-4xl font-medium text-nowrap uppercase">
            Jake Boulton
          </h1>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-6 lg:gap-12 items-center text-base uppercase text-gray-600">
          <NavLink
            to="/"
            end
            className={({ isActive }) => {
              return `${baseClasses} ${isActive ? activeClasses : ""}`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) => {
              return `${baseClasses} ${isActive ? activeClasses : ""}`;
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/Gallery"
            className={({ isActive }) => {
              return `${baseClasses} ${isActive ? activeClasses : ""}`;
            }}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/cv"
            className={({ isActive }) => {
              return `${baseClasses} ${isActive ? activeClasses : ""}`;
            }}
          >
            CV
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => {
              return `${baseClasses} ${isActive ? activeClasses : ""} button button--black`;
            }}
          >
            Contact
          </NavLink>
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
