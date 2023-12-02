/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
     container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },

      colors: {
        'gega-red': '#bc1a45',
        'gega-melon': '#ffd369',
        'gega-grey': '#dddddd',
        'gega-white': '#f7f7f7',
      },

      spacing:{
        '128': '32rem',
        '1140': '1140px',
      },
    },
  },
  plugins: [],
}

