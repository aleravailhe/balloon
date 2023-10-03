/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sofia: ['Sofia Sans Condensed', 'sans-serif']
    },
    fontWeight: {
      extraLight: 200,
      regular: 400,
      medium: 500,
    },
      colors: {
        dark_purple: "#331832",
        raspberry: "#d81e5b",
        vermillion: "#f0544f",
        papaya: "#fdf0d5",
        ash_gray: "#C6D8D3",
        white: '#ffffff'
      },
      extend: {},
  },
  plugins: [],
}