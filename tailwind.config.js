/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#00A550",
        secondColor: "blue"
      },

      fontFamily:{
        Soke : "Open Sans"
      }
    },
  },
  plugins: [],
}

