/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': ' 0px 4px 4px rgba(0, 0, 0, 0.03);',
      },
      colors:{
        "gris-clarito" :"#515051"
      }
    },
  },
  plugins: [],
}
