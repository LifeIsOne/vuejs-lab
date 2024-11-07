<template>
	<div>
		<button @click="increment">count : {{ state.count }}</button>
		<button @click="increment">deep count : {{ state.deep.count }}</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const state = reactive({
			count: 0,
			deep: {
				count: 0,
			},
		});
		const increment = () => {
			state.count++;
			state.deep.count++;
		};

		return {
			state,
			increment,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
