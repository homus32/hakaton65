import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},
	modules: [
		'@primevue/nuxt-module'
	],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	primevue: {
		directives: {
			include: ['Ripple', 'Tooltip']
		},
		components: {
			include: [
				'Button',
				'DatePicker'
			]
		},
		options: {
			ripple: true,
			inputStyle: 'filled',
			theme: {
				preset: Aura,
				options: {
					darkModeSelector: '.dark-mode',
				}
			},
		},
	},
	css: ["~/main.css"]
})
