/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      "hero-bg": "url('../assets/images/hero img.png')",
      hero: " linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%),url('../assets/images/hero img.png')",
    },
    height: {
      hero: "600px",
    },
    extend: {
      fontFamily: {
        font2: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
