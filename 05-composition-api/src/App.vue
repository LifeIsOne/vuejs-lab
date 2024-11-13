<template>
	<div>
		<h2>{{ user.name }}</h2>
		<h3>기술 스택이 있습니까?</h3>
		<!-- <p>{{ user.skill.length > 0 ? '넵!' : '아니요.' }}</p> -->
		<p>{{ hasSkill }}</p>
		<p>{{ hasSkill }}</p>
		<p>{{ existSkill() }}</p>
		<p>{{ existSkill() }}</p>
		<button @click="counter++">클릭하기! {{ counter }}</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const user = reactive({
			name: 'matthew',
			skill: ['Java', 'JavaScript', 'Vue3'],
		});

		const hasSkill = computed(() => {
			console.log('computed');
			return user.skill.length > 0 ? '넵!' : '아니요.';
		});

		const existSkill = () => {
			console.log('method');
			return user.skill.length > 0 ? '넵!' : '아니요.';
		};

		const counter = ref(0);

		return {
			user,
			hasSkill,
			existSkill,
			counter,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
