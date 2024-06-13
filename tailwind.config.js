/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#4C5FD5',
				customPurple: '#dadbf1',
				black: '#000000',
				white: '#fff'
			}
		},
		screens: {
			xs: '375px',
			md: '425px',
			sm: '502px',
			lg: '768px',
			lgs: '864px',
			xl: '1024px',
			xlm: '1200px',
			xlg: '1280px',
			xxl: '1464px'
		}
	},
	plugins: []
}
