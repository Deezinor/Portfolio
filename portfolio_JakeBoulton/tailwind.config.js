import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Purge unused styles
  content: [
    './pages/**/*.{html,css,js,ts}',
    './components/**/*.{html,css,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
