/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-very-dark-gray": "hsl(0, 0%, 17%)",
        "tw-dark-gray": "hsl(0, 0%, 59%)",
      },

      backgroundImage: {
        "tw-pattern-desktop": "url(./src/assets/images/pattern-bg-desktop.png)",
        "tw-pattern-mobile": "url(./src/assets/images/pattern-bg-mobile.png)"
      }
    },
  },
  plugins: [],
}

