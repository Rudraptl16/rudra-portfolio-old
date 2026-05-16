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
        dark: {
          bg: '#0d1117',
          surface: '#161b22',
          primary: '#00d4ff',
          secondary: '#7c3aed',
          textMain: '#e6edf3',
          textMuted: '#8b949e',
          border: '#30363d',
        },
        light: {
          bg: '#f8fafc',
          surface: '#ffffff',
          primary: '#0891b2',
          secondary: '#7c3aed',
          textMain: '#0f172a',
          textMuted: '#64748b',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
