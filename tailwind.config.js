/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_site/**/*.{html,njk}"],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "body-bg-light": "#EAEDF0",
        "secondary-bg-light": "#64ffda1a",
        "text-light": "#343A40",
        "text-secondary-light": "#6C757D",
        "secondary-light": "#F8F9FA",

        "body-bg-dark": "#18191A",
        "secondary-bg-dark": "#212529",
        "text-dark": "#E4E6EB",
        "text-secondary-dark": "B0B3B8",
        "secondary-dark": "212529",
      },
      fontFamily: {
        alata: ["Alata", "sans"],
        lora: ["Lora", "sans"],
      },
    },
  },

  plugins: [],
};
