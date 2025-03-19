/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors of the project
      colors: {
        primary: "#2BB5FF",
        secondary: "#EF863E",
      },
    },
  },
  plugins: [],
}

