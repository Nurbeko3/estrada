/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Dark academic color
        accent: "#c0a062", // Gold/Bronze for premium feel
      },
    },
  },
  plugins: [],
};
