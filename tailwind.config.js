const colors = require('tailwindcss/colors');
  
  module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      asphalte: "#242c31",
      automne: "#DD773B",
      feuillage: "#474C33",
      gravier: {
        light: "#ECD8B6",
        DEFAULT: "#E1BF86"
      },
      gray: colors.trueGray,
      white: colors.white,
      black: colors.black
    },
    fontSize: {
      "base": "1rem",
      "lg": "1.5rem",
      "xl": "2rem",
      "2xl": "3rem",
      "3xl": "4rem"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
