<script setup lang="ts">
import { useBackStore } from '~/stores/back'
import { usePageTitleStore } from '~/stores/page-title'
import { storeToRefs } from 'pinia'

const router = useRouter()
const backStore = useBackStore()
const pageTitleStore = usePageTitleStore()
const { showBackButton } = storeToRefs(backStore)
const { title } = storeToRefs(pageTitleStore)

const goBack = () => {
	router.push('/')
}
</script>

<template>
	<div class="relative bg-white p-2 pt-3 shadow-md flex items-center">
		<Button
				v-if="showBackButton"
				icon="pi pi-arrow-left"
				@click="goBack"
				size="small"
				class="text-black  p-0 text-lg"
				severity="contrast"
				variant="text"
				text rounded
		/>
		<h1 class="font-bold p-2">{{ title }}</h1>
	</div>
	<div class="p-2">
		<slot/>
	</div>
</template>

<style scoped>
</style>

<style>
body {
	@apply bg-blue-50
}
</style>