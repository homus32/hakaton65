<script setup lang="ts">
import type { Track } from '~/utils/types';

defineProps<{
	track: Track
}>();

const getTrackLabels = (track: Track): Label[] => {
	const labels: Label[] = [];

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
	<div class="w-full p-4 my-2 bg-gray-50 rounded-md shadow-md">
		<div class="flex items-center mb-4">
			<div class="flex items-center gap-3">
				<div class="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium bg-black">
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
