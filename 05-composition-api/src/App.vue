<template>
	<div>
		<div class="text" :class="{ active: isActive }">텍스트 입니다.</div>
		<button @click="toggle">토글 ( toggle )</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
.active {
	color: #fd5;
	font-weight: bold;
}
</style>
