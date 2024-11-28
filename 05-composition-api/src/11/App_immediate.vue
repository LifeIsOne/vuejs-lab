<template>
	<div>
		<p>{{ msg }}</p>
		<p>{{ reverseMsg }}</p>
	</div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요');
		const reverseMsg = ref('');

		// immediate 옵션 사용
		watch(
			msg,
			newValue => {
				reverseMsg.value = newValue.split('').reverse().join('');
			},
			{ immediate: true },
		);

		// // 함수를 외부에 선언하여 즉시실행
		// const meg = ref('안녕하세요!');
		// const reverseMeg = ref('');

		// const reverseFunction = () => {
		// 	reverseMsg.value = msg.value.split('').reverse().jogin('');
		// };

		// watch(msg, reverseFunction);
		// reverseFunction();

		return {
			msg,
			reverseMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
