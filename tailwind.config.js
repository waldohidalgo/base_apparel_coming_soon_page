/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        desaturedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayishRed: "hsl(0, 6%, 24%)",
      },
      backgroundImage: {
        gradientFirst:
          "linear-gradient(135deg,hsl(0, 0%, 100%),hsl(0, 100%, 98%))",
        gradientSecond:
          "linear-gradient(135deg,hsl(0, 80%, 86%),hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
};
