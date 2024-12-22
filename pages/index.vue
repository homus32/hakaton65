<script setup lang="ts">
definePageMeta({
	title: 'Главная страница'
})
const menuItems = [
	{
		icon: 'pi pi-map',
		text: 'Эко-тропы',
		page: '/eco-tracks'
	},
	{
		icon: 'pi pi-th-large',
		text: 'Все услуги',
		page: '/service'
	}
];
</script>

<template>

	<Holder header="Погода">
		<Weather />
	</Holder>
	<MenuSliderView :items="menuItems"/>

	<Holder header="Трассы" max-height="33rem">
		<TracksView/>
	</Holder>
</template>