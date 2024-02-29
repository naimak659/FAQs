/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'lightPink': 'hsl(275, 100%, 97%)',
        'GrayishPurple': 'hsl(292, 16%, 49%)',
        'DarkPurple': 'hsl(292, 42%, 14%),'
      },
      fontFamily : {
        'workSans' : '"Work Sans", sans-serif;'
      },
    },
  },
  plugins: [],
}

