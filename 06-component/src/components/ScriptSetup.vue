<template>
	<div class="container py-5">
		<!-- 변수 -->
		<p>{{ msg }}</p>
		<!-- 반응형 상태 양방향 바인딩 -->
		<p>{{ refMsg }}</p>
		<input type="text" v-model="refMsg" />
		<!-- 함수 -->
		<div>
			<button @click="alertHello">클릭</button>
		</div>
		<!-- 컴포넌트 -->
		<PostItem
			type="news"
			title="제목1"
			contents="내용1"
			:is-like="true"
		></PostItem>

		<PostItem
			type="news"
			title="제목2"
			contents="내용2"
			:is-like="true"
		></PostItem>

		<PostItem
			type="news"
			title="제목3"
			contents="내용3"
			:is-like="true"
		></PostItem>
		<hr />
		<!-- 자식 컴포넌트 참조 -->
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.msg }}</template>

		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from './setup/MyButton.vue';
import axios from 'axios';

const msg = '안녕하세요';
const refMsg = ref('');
const alertHello = () => {
	alert('안녕하세요👋');
};
const child = ref(null);

defineExpose({
	msg,
});
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response: ', response);

// async function callApi() {
// 	const response = await axios(
// 		'https://dummy.restapiexample.com/api/v1/employees',
// 	);
// }
callApi();
</script>

<style lang="scss" scoped></style>
