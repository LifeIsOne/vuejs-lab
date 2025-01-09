<template>
	<main>
		<ProvideInject></ProvideInject>
	</main>
</template>

<script>
import ProvideInject from '@/components/ProvideInject.vue';
export default {
	components: {
		ProvideInject,
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
