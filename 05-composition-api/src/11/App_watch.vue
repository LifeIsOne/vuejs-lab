<template>
	<div></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
	setup() {
		const msg = ref('');
		watch(msg, (newValue, oldValue) => {
			console.log('newValue', newValue);
			console.log('oldValue', oldValue);
		});

		return {
			msg,
		};
	},
};
</script>

<style lang="scss" scoped></style>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
