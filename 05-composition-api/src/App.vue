<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const msg = ref('');
		watch(msg, (newValue, oldValue) => {
			// DOM -

			// API -

			// 사ㅇ태 변경
			console.log('newValue', newValue);
			console.log('oldValue', oldValue);
		});

		// const x = ref(0);
		// const y = ref(0);

		// watch(x, () => {
		// 	console.log('x 는 ${newX}');
		// });

		// // getter 함수
		// watch(
		// 	() => x.value + y.value,
		// 	sum => {
		// 		console.log('x + y = ${sum}');
		// 	},
		// );

		// // array 배열
		// watch([x, () => y.value], ([newX, newY]) => {
		// 	console.log(`x is ${newX} and y is ${newY}`);
		// });

		return {
			msg,
		};
	},
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
