const colors = require('tailwindcss/colors');
module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'light-blue': colors.lightBlue,
				primary: '#006989',
				secondary: '#4C9F70',
				tertiary: '#EAEBED',
				progress: '#FF2E00',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
