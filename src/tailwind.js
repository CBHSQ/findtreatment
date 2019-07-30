module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        teal: {
          '100': '#D8EBF2',
          '200': '#ADE3F7',
          '300': '#73CEF0',
          '400': '#45BAE6',
          '500': '#2C98C0',
          '600': '#2285A9',
          '700': '#196986',
          '800': '#0F4756',
          '900': '#033340'
        }
      },
      screens: {
        print: { raw: 'print' }
      }
    }
  },
  plugins: []
};
