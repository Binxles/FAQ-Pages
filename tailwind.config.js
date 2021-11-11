module.exports = {
  mode: "jit",
  purge: [
    "./partials/**/*.hbs",
    "./pages/**/*.hbs",
    "./templates/**/*.hbs",
    "./src/**/*.js",
    "./src/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1117px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "lendNation-green": "#84bd00",
        "lendNation-blue": "#003057",
        "lendNation-header-gray": "#978a82",
        "lendNation-header-mobile-blue": "#003057",
        "lendNation-footer-gray": "#d3d0c7",
        "lendNation-footer-link": "#003057",
        "lendNation-footer-copyright": "#666767"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
