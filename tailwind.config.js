/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1db954',
        secondary: '#1ed760',
        white: '#ffffff',
        black: '#191414',
      },
      spacing: {
        px: '1px',
        em: '1em',
        rem: '1rem',
        '2px': '2px',
        '3px': '3px',
        // Agrega otras medidas si las necesitas
      },
    },
  },
  plugins: [],
};
