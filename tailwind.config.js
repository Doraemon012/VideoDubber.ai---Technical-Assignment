/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'light-dark': 'var(--mantine-color-black)',
        'dark-light': 'var(--mantine-color-white)',
        'custom-gray': '#2d2e2e',
        'breadcrumb-gray': '#757575',
      },
      fontSize: {
        'custom-title': '28px',
        'custom-subtitle': '24px',
      },
      margin: {
        '40': '10rem',
        '5': '1.25rem',
      },
    },
  },
  plugins: [],
}

