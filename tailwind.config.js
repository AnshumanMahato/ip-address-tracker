/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      "dark-gray": "#969696",
      "very-dark-gray": "#2b2b2b",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
      "xl-up": "1336px",
    },
    extend: {},
  },
  plugins: [],
};
