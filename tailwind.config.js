/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050505',
        neonCyan: '#00f2ff',
        neonPurple: '#bc13fe',
        neonGreen: '#39ff14',
      },
      boxShadow: {
        'neon': '0 0 15px rgba(0, 242, 255, 0.4)',
        'neon-purple': '0 0 15px rgba(188, 19, 254, 0.4)',
      }
    },
  },
  plugins: [],
}