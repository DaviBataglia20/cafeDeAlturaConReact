/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': ' 0px 4px 4px rgba(0, 0, 0, 0.03);',
        "botones":" 0px 4px 4px 0 rgba(0, 0, 0, 0.25);"        
      },
      dropShadow:{
        "botones":" 0px 4px 4px 0 rgba(0, 0, 0, 0.25);"
      },
      colors:{
        "gris-clarito" :"#515051",
        "MejorCafe":"rgba(227, 222, 215, 0.3)"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
