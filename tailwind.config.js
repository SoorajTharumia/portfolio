/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: '#136ef6',
        gray: '#363333',
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#e2e8f0',
          border: '#334155'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(19, 110, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(19, 110, 246, 0.4)',
      }
    },
  },
  plugins: [],
}