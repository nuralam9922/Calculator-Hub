/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				textSecondary: 'var(--textSecondary)',
				background: 'var(--background)',
				PrimaryBackground: 'var(--primary)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
			},
		},
	},
	plugins: [require('daisyui')],
};
