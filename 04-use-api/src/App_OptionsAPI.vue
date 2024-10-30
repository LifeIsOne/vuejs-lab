<template>
	<div>
		<button v-on:click="increment">카운터: {{ counter }}</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		increment() {
			this.counter++;
		},
	},
	mounted() {
		console.log('컴포넌트가 마운트 됐습니다.');
	},
};
</script>

<style lang="scss" scoped></style>
