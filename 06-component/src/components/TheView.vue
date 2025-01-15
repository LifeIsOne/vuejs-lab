<template>
	<main>
		<LifecycleHooks></LifecycleHooks>
	</main>
</template>

<script>
import LifecycleHooks from '@/components/LifecycleHooks.vue';

export default {
	components: {
		LifecycleHooks,
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
