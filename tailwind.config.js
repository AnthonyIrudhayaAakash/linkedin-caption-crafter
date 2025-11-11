/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077b5", // LinkedIn Blue
        accent: "#0a66c2",  // Slightly darker blue
      },
    },
  },
  plugins: [],
};
