/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
          toast: {
            // 'success': '#10B981', // Green
            'success': '#EF4444', // Green
            'error': '#EF4444',   // Red
            'warning': '#F59E0B', // Amber
            'info': '#3B82F6',    // Blue
            'default': '#6B7280', // Gray
          }
        },
    },
    // gridTemplateColumns: {
    //   '70/30': '70% 28%',
    // }
  },
  plugins: [],
}
