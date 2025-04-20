/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "!./**/*/node_modules/"],
  theme: {
    extend: {
      colors: {
        secondary: "#ECEFCA",
        primary: "#213448",
        cardBg: "#547792"
      }
    },
  },
  plugins: [],
}

