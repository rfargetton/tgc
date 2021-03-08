const colors = require('tailwindcss/colors');
  
  module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      asphalte: "#343C41",
      automne: {
        DEFAULT: "#DD773B",
        dark: "#C16834 "
      },
      feuillage: "#474C33",
      gravier: {
        light: "#ECD8B6",
        DEFAULT: "#E1BF86"
      },
      gray: colors.trueGray,
      white: colors.white,
      black: colors.black,
      red: colors.red
    },
    fontSize: {
      "sm": "0.75rem",
      "base": "1rem",
      "lg": "1.25rem",
      "xl": "1.5rem",
      "2xl": "2rem",
      "3xl": "3rem",
      "4xl": "4rem"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
