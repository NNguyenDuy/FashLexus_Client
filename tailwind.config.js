/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#061738",
        secondaryColor: "#ee2761",
        tGrayColor: "#606060",
        yellowColor: "#ffc107",
        bgGrayColor: "#fcfcfc",
        bgBlackGray: "#2d2d2d",
      },
      boxShadow: {
        box: "0 0 6px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
