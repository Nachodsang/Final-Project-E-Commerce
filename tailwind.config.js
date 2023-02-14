/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A3C00",
        accent: {
          DEFAULT: "#FC9826",
          hover: "#78A22F",
        },
      },
      backgroundImage: {
        trekking: "url('../src/assets/image/athletic.jpg')",
        wardrobe: "url('../src/assets/image/wardrobe.jpg')",
        sustain: "url('../src/assets/image/sustanable.jpg')",
      },
    },
  },
  plugins: [],
};
