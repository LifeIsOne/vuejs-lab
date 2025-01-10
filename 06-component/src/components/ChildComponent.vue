<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<DeepChildComponent></DeepChildComponent>
		</div>
	</div>
</template>

<script>
import DeepChildComponent from '@/components/DeepChildComponent.vue';

export default {
	components: {
		DeepChildComponent,
	},

	setup() {
		return { DeepChildComponent };
	},
};
</script>

<style lang="scss" scoped></style>
