import { useBackStore } from '~/stores/back'
import { usePageTitleStore } from '~/stores/page-title'

export default defineNuxtRouteMiddleware((to) => {
	const backStore = useBackStore()
	const pageTitleStore = usePageTitleStore()

	// Показываем кнопку только если мы не на главной странице
	backStore.setShowBackButton(to.path !== '/')

	// Устанавливаем заголовок страницы из метаданных
	const pageTitle = to.meta.title as string
	pageTitleStore.setTitle(pageTitle || '')
})