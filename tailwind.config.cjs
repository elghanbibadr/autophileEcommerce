/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    colors: {
      textColor:"#000033",
      textWhite:"#fff",
      orange:"#d87d4a",
      orangePale:"#efae8b",
      paleBlack:"#191919",
      black:"#000000",
      lightGray:"#F1F1F1",
      blackHover:"#565454",
    },
    border:{
      "border-1":"1px"
    }

  },
  plugins: [],
}
