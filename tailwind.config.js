/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      form: "0px 4px 16px rgba(141, 211, 187, 0.15)",
      card: "0px 4px 16px rgba(17, 34, 17, 0.05)",
      cardReview: "0px 4px 16px rgba(17, 34, 17, 0.1)",
    },
    backgroundImage: {
      "hero-card": "url('../assets/images/Rectangle 41.png')",
      "hero-card2": "url('../assets/images/Rectangle 40.png')",
      "hero-bg": "url('../assets/images/hero img.png')",
      hero: " linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%),url('../assets/images/hero img.png')",
      "flight-hero":
        "linear-gradient(90deg, rgba(0, 35, 77, 0.63) 11.46%, rgba(0, 35, 77, 0) 77.37%), url('../assets/images/flighthero.jpg')",
      // "flight-hero": "url('../assets/images/frame 36.png')",
    },
    extend: {
      height: {
        hero: "600px",
        "flight-height": "537px",
      },
      fontFamily: {
        font2: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        reviewLinear: "rgba(141, 211, 187, 0.4)",
        "green-ish": " #112211",
        border: "#79747E",
        "l-green": "#8DD3BB",
        "news-letter": "#CDEAE1",
        "mint-green": "#8DD3BB",
        black: "#1C1B1F",
        "new-red": "#FF8682",
      },
      width: {
        "fixed-width": "1232px",
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
