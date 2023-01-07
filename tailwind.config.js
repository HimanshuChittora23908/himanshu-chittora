/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('/src/images/Background.svg')",
        "background-about": "url('/src/images/AboutBackground.svg')",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        source: ["Source Sans Pro", "sans-serif"],
        east: ["East Sea Dokdo", "cursive"],
      },
      colors: {
        footer: "rgba(255, 109, 109, 1)",
        "contact-us": "rgba(170, 74, 74, 1)",
        "form-text": "rgba(133, 133, 133, 1)",
        "form-line": "rgba(196, 196, 196, 1)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
