module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
      zIndex: {
        100: '100',
      },
      colors: {
        primary: '#0A003C',
        secondary: '#9C4DF4',
      },
      screens: {
        mobile: '320px',
        // => @media (min-width: 320px) { ... }
      },
    },
  },

  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/aspect-ratio'),
  ],
}
