/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily:{
        about:["Edu VIC WA NT Beginner","cursive"]

      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        typing: {
          '0%': { width: '0%',opacity:0 },
          '50%': { width: '100%', opacity:1},
          '100%': { width: '0%' ,opacity:0},
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        fadeIn: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        drawBorder: {
          '0%': { width: '0', height: '0', borderColor: 'transparent', },
          '25%': { width: '50%', height: '0', borderColor: 'white', },
          '50%': { width: '50%', height: '100%', borderColor: 'white',  },
          '75%': { width: '100%', height: '100%', borderColor: 'white', },
          '100%': { width: '100%', height: '100%', borderColor: 'white',  },
        },
      },
      animation: {
        typing: 'typing 4s steps(20) infinite, blink .75s step-end infinite',
        fade: 'fadeIn 3000 ease-in-out infinite',
        drawBorder: 'drawBorder 3s ease forwards',
         rotate: "rotate 10s linear infinite",
      },
      boxShadow: {
        'bulge': '0 10px 20px rgba(0, 0, 0, 0.5), 0 6px 10px rgba(0, 0, 0, 0.3)',
        'deep': '0 15px 30px rgba(0, 0, 0, 0.6), 0 10px 15px rgba(0, 0, 0, 0.4)',
        'soft': '0 5px 10px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#fea928',
        secondary: '#ed8900',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [
    require('taos/plugin'),
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
