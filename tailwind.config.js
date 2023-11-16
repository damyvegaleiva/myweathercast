/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blur-bg': 'rgb(112 112 112 / 50%)'
      }
    },
  },
  plugins: [],
}