<template>
	<div class="contaion py-5"></div>
</template>

<script>
export default {
	created() {
		console.log('created');
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	setup() {
		console.log('setup');
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
