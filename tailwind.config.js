/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f7fbff',
        oat: '#d9e7f5',
        mist: '#eef7ff',
        skywash: '#e7f2ff',
        peach: '#f4f9ff',
        butter: '#dff0ff',
        sage: '#7fa6c8',
        moss: '#1e6fa8',
        teal: '#2288b8',
        navy: '#123b63',
        ink: '#152b3f',
        leaf: '#d8ecff',
        clay: '#4d8fc2',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(30, 111, 168, 0.14)',
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Segoe UI',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
