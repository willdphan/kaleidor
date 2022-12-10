/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Mont: ['Montserrat', 'sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 60s linear infinite',
			},
		},
	},
	plugins: ['tailwindcss/nesting', 'postcss-nesting'],
}
