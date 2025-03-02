/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //Colors used in Project
      colors: {
        primary: '#FF9800',
        secondary: '#b56141',
        background: '#FFFCF8',
        white: 'E5ECF6',  
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #FFC107, #FF9800 )',
      },
    },
  },
  plugins: [],
}

