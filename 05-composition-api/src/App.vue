<template>
	<div>
		<h1>input태그 text타입</h1>
		<!-- v-model 없이 양방향 바인딩 -->
		<!-- <input type="text" :value="inputValue" @input="event => (inputValue = event.target.value)" /> -->
		<!-- v-model 디렉티브 -->
		<!-- <input type="text" v-model="inputValue" /> -->
		<input type="text" :value="inputValue" />
		<p>{{ inputValue }}</p>
		<hr />

		<h1>textarea 태그</h1>
		<!-- <textarea v-model="textareaValue"></textarea> -->
		<textarea v-model="textareaValue"></textarea>
		<p>{{ textareaValue }}</p>
		<hr />

		<h1>input태그 checkbox타입</h1>
		<label for="checkbox">{{ checkboxValue }}</label>
		<input type="checkbox" v-model="checkboxValue" />
		<!-- <input type="checkbox" :checked="checkboxValue" @change="event => (checkboxValue = event.target.checked)"/> -->
		<hr />

		<h1>input태그 radio타입</h1>
		<label>
			<!-- <input
				type="radio"
				value="Red"
				:checked="raidoValue === 'Red'"
				@change="e => (raidoValue = e.target.value)"
			/> -->
			<input type="radio" value="Red" v-model="raidoValue" />
			빨간색
			<!-- <input
				type="radio"
				value="Green"
				:checked="raidoValue === 'Green'"
				@change="e => (raidoValue = e.target.value)"
			/> -->
			<input type="radio" value="Green" v-model="raidoValue" />
			초록색
			<!-- <input
				type="radio"
				value="Blue"
				:checked="raidoValue === 'Blue'"
				@change="e => (raidoValue = e.target.value)"
			/> -->
			<input type="radio" value="Blue" v-model="raidoValue" />
			파란색
		</label>
		<p>{{ raidoValue }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const raidoValue = ref('Red');

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			raidoValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
