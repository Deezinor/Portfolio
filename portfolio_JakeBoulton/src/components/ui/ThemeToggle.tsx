import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../../hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, toggle, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg transition-colors duration-300 hover:bg-muted/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FiMoon className="w-5 h-5 text-foreground" />
      ) : (
        <FiSun className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
