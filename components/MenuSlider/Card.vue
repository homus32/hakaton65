<script setup lang="ts">
defineProps<{
	icon: string,
	text: string,
	page: string
}>();
</script>

<template>
	<!--suppress HtmlUnknownTarget -->
	<NuxtLink :to="page" class="card-link">
		<div
				class="bg-white p-2 rounded-lg flex flex-col shadow-md hover:shadow-lg transition-shadow  cursor-pointer w-32 h-[4.6rem]">
			<span :class="`text-[#0066B3] ml-1 text-lg ${icon}`"></span>
			<p class="mt-1 text-sm text-[#0066B3] font-medium text-wrap">{{ text }}</p>
		</div>
	</NuxtLink>
</template>



<style scoped>
.card-link {
	text-decoration: none;
}
</style>