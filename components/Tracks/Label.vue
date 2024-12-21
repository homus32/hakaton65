<script setup lang="ts">
defineProps<{
	icon: string;
	text: string;
}>();
</script>

<template>
	<div class="flex items-center gap-1 text-gray-600">
		<i :class="['pi', `pi-${icon}`, 'text-']" />
		<span class="text-sm">{{ text }}</span>
	</div>
</template>