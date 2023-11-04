/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      quicksand:['Quicksand, sans-serif'],
      grechen:['Grechen Fuemen, cursive']
    },
  },
  plugins: [require("daisyui")],
}

