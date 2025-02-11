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
			type="new"
			title="제목1"
			contents="내용1"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.msg }}</template>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';

const msg = '안녕하세요';
const refMsg = ref('');
const alertHello = () => {
	alert('안녕하세요👋');
};
const child = ref(null);
</script>

<style lang="scss" scoped></style>
