module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: { backgroundColor: ["disabled"] },
  },
  plugins: [],
};
