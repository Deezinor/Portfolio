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
    <>
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
      </header>

      {/* Mobile Menu - outside header to avoid backdrop-filter containing block */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-background border-b border-border shadow-2xl z-[100] md:hidden overflow-y-auto">
          <Container className="flex flex-col py-8 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => {
                  return clsx(
                    "text-lg uppercase tracking-wider transition-colors duration-200 py-2 px-4 rounded-lg",
                    isActive
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-muted/10",
                  );
                }}
              >
                {link.label}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
