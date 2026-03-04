/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        nexaBlue: '#3fa9ff',
        nexaPurple: '#7c4dff',
        nexaInk: '#080910'
      },
      boxShadow: {
        glow: '0 0 40px rgba(63,169,255,.35)'
      }
    }
  },
  plugins: []
};
