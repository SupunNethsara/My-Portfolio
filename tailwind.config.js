/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Add all JSX and TSX files
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite', // Adjust the speed as needed (e.g., 5s)
      },
      backgroundImage: {
        circleStar: "url('/circle-star.svg')", // Correct path to your image
        explosion: "url('/bg-explosion.png')",
      },
    },
  },
  plugins: [],
};