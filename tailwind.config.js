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
          primary: "#4543A5",
          "primary-content": "#ffffff",
          "primary-focus": "#4543A5",
          // secondary: "#0095f6",
          // "secondary-focus": "#0095f6",
          accent: "#DCDCFF",
          "accent-content": "#4543A5",
          "accent-focus": "#DCDCFF",
          info: "#EEEEEE",
          "info-content": "#ffffff",
          "info-focus": "#EEEEEE",
        },
      },
    ],
  },
};
