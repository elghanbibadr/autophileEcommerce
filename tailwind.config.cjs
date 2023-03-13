/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors: {
      textColor:"#000033",
      white:"#fff",
      orange:"#d87d4a",
      orangePale:"#efae8b",
      paleBlack:"#191919",
      black:"#000000",
      lightGray:"#F1F1F1",
      blackHover:"#565454",
      lightBlack:"rgb(67, 67, 67, 0.3)"
    },
    border:{
      "border-1":"1px"
    }

  },
  plugins: [],
}
