// tailwind.config.js
module.exports = {
  purge: [
    "./index.html", // Your main HTML file
    "./src/**/*.{vue,js,ts,jsx,tsx}", // All relevant files in your src directory
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
