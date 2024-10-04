/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlack: '#131215',
        lightGray : '#1c1c1e',
        lightPurple: '#d0afff',
        textGray: '#b0bec5',
        innerBox: '#1a191c',
        good: '#98ed92'
      },
      fontFamily: {
        quickSand: ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}