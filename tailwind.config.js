/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      form: "0px 4px 16px rgba(141, 211, 187, 0.15)",
    },
    backgroundImage: {
      "hero-bg": "url('../assets/images/hero img.png')",
      hero: " linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%),url('../assets/images/hero img.png')",
    },
    height: {
      hero: "600px",
    },
    extend: {
      fontFamily: {
        font2: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        "green-ish": " #112211",
        border: "#79747E",
        "l-green": "#8DD3BB",
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
