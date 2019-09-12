module.exports = {
  theme: {
    colors: {
      black: '#000000', // print text color
      blue: {
        lighter: '#eefbff',
        light: '#2380bf',
        default: '#1a7bbc' // primary/outline buttons
      },
      gold: '#ffbe22', // help line
      gray: {
        lightest: '#f9f9f9', // homepage search background
        lighter: '#f1f5f6', // official banner
        light: '#d7d7d7',
        default: '#71767a',
        dark: '#4e4e4e', // alternative header text
        darker: '#2c3747',
        darkest: '#171717' // body text
      },
      green: '#39912E',
      teal: {
        lighter: '#f1f5f6',
        light: '#759aac',
        default: '#44bae6' // homepage accent background
      },
      transparent: 'transparent',
      white: '#ffffff',
      yellow: {
        lighter: '#fffcee',
        default: '#f7b500'
      }
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      heading: ['Roboto Condensed', 'sans-serif'],
      sans: ['Public Sans', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      }
    }
  },
  plugins: []
};
