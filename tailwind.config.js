/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   './pages/**/*.{js,ts,jsx,tsx,,scss}', 
   './useComponents/**/*.{js,ts,jsx,tsx,scss}', 
   './usePieces/**/*.{js,ts,jsx,tsx,scss}', 
   './useCases/**/*.{js,ts,jsx,tsx,scss}',
   './layouts/**/*.{js,ts,jsx,tsx,scss}'
  ],
    theme: {
      container: {
        maxWidth: '300%',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['OpenSans'],
        altoneTrial: ['Altone Trial'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        colors: {
          brand: {
            primary: {
              light: '#004B74',
              dark: '#013B5A',
            },
            secondary: {
              light: '#EBEBEB',
              dark: '#1B252B ',
              darkest: '#141D23',
            },
            accent: {
              light: '#E88E22',
              soft: '#F2A03F',
            }
          },
          transparent: 'transparent',
        },
        
      }
    },
  plugins: [],
}