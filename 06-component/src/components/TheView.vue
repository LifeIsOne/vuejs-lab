<template>
	<main>
		<div class="container py-5">
			<!-- <MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton> -->
			<MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton>
			<LabelInput label="Name" non-id="정의되지 않은 id"></LabelInput>

			<hr />
			<FancyButton>click!!</FancyButton>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
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
