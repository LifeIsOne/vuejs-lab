<template>
	<main>
		<div class="container py-5">
			<!-- <MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton> -->
			<MyButton class="my-button" id="my-button" @click="helloWorld"></MyButton>
			<LabelInput label="Name" non-id="정의되지 않은 id"></LabelInput>

			<hr style="color: #fff" />
			<FancyButton
				>Click!!
				<h1>클릭</h1>
				<span style="color: #34f">하시오</span></FancyButton
			>
			<FancyButton></FancyButton>

			<hr style="color: #fff" />

			<AppCard></AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
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
