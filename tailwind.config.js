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
				flash1: {
					'35%, 50%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
				flash2: {
					'45%, 60%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
				flash3: {
					'55%, 70%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
				flash4: {
					'65%, 80%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
				flash5: {
					'75%, 90%': { opacity: '10' },
					'50%': { opacity: '20' },
					'75%': { opacity: '0' },
				},
			},
			animation: {
				flash: 'flash 2s infinite',
				flash1: 'flash1 2s infinite',
				flash2: 'flash2 2s infinite',
				flash3: 'flash3 2s infinite',
				flash4: 'flash4 2s infinite',
				flash5: 'flash5 2s infinite',
			},
		},
	},
	plugins: [],
}
