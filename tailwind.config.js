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
			keyframes: {
				flash: {
					'25%, 40%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
			},
			animation: {
				flash: 'flash 2s infinite',
			},
		},
	},
	plugins: [],
}
