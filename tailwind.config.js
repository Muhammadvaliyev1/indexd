/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sll': '1150px',
        'base': '840px'
      },
      fontFamily: {
        'SpaceGrotesk': ['Space Grotesk']
      },
      width: {
        '1/10': '10%',
        '44%': '44%'
      },
      opacity: {
        '12': '0.12'
      },
      colors: {
        'gray': '#1C4551',
        'green': '#80CF55',
        'space-green': '#87DB5A',
        'space-gray': '#577983',
        'spaced-gray': '#B0B0B0',
        'spacedd-gray': '#798487',
        'white-gray': '#7C7C7C',
        'darkblue': '#0F3641',
        'wheat': '#F2F2F2',
        'space-wheat': '#F7F7F7',
        'border': '#DCDCDC'
      }
    },
  },
  plugins: [],
}

