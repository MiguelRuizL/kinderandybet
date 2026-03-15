/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169E1',
        'primary-dark': '#3457C9',
        'primary-light': '#6B8EE8',
        secondary: '#FFD93D',
        accent: '#FF6B6B',
        background: '#FAFBFF',
        foreground: '#1A1A2E',
        muted: '#6B7280',
        'muted-foreground': '#9CA3AF',
        card: '#FFFFFF',
        'card-foreground': '#1A1A2E',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        display: ['Fredoka', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
