<template>
	<div>
		<h1>기본형 메세지</h1>
		<p>{{ nomalMsg }}</p>
		<button v-on:click="addNMsg">메세지 추가</button>

		<h1>반응형 메세지</h1>
		<p>{{ reactiveMsg }}</p>
		<button v-on:click="addMsg">메세지 추가</button>
	</div>
</template>

<script>
import { isRef, ref } from 'vue';

export default {
	setup() {
		const nomalMsg = '기본형 메세지';
		const addNMsg = () => {
			nomalMsg.value = nomalMsg.value + '🤔';
		};

		const reactiveMsg = ref('반응형 메세지');
		const addMsg = () => {
			reactiveMsg.value = reactiveMsg.value + '🤔';
		};
		console.log('isRef(nomalMsg) : ' + isRef(nomalMsg));
		console.log('isRef(reactiveMsg) : ' + isRef(reactiveMsg));

		return {
			nomalMsg,
			reactiveMsg,
			addNMsg,
			addMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
