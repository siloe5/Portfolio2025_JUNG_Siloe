/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-bg': "url('/images/windows.jpg')",
      },

        colors: {
          'dark-1': '#000000',  // <- ta couleur personnalisée
          'dark-2': '#181012',
          'dark-3': '#1F1F22',

          gray: {
            200: "#D5DAE1",
          },
          black: {
            DEFAULT: "#000000",
            500: "#1D2235",
          },
          blue: {
            500: "#2B77E7",
          },
        },
        fontFamily: {
          worksans: ["Work Sans", "sans-serif"],
          poppins: ['Poppins', "sans-serif"],
          inter: ["Inter", "sans-serif"],   // <- ajout ici
        },
        boxShadow: {
          card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
        }
      },
    },
    plugins: [],
  }
