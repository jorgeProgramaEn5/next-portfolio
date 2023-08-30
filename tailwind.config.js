/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        wiggledown: {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        pinggg: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          }
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
        wiggledown: 'wiggledown 0.5s ease-in-out',
        pinggg: 'pinggg 2s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary:{
          100:"#7958d7",
          200:"#63bff3",
          300:"#5ae3b1",
          400:"#ffcc41"
        },
        secondary:{
          100:"#ff7c3e",
          200:"#63bff3",
          300:"#25d366",
          400:"#797979"
        },
        background:{
          100:"#2b2a33",
          200:"#63bff3",
        },
        colortext:{
          100:"#fbfbfe",
          200:"#63bff3",
          300:"#25d366",
          400:"#797979"
        }
      }
    },
  },
  plugins: [],
  pseudo: {
    'before': 'before',
  },
}

