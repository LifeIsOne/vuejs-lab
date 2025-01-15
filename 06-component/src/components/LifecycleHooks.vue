<template>
	<div class="contaion py-5"></div>
</template>

<script>
import { onBeforeMount, onMounted } from 'vue';

export default {
	setup() {
		console.log('setup');

		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeMount(() => {
			console.log('onBeforeMount');
		});

		return {};
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
