/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FEA852",
        accent: {
          DEFAULT: "#FC9826",
          hover: "#FBD980",
        },
      },
      backgroundImage: {
        trekking: "url('../src/assets/image/athletic1.jpg')",
        wardrobe: "url('../src/assets/image/wardrobe1.jpg')",
        sustain: "url('../src/assets/image/sustanable1.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
