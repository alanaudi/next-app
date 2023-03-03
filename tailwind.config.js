/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'open-huninn': [
					'system-ui',
					'-apple-system',
					'var(--font-open-huninn)',
				],
				'taipei-sans-tc': [
					'system-ui',
					'-apple-system',
					'var(--font-taipei-sans-tc-beta)',
				],
			},
		},
	},
	plugins: [],
}
