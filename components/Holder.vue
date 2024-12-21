<script setup lang="ts">
interface Props {
	header: string;
	maxHeight?: string | number;
}

const props = defineProps<Props>();
const contentRef = ref<HTMLElement | null>(null);
const showFade = ref(false);
const isExpanded = ref(false);

onMounted(() => {
	const checkOverflow = () => {
		if (contentRef.value && props.maxHeight && !isExpanded.value) {
			const maxHeightValue = typeof props.maxHeight === 'number'
					? props.maxHeight
					: parseInt(props.maxHeight);

			showFade.value = contentRef.value.scrollHeight > maxHeightValue;
		}
	}

	checkOverflow();
	window.addEventListener('resize', checkOverflow);
});
</script>

<template>
	<div class="rounded-lg bg-white p-3 shadow-lg mb-3">
		<h1 class="text-xl font-bold mb-3">{{ header }}</h1>
		<div class="relative">
			<div
					ref="contentRef"
					class="overflow-hidden transition-[max-height] duration-300 ease-in-out"
					:style="{
          maxHeight: isExpanded
            ? `${contentRef?.scrollHeight || 1000}px`
            : (typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight)
        }"
			>
				<slot></slot>
			</div>

			<!-- Градиент и кнопка "Показать все" -->
			<div
					v-if="showFade && !isExpanded"
					class="flex flex-col items-center"
			>
				<div class="absolute bottom-0 left-0 right-0">
					<div
							class="w-full h-44 pointer-events-none"
							style="background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);"
					/>
				</div>
				<Button
						class="px-6 py-2 !bg-white text-black shadow-lg !absolute bottom-5"
						text
						rounded
						@click="isExpanded = true"
				>
					Показать все
				</Button>
			</div>

			<!-- Кнопка "Скрыть" -->
			<div
					v-if="isExpanded"
					class="flex justify-center"
			>
				<Button
						class="px-6 py-2 !bg-white text-black shadow-lg"
						text
						rounded
						@click="isExpanded = false"
				>
					Скрыть
				</Button>
			</div>
		</div>
	</div>
</template>

<style scoped>
:deep(.p-button.p-button-text) {
	color: black;
}

:deep(.p-button.p-button-text:enabled:hover) {
	background: rgba(0, 0, 0, 0.04);
	color: black;
}
</style>