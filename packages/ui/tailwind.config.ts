/** @type {import('tailwindcss').Config} */

const { color, font } = require("@setaday/design-token");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      fontSize: font,
    },
  },
  plugins: [],
};
