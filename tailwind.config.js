/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      gridTemplateColumns: {
        // 'desktop': 'repeat(4, 1fr)',
        // 'mobile': 'repeat(2, 180px)',
      }
    },
    screens: {
      'xs': '0px',
      'sm': '670px',
      'md': '1148px',
      'lg': '1280px',
      'xl': '1920px'
    }
  },
  plugins: [],
}