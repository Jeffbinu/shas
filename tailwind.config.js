/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#1777ff",
          600: "#0b63ff",
        },
        accent: "#0ea5a4",
      },
      borderRadius: {
        lg2: "18px",
      }
    },
  },
  plugins: [],
};
