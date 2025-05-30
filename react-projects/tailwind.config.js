/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}", "!./**/*/node_modules/"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primary_accent: "var(--primary_accent)",
        primary_text: "var(--primary_text)"
      }
    },
  },
  plugins: [],
}

//recipes
//theme: {
//  extend: {
//    colors: {
//      secondary: "#ECEFCA",
//      primary: "#213448",
//      cardBg: "#547792"
//    }
//  },
//},
//interactive comments section
//theme: {
//  extend: {
//    colors: {
//      myPurple600: "hsl(238, 40%, 52%)",
//      myPink400: "hsl(358, 79%, 66%)",
//      myPurple200: "hsl(239, 57%, 85%)",
//      myPink200: "hsl(357, 100%, 86%)",
//      myGrey800: "hsl(212, 24%, 26%)",
//      myGrey500: "hsl(211, 10%, 45%)",
//      myGrey100: "hsl(223, 19%, 93%)",
//      myGrey50: "hsl(228, 33%, 97%)",
//      myWhite: "hsl(0, 100%, 100%)",
//    }
//  },
//},
