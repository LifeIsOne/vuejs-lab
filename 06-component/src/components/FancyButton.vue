<template>
	<button class="fancy-btn">
		<slot :fancy-msg="fancyMsg">default click</slot>
	</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const fancyMsg = ref('Fancy Message');

		return { fancyMsg };
	},
};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #3a7 25%, #36b);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
