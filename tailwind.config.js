/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      screens: {
        xs: {
          max: "360px",
        },
      },
    },
  },
  plugins: [],
};
