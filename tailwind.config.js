/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '10px',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.052rem',
    // },
    screens: {
      sm:'480px',
      md:'650px',
      xl:'965px',
      lg:'1400px',
    },
    extend: {
      fontFamily :{

        sans: ['Poppins', 'sans-serif'],
        poppins: ['Poppins'],
      },
      // letterSpacing:{
      //   widest:'.3em'
      // },
      colors :{
        'primary-col': 'rgba(35, 37, 54, 1)',
        'secondary-col': "rgba(255, 211, 175, 1)",
        'secondary-col': "rgba(255, 211, 175, 1)",
        'tertiary-col': "rgba(236, 248, 249,1)",
        'btn': "rgba(68, 76, 252, 1)",
        'light-blk': 'rgba(0, 0, 0, 1)',
        'light-gray': 'rgba(93, 95, 109, 1)',
        'bg-serv': 'rgba(255, 230, 210, 1)',
        'testimonial': 'rgba(249, 249, 255, 1)',

      },

      keyframes : {
        moveinto: {
          '0%': { transform: 'translateX(8rem)', opacity: '0'},
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        moveinto: 'moveinto 5s ease-in-out ',
      }
    
    },
  },
  plugins: [],
}


