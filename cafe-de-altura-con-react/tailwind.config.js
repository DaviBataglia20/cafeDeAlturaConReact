/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': ' 0px 4px 4px rgba(0, 0, 0, 0.03);',
        "botones":" 0px 4px 4px 0 rgba(0, 0, 0, 0.25);",
        "coffeCard":" 0px 5px 5px #F0F0F0;",     
        "coffeCardHover":"0px 5px 5px #CACACA"   
      },
      textShadow: {
        "texto-sombra":" 0px 4px 3px rgba(207, 207, 207, 1);",
        "texto-novedades":"0px 2px 3px #CACACA"
      },
      colors:{
        "gris-clarito" :"#515051",
        "MejorCafe":"rgba(227, 222, 215, 0.3)",
        "verdeC" :"#2A5B45",
      },

    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
