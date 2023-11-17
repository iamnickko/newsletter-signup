/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(4, 100%, 67%)",
        darkslategrey: "hsl(234, 29%, 20%)",
        charcoalgrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        body: ['Roboto']
      },
      listStyleImage: {
        tick: 'url("./images/icon-list.svg")'
      }
    },
  },
  plugins: [],
};
