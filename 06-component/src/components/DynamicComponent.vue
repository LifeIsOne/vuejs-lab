<template>
	<div class="container py-4">
		<button
			class="btn btn-danger me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			Apple
		</button>
		<button class="btn btn-warning" @click="changeCurrentComp(DynamicBanana)">
			Banana
		</button>
		<hr />
		<component :is="currentComp"></component>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

const currentComp = ref(DynamicApple);
const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped></style>
