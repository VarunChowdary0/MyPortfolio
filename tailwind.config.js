/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // extend: {},
    extend: {
      animation: {
        'random-move': 'randomMove 7s infinite', // 5s for slow movement, infinite for looping
        'random-move-sm': 'randomMoveSm 7s infinite', // 5s for slow movement, infinite for looping
      },
      keyframes: {
        randomMove: {
          '0%': { transform: 'translate(0, 0)' }, // initial position
          '20%': { transform: 'translate(20px, 0)' }, // move right 20px
          '40%': { transform: 'translate(0, 20px)' }, // move down 20px
          '60%': { transform: 'translate(-20px, 0)' }, // move left 20px
          '80%': { transform: 'translate(0, -20px)' }, // move up 20px
          '100%': { transform: 'translate(0, 0px)' }, // move up 20px
        },
        randomMoveSm: {
          '0%': { transform: 'translate(0, 0)' }, // initial position
          '20%': { transform: 'translate(10px, 0)' }, // move right 10px
          '40%': { transform: 'translate(0, 10px)' }, // move down 10px
          '60%': { transform: 'translate(-10px, 0)' }, // move left 10px
          '80%': { transform: 'translate(0, -10px)' }, // move up 10px
          '100%': { transform: 'translate(0, 0px)' }, // move up 10px
        },
      },
    },
  },
  plugins: [],
}