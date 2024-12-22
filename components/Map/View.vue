<script setup lang="ts">
const minWidth = 140
const width = ref(140)
const maxWidth = 500
const step = 40

const zoomIn = () => {
	width.value = Math.min(width.value + step, maxWidth)
}

const zoomOut = () => {
	width.value = Math.max(width.value - step, minWidth)
}

</script>

<template>
	<div class="relative">
		<div class="w-full h-64 overflow-scroll my-2 rounded-xl">
			<div :style="{ width: width + '%' }" class="relative">
				<img
						src="/1-1.png"
						alt="Большое изображение"
						class="w-full"
				/>
				<img src="/1-1/1.svg" alt="track" class="absolute w-[25.1998%] h-[47.5133%] left-[20.005%] top-[41.0746%]">
			</div>
		</div>
		<!-- Кнопки масштабирования -->
		<div class="absolute bottom-2 right-2 flex flex-col gap-2 ">
			<Button
					icon="pi pi-plus"
					severity="secondary"
					size="small"
					rounded
					aria-label="Увеличить"
					@click="zoomIn"
					:disabled="width >= maxWidth"
			/>
			<Button
					icon="pi pi-minus"
					severity="secondary"
					size="small"
					rounded
					aria-label="Уменьшить"
					@click="zoomOut"
					:disabled="width <= minWidth"
			/>
		</div>
	</div>
</template>

<style scoped>
.p-button.p-button-rounded {
	width: 2.5rem;
	height: 2.5rem;
}
</style>