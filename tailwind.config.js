/* eslint-disable no-undef */
const COLORS = require('./src/colors.json');

const systemFonts = `-apple-system, BlinkMacSystemFont, "Segoi UI", Roboto, Helvetica, Arial, 
sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: COLORS,
    extend: {
      fontFamily: {
        display: `"Lato", ${systemFonts}`,
        body: `"Lato", ${systemFonts}`,
      },
      boxShadow: {
        focused: '0 4px 16px rgba(85, 155, 112, .25)',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
