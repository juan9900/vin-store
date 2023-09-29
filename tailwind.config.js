/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#f5e4f7",
      secondary: {
        DEFAULT: "#ce8cd4",
        dark: "#ab6eb1",
      },
      blueHeader: "#80b1d9",
      darkText: "#403c3e",
    },

    extend: {
      // Remove the gradient from the body background
      backgroundImage: (theme) => ({
        none: "none",
      }),
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        walkwayBlack: ["WalkwayBlack", "sans-serif"],
        boilingBlack: ["BoilingBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
});
