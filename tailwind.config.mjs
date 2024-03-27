/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionTimingFunction: {
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
			},
			fontSize: {
				xxs: '0.625rem'
			},
			transitionProperty: {
				spacing: 'margin, padding'
			},
			fontFamily: {
				manrope: ['Manrope'],
				polysans: ['PolySans']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
