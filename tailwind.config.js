/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'kanit': ['Kanit']
      },
      boxShadow: {
        'thumbnail': '0 7px 20px 0 rgba(202,203,207,0.5)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      brightness: {
        25: '.25',
        75: '.75'
      }
    },
  },
  plugins: [],
}

