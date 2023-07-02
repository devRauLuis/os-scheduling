/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#36413E',
				secondary: '#5d5e60',
				tertiary: '#8D8D92',
				progress: '#FF2E00',
			},
		},
	},
	plugins: [],
};

