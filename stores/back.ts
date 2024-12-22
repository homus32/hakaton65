import { defineStore } from 'pinia'

export const useBackStore = defineStore('back', {
	state: () => ({
		showBackButton: false
	}),
	actions: {
		setShowBackButton(value: boolean) {
			this.showBackButton = value
		}
	}
})