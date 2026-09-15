/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggled via ThemeContext adding/removing 'dark' on <html>
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand: deep indigo/violet primary — reads as "AI/automation" without
        // tipping into generic blue SaaS. Used consistently for CTAs, links, accents.
        brand: {
          50: '#f1f0ff',
          100: '#e4e2ff',
          200: '#cbc7ff',
          300: '#a8a0ff',
          400: '#8b7dff',
          500: '#6d5bfa',
          600: '#5a3fe6',
          700: '#4a30c2',
          800: '#3c299b',
          900: '#33267c',
          950: '#1f1650',
        },
        // Neutral scale tuned slightly cool so it pairs well with brand violet
        surface: {
          50: '#f8f8fb',
          100: '#f0f1f6',
          200: '#e2e3ec',
          300: '#c8cad9',
          400: '#9a9db5',
          500: '#6f7290',
          600: '#565a75',
          700: '#40435c',
          800: '#2a2c3d',
          900: '#191a26',
          950: '#0d0e15',
        },
        accent: {
          teal: '#2dd4bf',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgb(109 91 250 / 0.5)',
        card: '0 4px 24px -4px rgb(15 15 30 / 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        marquee: 'marquee 30s linear infinite',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
