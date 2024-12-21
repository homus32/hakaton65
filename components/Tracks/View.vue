<script setup lang="ts">
import tracks from '~/utils/tracks';
import type { Track } from '~/utils/types';

const hills = ref(tracks.data().map(hill => ({
	name: hill.name,
	data: hill.tracks as Track[],
})));

const selectedHill = ref(hills.value[0]);
</script>

<template>
	<div class="card flex justify-center">
		<Select
				v-model="selectedHill"
				:options="hills"
				optionLabel="name"
				placeholder="Гора..."
				class="w-full"
		/>
	</div>

	<TracksCard
			v-for="track in selectedHill.data"
			:key="track.number"
			:track="track"
	/>
</template>