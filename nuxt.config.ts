import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';
const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{sky.50}',
			100: '{sky.100}',
			200: '{sky.200}',
			300: '{sky.300}',
			400: '{sky.400}',
			500: '{sky.500}',
			600: '{sky.600}',
			700: '{sky.700}',
			800: '{sky.800}',
			900: '{sky.900}',
			950: '{sky.950}'
		}
	}
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: {enabled: true},
	modules: [
		'@primevue/nuxt-module',
		'@nuxtjs/google-fonts'
	],
	googleFonts: {
		families: {
			Roboto: {
				// Подключаем нужные начертания
				wght: ['400', '700']
			}
		},
		// Используем swap для оптимальной загрузки
		display: 'swap',
		// Подключаем нужные подмножества символов
		subsets: ['cyrillic', 'latin'],
		// Включаем prefetch и preconnect для оптимизации
		prefetch: true,
		preconnect: true,
		// Не включаем preload, так как уже используем swap
		preload: false
	},
	devServer: {
		host: '0.0.0.0',
		port: 3000
	},
	ssr: false,

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	primevue: {
		directives: {
			include: ['Ripple']
		},
		autoImport: false,
		components: {
			include: [
				'Button',
				'Select',
				'RadioButton',
			],
		},
		options: {
			ripple: true,
			inputStyle: 'filled',
			theme: {
				preset: MyPreset,
				options: {
					darkModeSelector: '.dark-mode',
				}
			},
		},
	},
	css: ["~/main.css", "primeicons/primeicons.css"]
})
