<template>
	<main>
		<div class="container py-5">
			<MyButton @click="helloWorld"></MyButton>
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
		const helloWorld = () => {
			alert('Hello Wolrd!');
		};

		return { helloWorld };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
body {
	background: #2c3338;
}
</style>
