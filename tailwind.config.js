/** @type {import('tailwindcss').Config} */
export default {
  content: [ `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`, ],
  theme: {
    extend: {
      colors: {
        'baseColor1': '#001F3F',
        'baseColor2': '#3A6D8C',
        'baseColor3': '#6A9AB0',
        'baseColor4': '#EAD8B1',
      }
    },
  },
  plugins: [],
}

