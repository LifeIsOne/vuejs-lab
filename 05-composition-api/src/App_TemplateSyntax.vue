<template>
	<h1>보간법 ```v-once```디렉티브</h1>
	<div>{{ msg }}</div>
	<p v-once>{{ msg }}</p>
	<button @click="msg = msg + '🖐'">Click Me</button>
	<hr />
	<p>{{ h1Text }}</p>
	<p v-html="h1Text"></p>
	<hr />
	<h1>속성 바인딩 ```v-bind```</h1>
	<div v-bind:title="dynamicMsg">마우스를 올려보세요</div>
	<input type="text" value="미라클" v-bind:disabled="isInputDisabled" />
	<input v-bind="password" />
	<hr />
	<h1>JavaScript</h1>
	{{ msg.split('').reverse().join('') }}
	<hr />
	<h1>삼항 연산자</h1>
	isInputDisabled ? {{ isInputDisabled ? '예' : '아니요' }}
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕 :3');
		const h1Text = ref('<h1>HTML 사용하기 ```v-html```디렉티브</h1>');
		const dynamicMsg = ref('반가워요! ^o^/');
		const isInputDisabled = ref(true);

		const password = ref({
			type: 'text',
			value: '1234',
			disabled: false,
		});

		return {
			msg,
			h1Text,
			dynamicMsg,
			isInputDisabled,
			password,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
