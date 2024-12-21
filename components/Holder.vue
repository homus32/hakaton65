<script setup lang="ts">
defineProps<{
	header: string
}>()

</script>

<template>
	<div class="rounded-lg bg-white p-3 shadow-lg mb-3">
		<h1 class="text-xl font-bold mb-3">{{ header }}</h1>
		<slot></slot>
	</div>
</template>