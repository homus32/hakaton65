<script setup lang="ts">
import type { Track } from '~/utils/types';

const hills = ref(tracks.data().map(hill => ({
	name: hill.name,
	data: hill.tracks as Track[],
})));

const selectedHill = ref(hills.value[0]);
const selectedDiff = ref<string>();
const selectedStatus = ref<string>();

type DifficultyColors = {
	easy: string;
	difficult: string;
	verydiff: string;
};

// Обработчик клика по радиокнопке сложности
const handleDiffClick = (e: Event, value: string) => {
	e.preventDefault();
	if (selectedDiff.value === value) {
		selectedDiff.value = undefined;
	} else {
		selectedDiff.value = value;
	}
};

// Обработчик клика по радиокнопке статуса
const handleStatusClick = (e: Event, value: string) => {
	e.preventDefault();
	if (selectedStatus.value === value) {
		selectedStatus.value = undefined;
	} else {
		selectedStatus.value = value;
	}
};

const filteredTracks = computed(() => {
	let filtered = selectedHill.value.data;

	// Фильтрация по сложности
	if (selectedDiff.value) {
		const difficultyColors = {
			'easy': TRACK_COLORS.EASY,
			'difficult': TRACK_COLORS.DIFFICULT,
			'verydiff': TRACK_COLORS.VERY_DIFFICULT,
		};
		filtered = filtered.filter(track =>
				track.params.color === difficultyColors[selectedDiff.value as keyof DifficultyColors]
		);
	}

	// Фильтрация по статусу
	if (selectedStatus.value) {
		filtered = filtered.filter(track => {
			if (selectedStatus.value === 'open') {
				return track.status === 'открыта';
			} else {
				return track.status === 'Закрыта' || track.status.includes('Откроется через');
			}
		});
	}

	return filtered;
});
</script>

<template>
	<MapView/>
	<div class="flex justify-center items-center flex-col">
		<Select
				v-model="selectedHill"
				:options="hills"
				optionLabel="name"
				placeholder="Гора..."
				class="w-full"
		/>

		<!-- Фильтры по сложности -->
		<div class="flex flex-wrap justify-center items-center gap-4 my-4">
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="easy"
						name="diff"
						value="easy"
						@click="(e: Event) => handleDiffClick(e, 'easy')"
				/>
				<label for="easy">🟢 Простая</label>
			</div>
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="difficult"
						name="diff"
						value="difficult"
						@click="(e: Event) => handleDiffClick(e, 'difficult')"
				/>
				<label for="difficult">🔴 Сложная</label>
			</div>
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="verydiff"
						name="diff"
						value="verydiff"
						@click="(e: Event) => handleDiffClick(e, 'verydiff')"
				/>
				<label for="verydiff">⚫ Очень сложная</label>
			</div>
		</div>
		<Divider class="!mt-0 !w-11/12"/>
		<!-- Фильтры по статусу -->
		<div class="flex flex-wrap justify-center items-center gap-4 mb-4">
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedStatus"
						inputId="open"
						name="status"
						value="open"
						@click="(e: Event) => handleStatusClick(e, 'open')"
				/>
				<label for="open">✅ Открытые</label>
			</div>
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedStatus"
						inputId="closed"
						name="status"
						value="closed"
						@click="(e: Event) => handleStatusClick(e, 'closed')"
				/>
				<label for="closed">❌ Закрытые</label>
			</div>
		</div>

		<!-- Отображение трасс или сообщения -->
		<template v-if="filteredTracks.length">
			<TracksCard
					v-for="track in filteredTracks"
					:key="track.number"
					:track="track"
			/>
		</template>
		<div v-else class="text-center py-8 text-gray-500">
			Ничего не найдено
		</div>
	</div>
</template>