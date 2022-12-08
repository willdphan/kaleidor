/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto Mono', 'monospace'],
				Inter: ['Inter', 'sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
		},
	},
	plugins: ['tailwindcss/nesting', 'postcss-nesting'],
}
