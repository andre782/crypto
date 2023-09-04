module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "sans-serif"]
      },

      colors: {
        primary:"#458EF9",
        secondary: "#F9A846",
        blue: "#2F7CF0",
        black: "#222222",
        gray: "#A9A9A9",
        lightgray: "#DDDDDD",
        green: "#28C165",
        red: "#F4574D",
      }
    },
  },
  plugins: [],
}