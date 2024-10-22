import { color, font } from "@setaday/design-token";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: color,
      fontSize: font,
    },
  },
  plugins: [],
};
