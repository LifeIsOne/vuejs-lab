<template>
	<button @click="fontSize++">+</button>
	<button @click="fontSize--">-</button>
	<div :style="styleObject">
		Lorem ipsumdolor sit, amet consectetur adipisicing elit. Labore ea
		voluptates voluptatum repellat dolore ducimus a nihil similique harum cum!
		Accusamus fugit possimus ipsam. Iste fuga libero consequuntur unde cumque!
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: '#c55',
		// 	fontSize: '13px',
		// });

		const fontSize = ref(13);

		const styleObject = computed(() => {
			return {
				color: '#c55',
				fontSize: fontSize.value + 'px',
			};
		});

		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
