<template>
	<div>
		<p>user: {{ user }}</p>
		<p>title: {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const board = reactive({
			user: 'Matthew',
			data: '2024-11-13',
			title: '제목1',
			content: '내용1',
		});
		s;

		// const { user, title } = toRefs(board);
		const user = toRef(board, 'user');
		const title = toRef(board, 'title');

		return { user, title, board };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
