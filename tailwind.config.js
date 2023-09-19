/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    // Add your custom active class here
    backgroundColor: {
      'active': '#ff0000', // Change to your desired color
    }},
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}