<template>
	<div>
		<form @submit.prevent="">
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장하기</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		const save = (title, contents) => {
			console.log(`저장됐습니다. title : ${title}, contents : ${contents}`);
		};

		watchEffect(() => {
			// console.log('title : ' + title.value);
			// console.log('contents : ' + contents.value);
			save(title.value, contents.value);
		});

		return {
			title,
			contents,
			save,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
