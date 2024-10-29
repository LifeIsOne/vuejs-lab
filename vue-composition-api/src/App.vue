<template>
	<div>
		<h1>기본형 메세지</h1>
		<p>{{ nomalMsg }}</p>
		<h1>반응형 메세지</h1>
		<p>{{ reactiveMsg }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const nomalMsg = '기본형 메세지';
		const reactiveMsg = ref('반응형 메세지');
		return {
			nomalMsg,
			reactiveMsg,
		};
	},
};
</script>

<style lang="scss" scoped></style>
