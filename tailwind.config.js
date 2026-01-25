/* eslint-disable global-require */
module.exports = {
  // mode: 'jit', // Temporariamente desabilitado
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        primary: '#F06E0B',
        secondary: '#ffffff',
        black: '#333333',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
