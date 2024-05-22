/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      fontSize: {
        xs: '13px'
      },
      screens: {
        vxs: {
          max: '335px'
        },
        xs: {
          max: "360px",
        },
      },
    },
  },
  plugins: [],
};
