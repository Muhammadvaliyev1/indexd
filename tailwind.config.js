/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1780': '1780px',
        '1600': '1600px',
        '1440': '1440px',
        '1310': '1310px',
        'sll': '1150px',
        'base': '840px'
      },
      fontFamily: {
        'SpaceGrotesk': ['Space Grotesk']
      },
      gap: {
        '1.4': '5px',
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
        'ray': '#8698A9',
        'green': '#80CF55',
        'space-green': '#87DB5A',
        'spaced-green': '#DFF3D5',
        'space-gray': '#577983',
        'spaced-gray': '#B0B0B0',
        'spacedd-gray': '#798487',
        'white-gray': '#7C7C7C',
        'darkblue': '#0F3641',
        'wheat': '#F2F2F2',
        'space-wheat': '#F7F7F7',
        'border': '#DCDCDC',
        'red': '#F52828',
        'rouse-red': '#EE3333'
      }
    },
  },
  plugins: [],
}

