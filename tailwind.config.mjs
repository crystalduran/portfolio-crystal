/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'indie-flower': ['"Indie Flower"', 'cursive'],
				'lexend': ["Lexend", 'sans-serif'],
			},
		},
	},
	plugins: [],
}
