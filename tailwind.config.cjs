// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#121316",         // app background deep
        panel: "#23262a",      // darker panel card
        card: "#2a2d35",       // main card bg
        cardDark: "#1b1d22",   // darker btn / inner tab
        divider: "#2f3239",
        textMuted: "#9aa0a6",
        accentBlue: "#4fa8ff"
      },
      boxShadow: {
        'soft-3': '0 10px 24px rgba(3,6,12,0.55)',
        'inset-soft': 'inset 0 2px 6px rgba(255,255,255,0.02)',
        'neumorph': '8px 8px 20px rgba(0,0,0,0.6), -8px -8px 20px rgba(255,255,255,0.02)'
      },
      borderRadius: {
        'xl-2': '18px'
      }
    },
  },
  plugins: [],
}
