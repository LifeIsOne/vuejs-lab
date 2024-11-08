<template>
	<div>
		<p>{{ msg }}</p>
		<button @click="addMsg">클릭하세요!</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		let msg = ref('안녕하세요!');
		const addMsg = () => {
			msg.value = msg.value + '🏃🏻‍➡️';
		};
		console.log('msg', msg.value);
		console.log('msg typeof', typeof msg.value);
		console.log(msg);

		return {
			msg,
			addMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
