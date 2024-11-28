<template>
	<div></div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		// //# getter 함수
		// watch(
		// 	() => x.value + y.value,
		// 	sum => {
		// 		console.log('x + y = ', sum);
		// 	},
		// );

		// # array 배열
		// watch([x, y], ([newX, newY]) => {
		// 	console.log('newX :', +newX, 'newY :', +newY);
		// });

		//# object
		const obj = reactive({
			count: 0,
		});

		// watch(obj, (newValue, oldValue) => {
		// 	console.log('newValue : ', newValue, 'oldValue : ', oldValue);
		// });

		// // object의 하나의 속성만 감시 - getter함수
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue : ', newValue, 'oldValue : ', oldValue);
		// 	},
		// );

		const user = reactive({
			name: 'Matthew',
			age: 29,
			hobby: 'reading',
			obj: {
				count: 0,
			},
		});

		watch(user, newValue => {
			console.log('newValue: ', newValue);
		});
		return {
			// x,
			// y,
			obj,
		};
	},
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
