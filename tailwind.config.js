/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ['*.html'],
  theme: {
    colors: {
      'blue':'#252531',
      'white':'white',
      'slate':'#CCCCCC',
      'coffee':'#B98E75',
    },
    fontFamily: {
      'sans': ['Graphik', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'figtree': ['Figtree', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
     'rubikmono': ['Rubik Mono One', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1320px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1320px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

