/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./helpers/**/*.{js,ts,jsx,tsx}"],
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
          primary: "#12181F",
          "primary-content": "#ffffff",
          "primary-focus": "#12181F",
          // secondary: "#0095f6",
          // "secondary-focus": "#0095f6",
          accent: "#EDCC5B",
          "accent-content": "#12181F",
          "accent-focus": "#EDCC5B",
          info: "#EEEEEE",
          "info-content": "#ffffff",
          "info-focus": "#EEEEEE",
          error: "#ef4444",
          "error-content": "#ffffff",
          "error-focus": "#ef4444",
        },
      },
    ],
  },
};
