/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary-ff': ['Roboto', 'sans-serif'],
        'secondary-ff': ['Mulish', 'sans-serif']
      },
      colors: {
        'clr-primary': '#ffffff',
        'clr-secondary': '#f2f2f2',
        'clr-accecent': '#f1c50e',
        'clr-text': '#000'
      },
      backgroundImage: {
        'hero-bg': 'linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(../img/img-01.jpeg)',
      },
    },
  },
  plugins: [],
}

