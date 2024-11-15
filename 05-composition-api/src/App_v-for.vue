<template>
	<div>
		<ul>
			<!-- v-for와 v-if 동시에 사용하기 -->
			<!-- 1. template만들어 html요소 넣기 -->
			<!-- <template v-for="(item, index) in items" :key="item.id"> -->
			<!-- <li v-if="item.id % 2 === 0"> -->
			<!-- 2. computed만들어 짝수만 return하여 사용하기 -->
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>ID : {{ item.id }}, 인덱스 : {{ index }} , {{ item.msg }}</li>
			</template>
		</ul>
		<hr />
		<ul>
			<li v-for="(value, key, index) in myObject" :key="key">
				인덱스 : {{ index }} <br />
				키 : {{ key }} <br />
				값 : {{ value }} <br />
			</li>
		</ul>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, msg: 'Java' },
			{ id: 2, msg: 'Html' },
			{ id: 3, msg: 'Css' },
			{ id: 4, msg: 'JavaScript' },
		]);

		const myObject = reactive({
			title: '제목',
			author: 'Matthew',
			publishedAt: '2024-11-15',
		});

		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		return {
			items,
			evenItems,
			myObject,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
