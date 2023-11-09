/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#DF2E38",
        primarySmooth: "#DDF7E3",
        primaryNaked: "#DDF7E3",
        primaryGreen: "#5D9C59",
      },
    },
  },
  plugins: [],
};
