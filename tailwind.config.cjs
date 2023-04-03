/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      shPrimary: {
        light: "#ff7ae7",
        DEFAULT: "#ff2ed8",
        dark: "#cc25ad",
        darker: "#80176c",
      },
      buttons: {
        bottom: "#242632",
        border: "#CCC",
        top: "#3A3C4A",
      },
      fondos: {
        gradient_top: "#2D3246",
        gradient_bottow: "#1A1C29",
      },
    },
    extend: {},
  },
  plugins: [],
};
