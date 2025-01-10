<template>
	<div class="container py-5">
		<ChildComponent></ChildComponent>
	</div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';

export default {
	components: {
		ChildComponent,
	},
	setup() {
		return { ChildComponent };
	},
};
</script>

<style lang="scss" scoped></style>
