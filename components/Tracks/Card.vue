<script setup lang="ts">
import type { Track } from '~/utils/types';

defineProps<{
	track: Track
}>();
</script>

<template>
	<div class="w-full p-4 my-2 bg-gray-50 rounded-md shadow-md">
		<div class="flex items-center justify-between mb-2">
			<div class="flex items-center gap-2">
				<span class="font-bold text-lg">№{{ track.number }}</span>
				<h1 class="text-lg">{{ track.name }}</h1>
			</div>
			<span
					class="px-3 py-1 rounded-full text-sm"
					:class="track.status.toLowerCase() === 'открыта' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
			>
        {{ track.status }}
      </span>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
			<div v-if="track.params.length" class="flex items-center gap-1">
				<span class="font-medium">Длина:</span>
				<span>{{ track.params.length }}</span>
			</div>

			<div v-if="track.params.height" class="flex items-center gap-1">
				<span class="font-medium">Перепад высот:</span>
				<span>{{ track.params.height }}</span>
			</div>

			<div v-if="track.params.time" class="flex items-center gap-1">
				<span class="font-medium">Время работы:</span>
				<span>{{ track.params.time }}</span>
			</div>

			<div v-if="track.params.lighting" class="flex items-center gap-1">
				<span class="font-medium">Освещение:</span>
				<span>{{ track.params.lighting }}</span>
			</div>

			<div v-if="track.params.snow" class="flex items-center gap-1">
				<span class="font-medium">Оснежение:</span>
				<span>{{ track.params.snow }}</span>
			</div>
		</div>
	</div>
</template>