<template>
	<div>
		<button v-on:click="increment">카운터: {{ counter }}</button>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const counter = ref(0);

		const increment = () => counter.value++;

		onMounted(() => {
			console.log('컴포넌트가 마운트 됨!');
		});
		return {
			counter,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
