/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      GrayishBlue: "hsl(229, 8%, 60%)",
      VeryDarkBlue: "hsl(229, 31%, 21%)",
      SoftBlue: "hsl(231, 69%, 60%)",
      SoftRed: "hsl(0, 94%, 66%)",
      White:"#ffff"
    },
    fontFamily: {
      rubik: "'Rubik', sans-serif;",
    },
    extend: {},
  },
  plugins: [],
}

