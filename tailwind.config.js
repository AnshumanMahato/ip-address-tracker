/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "very-dark-gray": "#969696",
      "dark-gray": "#2b2b2b",
    },
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
    },
    backgroundImage: {
      "pattern-mob": "url(src/assets/pattern-bg-mobile.png)",
      "pattern-desk": "url(src/assets/pattern-bg-desktop.png)",
    },
    extend: {},
  },
  plugins: [],
};
