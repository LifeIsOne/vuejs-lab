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

			<AppCard>
				<!-- <template v-slot:header>title1</template>
				<template v-slot>content2</template>
				<template v-slot:footer>footer1</template> -->

				<!-- `v-slot` 단축표현 -->
				<!-- <template #header>title1</template> -->
				<!-- <template #default>content1</template> -->
				<!-- <template #footer>footer1</template> -->

				<!-- default slot 암시적 처리 -->
				<!-- 암시적으로 default slot 처리 -->

				<!-- `v-slot`전달인자 동적으로 변경하기 -->
				<!-- <template #[slotArgs]>동적 title</template> -->

				<template #header="{ headerMsg }">
					{{ headerMsg }}
				</template>

				<template #default="{ childMsg }">
					Default {{ parentMsg }} {{ childMsg }}
				</template>

				<template #footer="{ footerMsg }">
					{{ footerMsg }}
				</template>
			</AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

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
		const slotArgs = ref('header');
		const parentMsg = ref('상위 컴포넌트 메시지');

		return { helloWorld, slotArgs, parentMsg };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
body {
	background: #2c3338;
}
</style>
