<template>
	<div class="card">
		<div class="card-header">Child Component</div>
		<div class="card-body">
			<p>appMessage : {{ appMessage }}</p>
			<DeepChildComponent></DeepChildComponent>
		</div>
	</div>
</template>

<script>
import DeepChildComponent from '@/components/DeepChildComponent.vue';
import { inject } from 'vue';

export default {
	components: {
		DeepChildComponent,
	},

	setup() {
		const appMessage = inject('app-message');

		return { DeepChildComponent, appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
