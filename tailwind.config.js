/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0773bb',
          green: '#3db54a',
        },
      },
    },
  },

  plugins: [],
};
