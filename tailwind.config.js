/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        barlow: ['"Barlow Semi Condensed"', "serif"],
      },
      colors: {
        violet: "hsl(263, 55%, 52%)",
        grayishBlue: "hsl(217, 19%, 35%)",
        blackishBlue: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(0, 0%, 81%)",
        lightGrayishBlue: "hsl(210, 46%, 95%)",
      },
    },
  },
  plugins: [],
};
