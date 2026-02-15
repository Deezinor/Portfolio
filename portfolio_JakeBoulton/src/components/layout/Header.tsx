import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";
import clsx from "clsx";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/process", label: "Process" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const baseClasses =
    "text-sm uppercase tracking-wider transition-colors duration-200 hover:text-accent";
  const activeClasses = "text-accent";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-lg md:text-xl font-semibold uppercase tracking-wider text-foreground"
          >
            Jake Boulton
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => {
                  return clsx(baseClasses, isActive && activeClasses);
                }}
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={clsx(
                    "w-full h-0.5 bg-foreground transition-all duration-300",
                    isMenuOpen && "rotate-45 translate-y-2",
                  )}
                />
                <span
                  className={clsx(
                    "w-full h-0.5 bg-foreground transition-all duration-300",
                    isMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={clsx(
                    "w-full h-0.5 bg-foreground transition-all duration-300",
                    isMenuOpen && "-rotate-45 -translate-y-2",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 top-16 bg-background z-40 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <Container className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => {
                return clsx(
                  "text-3xl uppercase tracking-wider transition-colors duration-200",
                  isActive
                    ? "text-accent"
                    : "text-foreground hover:text-accent",
                );
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </Container>
      </div>
    </header>
  );
};

export default Header;
