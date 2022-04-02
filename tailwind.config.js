module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        100: '100',
      },
      colors: {
        primary: '#0A003C',
        secondary: '#9C4DF4',
      },
    },
  },

  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/aspect-ratio'),
  ],
}
