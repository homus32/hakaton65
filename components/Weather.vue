<script setup lang="ts">
const weatherData = weather.data();
</script>
<template>
	<div class="bg-gradient-to-r from-blue-600 to-violet-400 rounded-2xl p-4 text-white">
		<!-- Заголовок и текущая погода -->
		<div class="space-y-1">
			<h2 class="text-xl font-bold">{{ weatherData.condition }}</h2>
			<p class="text-base">Сейчас</p>
		</div>

		<!-- Температура и иконка -->
		<div class="flex items-center justify-between mt-2">
			<span class="text-6xl font-bold">{{ weatherData.temperature }}</span>
			<!-- Иконка погоды -->
			<img :src="weatherData.icon_url" class="w-16 h-16" alt="Погодные условия" />
		</div>

		<!-- Информация о ветре -->
		<div class="mt-2">
			<p class="text-base">{{ weatherData.wind }}</p>
		</div>

		<!-- Сетка с дополнительной информацией -->
		<div class="flex justify-between mt-4 text-sm">
			<div>
				<p>Восход</p>
				<p class="font-medium">{{ weatherData.sunrise }}</p>
			</div>
			<div>
				<p>Заход</p>
				<p class="font-medium">{{ weatherData.sunset }}</p>
			</div>
			<div>
				<p>Влажность</p>
				<p class="font-medium">{{ weatherData.humidity }}</p>
			</div>
			<div>
				<p>Давление</p>
				<p class="font-medium">{{ weatherData.pressure }}</p>
			</div>
		</div>
	</div>
</template>