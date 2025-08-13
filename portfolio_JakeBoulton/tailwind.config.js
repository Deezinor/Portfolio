import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,css,js,ts}',
    './components/**/*.{html,css,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#E56B5D', // Example primary color
      },
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
