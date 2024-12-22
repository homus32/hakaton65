<script setup lang="ts">
import { ref, computed } from 'vue'
import mapData from '~/utils/map'

interface Props {
	mapLink: string
	track: number
}

const props = defineProps<Props>()

const minWidth = 140
const width = ref(140)
const maxWidth = 500
const step = 40

// Получаем ID карты из mapLink (например, из "https://ski-gv.ru/hills/1/1/" получаем "1-1")
const mapId = computed(() => {
	const match = props.mapLink.match(/\/hills\/(\d+)\/(\d+)\//)
	return match ? `${match[1]}-${match[2]}` : ''
})

// Получаем стили для конкретного трека
const trackStyle = computed(() => {
	const hillData = mapData.data().find(hill => hill.hill === mapId.value)
	if (!hillData) return null

	const trackData = hillData.tracks.find(t => t.track === props.track)
	return trackData?.style
})

const zoomIn = () => {
	width.value = Math.min(width.value + step, maxWidth)
}

const zoomOut = () => {
	width.value = Math.max(width.value - step, minWidth)
}
</script>

<template>
	<div class="relative" id="map-view">
		<div class="w-full h-64 overflow-scroll my-2 rounded-xl">
			<div :style="{ width: width + '%' }" class="relative">
				<img
						:src="`/${mapId}.png`"
						alt="Map"
						class="w-full"
				/>
				<img
						v-if="trackStyle"
						:src="`/${mapId}/${track}.svg`"
						alt="track"
						class="absolute track-blink"
						:style="{
            width: trackStyle.width + '%',
            height: trackStyle.height + '%',
            left: trackStyle.left + '%',
            top: trackStyle.top + '%',
          }"
				>
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
@keyframes blink {
	0% { opacity: 0; }
	100% { opacity: 1; }
}

.track-blink {
	animation: blink 0.5s ease-in-out infinite alternate;
}
</style>