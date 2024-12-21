<template>
	<div class="w-full relative">
		<div class="slider-container flex flex-row gap-2 overflow-x-scroll whitespace-nowrap px-0.5 pb-3">
			<MenuSliderCard
					v-for="item in items"
					:key="item.page"
					v-bind="item"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
interface CardItem {
	icon: string;
	text: string;
	page: string;
}

defineProps<{
	items: CardItem[]
}>();
</script>

<style scoped>

.slider-container {
	scroll-behavior: smooth;
	scrollbar-width: thin;
}
</style>