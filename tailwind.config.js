/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      spacing: {
        '15': '3.75rem',
        '103': '25.75rem',
      },
      width: {
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
