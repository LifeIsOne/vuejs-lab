<template>
	<div class="container py-5"></div>
	<input ref="input" type="text" />
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
