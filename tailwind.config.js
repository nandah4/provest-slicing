/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        monserat: "Montserrat",
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
