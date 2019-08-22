module.exports = {
  theme: {
    colors: {
      blue: {
        default: '#1a7bbc'
      },
      gray: {
        lightest: '#f5f5f8',
        lighter: '#f0f0f0',
        light: '#a9aeb1',
        default: '#71767a',
        dark: '#4a5568',
        darker: '#2c3747',
        darkest: '#171717'
      },
      teal: {
        default: '#44bae6'
      },
      white: {
        default: '#ffffff'
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
