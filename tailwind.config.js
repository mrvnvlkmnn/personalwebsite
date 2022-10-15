/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon' : {
          'yellow': '#f4ff57',
        }
      }
    },
  },
  plugins: [],
}
