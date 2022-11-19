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
          900: '#252525'
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
        pokemonTypes: {
          normal: '#A8A77A',
          fire: '#EE8130',
          water: '#6390F0',
          electric: '#F7D02C',
          grass: '#7AC74C',
          ice: '#96D9D6',
          fighting: '#C22E28',
          poison: '#A33EA1',
          ground: '#E2BF65',
          flying: '#A98FF3',
          psychic: '#F95587',
          bug: '#A6B91A',
          rock: '#B6A136',
          ghost: '#735797',
          dragon: '#6F35FC',
          dark: '#705746',
          steel: '#B7B7CE',
          fairy: '#D685AD',
        },
      },
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
