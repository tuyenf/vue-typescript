/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "18px",
      lg: "20px",
      xl: "28px",
      "2xl": "36px",
    },
    extend: {
      colors: {
        textDark: "#364a63",
        textLight: "#8094ae"
      }
      },
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
  prefix: "tw-",
}

