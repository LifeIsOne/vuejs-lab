<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const count = ref(0);
		const state = reactive({
			count: count,
		});

		console.log(count.value);
		console.log('state.count: ', state.count.value);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
