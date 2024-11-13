<template>
	<div :style="styleObject">
		Lorem ipsumdolor sit, amet consectetur adipisicing elit. Labore ea
		voluptates voluptatum repellat dolore ducimus a nihil similique harum cum!
		Accusamus fugit possimus ipsam. Iste fuga libero consequuntur unde cumque!
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const styleObject = reactive({
			color: '#c55',
			fontSize: '13px',
		});

		return { styleObject };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
