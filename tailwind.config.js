/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      nunito:['Nunito Sans', "sans-serif"]
    },
    extend: {
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280px"
      },
      spacing:{
        big:"45rem",
        bigh:"23rem"
      },
    },
  },
  plugins: [],
}

