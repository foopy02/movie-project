/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      darkBlue: "#0C111B",
      textTransparent: "#9CA3AF",
      white: "#ffffff",
      black: "#000000",
      lightBlue: "#1F80E0",
      transparent: "transparent"
    },
    extend: {
      backgroundImage: {
        'carousel-movie-1': "url('assets/movies/img/carousel-movie-1.png')",
      }
    },
  },
  plugins: [],
}