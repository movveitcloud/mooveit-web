/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#26348c",
          // "primary-content": "#ffffff",
          // "primary-focus": "#26348c",
          // secondary: "#0095f6",
          // "secondary-focus": "#0095f6",
          // accent: "#f68634",
          // "accent-content": "#ffffff",
          // "accent-focus": "#f68634",
        },
      },
    ],
  },
};
