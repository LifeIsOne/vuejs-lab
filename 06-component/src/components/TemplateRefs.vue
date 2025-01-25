<template>
	<div class="container py-5">
		<input ref="input" type="text" />
		<p>{{ input }}</p>

		<h5>`v-if`디렉티브를 이용하여 input.value</h5>
		<p v-if="input">{{ input.value }}</p>

		<!-- `$refs`로 `ref`에 접근 -->
		<h5>`$refs.input.value`</h5>
		<p v-if="input">{{ $refs.input.value }}</p>
		<!-- 동일한 값인지 확인 -->
		<h5>`$refs.input === input`</h5>
		<p v-if="input">{{ $refs.input === input }}</p>
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
	setup() {
		const input = ref(null);

		// 마운트되기 이전이기 때문에 `null`인 상태
		console.log('setup: ', input.value);

		onMounted(() => {
			input.value.value = '안녕하세요✋';
			console.log('onMounted: ', input.value);
		});

		return { input };
	},
};
</script>

<style lang="scss" scoped></style>
