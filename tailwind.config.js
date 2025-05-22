/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00BFA6',
        secondary: '#F55E53',
        sidebar: '#001E3E',
        background: '#F8F9FA',
        'text-primary': '#333333',
        'text-secondary': '#6C757D',
        'in-progress': '#00BFA6',
      },
    },
  },
  plugins: [],
}
