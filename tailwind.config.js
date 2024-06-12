/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#dadbf1'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif']
			}
		},
		screens: {
			xs: '375px',
			md: '425px',
			lg: '768px',
			xl: '1024px',
		}
	},
	plugins: []
}
