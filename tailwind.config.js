/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {  
      'sm': '640x',  
      'md': '765px',  
      'lg': '1024px',  
      'xl': '1280px'   
    },
    fontFamily: {
      Rubik: [`"Rubik`, `sans-serif`]
    },
    extend: {
      colors:{
        SoftBlue: `hsl(231, 69%, 60%)`,
        SoftRed: `hsl(0, 94%, 66%)`,
        GrayishBlue: `hsl(229, 8%, 60%)`,
        VeryDarkBlue: `hsl(229, 31%, 21%)`
      }
    },
  },
  plugins: [],
}

