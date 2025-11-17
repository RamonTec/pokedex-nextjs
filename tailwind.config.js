
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          fadeIn: {
              '0%': { opacity: 0, transform: 'translateY(10px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
          },
          float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-8px)' }
          }
      },
      animation: {
          fadeIn: 'fadeIn 0.5s ease-out forwards',
          float: 'float 3s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
  ],
};
