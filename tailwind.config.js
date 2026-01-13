/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#1a1a1a", // Dark academic color
        accent: "#c0a062", // Gold/Bronze for premium feel
      },
    },
  },
  plugins: [],
};
