/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '.page/**/*.tsx',
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    extend: {
      colors: {
        'slowpoke-gray':{
          100: '#585858',
        },
        'slowpoke-black':{
          900: '#000'
        },
        'slowpoke-pink': {
          900: '#F090BC',
          800: '#E1C2F6',
        },
        'slowpoke-beige': {
          800: '#FDE2C0',
          700: '#FFF1DF',
        },
        'slowpoke-white':{
          900: '#FFF',
        },
        'warning-red': {
          900: '#FF0000',
        },
        'success-green': {
          900: '#2ED889',
        },
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
