/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': "'Lato', sans-serif",
        'mukta': "'Mukta', sans-serif",
        'karla': "'Karla', sans-serif",
      }
    },
  },
  plugins: [],
}

