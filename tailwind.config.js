/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#503C90',
				secondary: '#302456',
				tertiary: '#100C1D',
				code: '#6A52B7',
			},
			keyframes: {
				'step-rotate': {
					to: { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'step-rotate': 'step-rotate 1s steps(10) infinite',
			},
			fontFamily: { mono: ['"Ubuntu Mono"'] },
		},
	},
	plugins: [],
};

