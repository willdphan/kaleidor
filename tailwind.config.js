/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				Rubik: ['Rubik', 'Sans-Serif'],
				Roboto: ['Roboto Mono', 'monospace'],
			},
		},
	},
	plugins: [],
}
