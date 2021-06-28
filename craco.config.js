/* eslint-disable no-undef */
// craco.config.js
// eslint-disable-next-line no-undef
module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
