/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "sm": "480px"
      },
      width: {
        '80%': '80%',
        '70%': '70%',
        '25%': '25%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
        '30%': '30%',
      },
      colors: {
        'my-color': {
          DEFAULT: '#ff0000',
          'dark-red': '#1D0000'
        }
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 -5px 50px 30px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
