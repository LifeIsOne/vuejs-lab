<template>
	<div>
		<p>포커스 되는 지 확인!@</p>
		<input type="text" v-focus />
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
	directives: {
		focus: {
			mounted(el) {
				el.focus();
			},
		},
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
