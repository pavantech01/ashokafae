/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7befb2', // Ashoka Green
        secondary: '#3EA997', // Light Gray
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'dancing': ['"Dancing Script"', 'cursive'],
        'great-vibes': ['"Great Vibes"', 'cursive'],
        'funnel': ['"Funnel Sans"', 'sans-serif'], 
        'rochester': ["Rochester", "cursive"], 
        'rounded': ['"Arial Rounded MT Bold"', 'Arial', 'sans-serif'],


      },
      letterSpacing: {
        widest: '0.1em', // Custom wider spacing
      }
    },
  },
  plugins: [],
}

