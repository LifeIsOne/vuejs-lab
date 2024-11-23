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
		<input
			type="checkbox"
			v-model="checkboxValue"
			true-value="😀"
			false-value="🤔"
		/>
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
		<hr />

		<h1>select태그</h1>
		<select :value="selectValue" @change="e => (selectValue = e.target.value)">
			<!-- <select v-model="selectValue"> -->
			<option value="kenneth">kenneth</option>
			<option value="minsu">minsu</option>
			<option value="kim">kim</option>
		</select>
		<p>{{ selectValue }}</p>
		<hr />

		<h1>여러개의 checkbox</h1>
		<label>
			<input type="checkbox" value="denny" v-model="checkboxValues" />
			Denny
			<input type="checkbox" value="yongju" v-model="checkboxValues" />
			Yongju
			<input type="checkbox" value="lee" v-model="checkboxValues" />
			Lee
		</label>
		<p>선택 됨 {{ checkboxValues }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('🤔');
		const raidoValue = ref('Red');
		const selectValue = ref('kenneth');
		const checkboxValues = ref([]);

		return {
			inputValue,
			textareaValue,
			checkboxValue,
			raidoValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
