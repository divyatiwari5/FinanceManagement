const { colors } = require("./src/style/global/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: { ...colors },
    },
  },
  plugins: [],
};
