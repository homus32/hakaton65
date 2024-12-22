<script setup lang="ts">
import type {Track, TrackLabel} from '~/utils/types';

interface Props {
	track: Track;
	active?: boolean; // Добавляем prop для активного состояния
}

const props = defineProps<Props>();
const emit = defineEmits<{
	'select': [trackNumber: number] // Определяем emit события выбора трассы
}>();

// Обработчик клика по карточке
const handleClick = () => {
	emit('select', Number(props.track.number));
};

// Добавить Emit который возвращает track: int - если пользователь нажал на карточку надо вернуть track.number в эмите
const getTrackLabels = (track: Track): TrackLabel[] => {
	const labels: TrackLabel[] = [];

	if (track.params.length) {
		labels.push({ icon: 'arrows-h', text: track.params.length });
	}

	if (track.params.height) {
		labels.push({ icon: 'arrow-up', text: track.params.height });
	}

	if (track.params.time) {
		labels.push({ icon: 'clock', text: track.params.time });
	}

	if (track.params.lighting) {
		labels.push({ icon: 'sun', text: track.params.lighting });
	}

	if (track.params.snow) {
		labels.push({ icon: 'cloud', text: track.params.snow });
	}

	return labels;
};

</script>

<template>
	<div
			class="w-full p-4 my-2 rounded-md shadow-md cursor-pointer transition-colors"
			:class="[
      active ? 'bg-sky-100' : 'bg-gray-50',
      'hover:bg-sky-100'
    ]"
			@click="handleClick"
	>
		<div class="flex items-center mb-4">
			<div class="flex items-center gap-3">
				<div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium"
							:style="`background-color: ${track.params.color}`"
				>
					{{ track.number }}
				</div>
				<h1 class="text-xl font-medium">{{ track.name }}</h1>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-3">
			<TracksLabel
					v-for="label in getTrackLabels(track)"
					:key="label.icon"
					:icon="label.icon"
					:text="label.text"
			/>
		</div>

		<div class="mt-3">
			<div
					class="flex items-center gap-2"
					:class="track.status.toLowerCase() === 'открыта' ? 'text-green-600' : 'text-red-600'"
			>
				<i class="pi" :class="track.status.toLowerCase() === 'открыта' ? 'pi-check-circle' : 'pi-times-circle'" />
				<span class="font-medium">{{ track.status }}</span>
			</div>
		</div>
	</div>
</template>
