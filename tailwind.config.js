/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				background: 'var(--background)',
				primary: 'var(--primary)',
			},
		},
	},
	plugins: [require('daisyui')],
};
