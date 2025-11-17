/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // .js ve .jsx dosyalarını da taramaya ekledim
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FFA17F', // Sizin istediğiniz renk
        'accent-hover': '#E69171', // Üzerine gelindiğinde kullanılacak biraz daha koyu bir ton ekledim
        bg: '#0e0e0e',
        fg: '#f5f5f5',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Space Grotesk',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
      },
      boxShadow: {
        soft: '0 12px 30px -12px rgba(0,0,0,0.65)',
      },
      borderRadius: {
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}