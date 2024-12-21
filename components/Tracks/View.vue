<script setup lang="ts">
import type { Track } from '~/utils/types';

const hills = ref(tracks.data().map(hill => ({
	name: hill.name,
	data: hill.tracks as Track[],
})));

const selectedHill = ref(hills.value[0]);
const selectedDiff = ref<string>();

type DifficultyColors = {
	easy: string;
	difficult: string;
	verydiff: string;
};

// Обработчик клика по радиокнопке
const handleRadioClick = (e: Event, value: string) => {
	// Предотвращаем стандартное поведение радиокнопки
	e.preventDefault();

	// Если кликнули по уже выбранной кнопке - очищаем выбор
	if (selectedDiff.value === value) {
		selectedDiff.value = undefined;
	} else {
		// Иначе выбираем новое значение
		selectedDiff.value = value;
	}
};

const filteredTracks = computed(() => {
	if (!selectedDiff.value) {
		return selectedHill.value.data;
	}

	const difficultyColors = {
		'easy': TRACK_COLORS.EASY,
		'difficult': TRACK_COLORS.DIFFICULT,
		'verydiff': TRACK_COLORS.VERY_DIFFICULT,
	};

	return selectedHill.value.data.filter(track =>
			track.params.color === difficultyColors[selectedDiff.value as keyof DifficultyColors],
	);
});
</script>

<template>
	<div class="flex justify-center items-center flex-col">
		<Select
				v-model="selectedHill"
				:options="hills"
				optionLabel="name"
				placeholder="Гора..."
				class="w-full"
		/>
		<div class="flex flex-wrap justify-center items-center gap-4 my-4">
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="easy"
						name="diff"
						value="easy"
						@click="(e: Event) => handleRadioClick(e, 'easy')"
				/>
				<label for="easy">🟢 Простая</label>
			</div>
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="difficult"
						name="diff"
						value="difficult"
						@click="(e: Event) => handleRadioClick(e, 'difficult')"
				/>
				<label for="difficult">🔴 Сложная</label>
			</div>
			<div class="flex items-center gap-2">
				<RadioButton
						v-model="selectedDiff"
						inputId="verydiff"
						name="diff"
						value="verydiff"
						@click="(e: Event) => handleRadioClick(e, 'verydiff')"
				/>
				<label for="verydiff">⚫ Очень сложная</label>
			</div>
		</div>

		<TracksCard
				v-for="track in filteredTracks"
				:key="track.number"
				:track="track"
		/>
	</div>
</template>