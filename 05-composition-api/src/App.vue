<template>
	<div>
		<h2 v-if="visible">안녕하세요!</h2>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(true);

		return {
			visible,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
