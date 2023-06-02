/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
        gold: "#eea324",
      },
    },
  },
  plugins: [],
};
