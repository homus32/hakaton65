<script setup lang="ts">
const weather = {};

const temperature = 23
</script>

<template>
	<div class="bg-gradient-to-b from-sky-300 to-sky-500 rounded-lg p-4 text-white">
		<div class="text-4xl font-bold text-center">
			{{ temperature }}°C
		</div>
	</div>
</template>