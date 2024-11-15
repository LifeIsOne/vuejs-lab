<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> Object
		const count = ref(0);
		const state = reactive({
			count: count,
		});

		count.value++;
		count.value++;
		count.value++;

		console.log(count.value);
		console.log('state.count: ', state.count);

		// ref -> Array
		const msg = ref('안녕하세요-!');
		const arr = reactive([msg]);
		console.log('arr: ', arr[0].value);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
