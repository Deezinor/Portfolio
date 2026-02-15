import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,css,js,ts}",
    "./components/**/*.{html,css,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E56B5D",
        background: {
          DEFAULT: "#FAFAFA",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#1A1A1A",
          dark: "#F5F5F5",
        },
        muted: {
          DEFAULT: "#6B6B6B",
          dark: "#999999",
        },
        border: {
          DEFAULT: "#E5E5E5",
          dark: "#2A2A2A",
        },
      },
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 8vw, 6rem)",
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(2rem, 5vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        h2: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        h3: ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.6" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
        small: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 10rem)",
        "section-lg": "clamp(6rem, 15vw, 12rem)",
      },
      screens: {
        xs: "480px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-subtle": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
