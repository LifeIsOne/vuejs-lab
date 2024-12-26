<template>
	<main>
		<div class="container py-5">
			<MyButton></MyButton>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
export default {
	components: {
		MyButton,
	},

	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
body {
	background: #2c3338;
}
</style>
