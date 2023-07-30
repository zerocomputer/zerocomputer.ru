/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
		'./resources/**/*.blade.php',
		'./resources/**/*.ts',
		'./resources/**/*.vue',
	],
    theme: {
      extend: {
        colors: {
          'blueness': '#0F172A',
          'white': '#E2E8F0',
          'body': '#94A3B8',
          'accent': '#00FFC2',
          'accent-transparent': 'rgba(0, 255, 194, 0.24)',
        },
        boxShadow: {
          'cart': '0px -1px 0px 0px rgba(255, 255, 255, 0.16), 0px 4px 4px 0px rgba(0, 0, 0, 0.16)',
          'contact': '0px -1px 0px 0px rgba(0, 255, 194, 0.50), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)',
        },
        backgroundImage: {
          'cart': 'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), url(/public/noise.png)'
        },
      },
    },
    plugins: [],
  }

