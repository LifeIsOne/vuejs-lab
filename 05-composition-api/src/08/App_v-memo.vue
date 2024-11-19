<template>
	<div>
		<!-- memo에 아무것도 안넣기 -->
		<h1>v-memo="[]"</h1>
		<div v-memo="[]">
			<p>subscribers : {{ subscribers }}</p>
			<p>views : {{ views }}</p>
			<p>likes : {{ likes }}</p>
		</div>
		<button @click="subscribers++">sub++</button>
		<button @click="views++">views++</button>
		<button @click="likes++">likes++</button>
		<!-- v-memo에 반응형 데이터 넣기 -->
		<h1>v-memo="[subscribers]"</h1>
		<div v-memo="[subscribers]">
			<p>subscribers : {{ subscribers }}</p>
			<p>views : {{ views }}</p>
			<p>likes : {{ likes }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const subscribers = ref(100);
		const views = ref(1000);
		const likes = ref(10);

		return {
			subscribers,
			views,
			likes,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
