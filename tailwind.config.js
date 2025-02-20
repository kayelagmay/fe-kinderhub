/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#A8B5A2",
        cream: "#F5EDE1",
        gold: "#E4B363",
        coral: "#D97B66",
        blue: "#A4C3D2",
      },
    },
  },
  purge: false,
  plugins: [],
};