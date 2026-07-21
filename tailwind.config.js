/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#14532D",
        accent: "#166534",
        light: "#FFFFFF",
        dark: "#0F172A",
        grayLight: "#F3F4F6",
        grayDark: "#1F2937",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
