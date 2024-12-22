import { defineStore } from 'pinia'

export const usePageTitleStore = defineStore('pageTitle', {
	state: () => ({
		title: ''
	}),
	actions: {
		setTitle(newTitle: string) {
			this.title = newTitle
		}
	}
})