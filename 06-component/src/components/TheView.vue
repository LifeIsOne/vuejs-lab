<template>
	<main>
		<div class="container py-5">
			<!-- <MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton> -->
			<MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton>
			<LabelInput label="Name" non-id="정의되지 않은 id"></LabelInput>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';

export default {
	components: {
		MyButton,
		LabelInput,
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
