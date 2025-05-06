/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    //overwrite default theme or tailwind default configuration
    extend: {
      // extend tailwind configuration
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
