/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [animations],
  theme: {
    screens : {
      "5xl" : { max: "1920px" },
      "4xl" : { max: "1870px" },
      "3xl" : { max: "1680px" },
      "2xl" : { max: "1400px" },
      "xl" : { max: "1200px" },
      "lg" : { max: "992px" },
      "md" : { max: "768px" },
      "sm" : { max: "576px" },
      "xs" : { max: "450px" },
      "xxs" : { max: "375px" },
    },
    extend: {
      colors: {
        'orange': '#f48c06',
        'red': '#f94144',
        'green': '#1ef600',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      animation: {
        'fade': 'fade 1s linear',
        'fade-out': 'fade-out 1s linear',
      },
      keyframes: {
        'fade': {
          from: { width: '0%' },
          to: { width: '100%' },
        },
        'fade-out': {
          from: { width: '100%' },
          to: { width: '0%' },
        },
      }
    },
  },
}

