/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
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
          300:"#5ae3b1",
          400:"#ffcc41"
        }
      }
    },
  },
  plugins: [],
}
