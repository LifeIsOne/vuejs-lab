<template>
	<div>
		<p>{{ msg.value }}</p>
		<button @click="addMsg">클릭하세요!</button>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		let msg = reactive({
			value: '안녕하세요!',
		});
		const addMsg = () => {
			msg.value = msg.value + '🏃🏻‍➡️';
		};
		console.log('msg', msg.value);
		console.log('msg typeof', typeof msg.value);

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
