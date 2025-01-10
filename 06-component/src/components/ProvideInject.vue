<template>
	<div class="container py-5">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button v-on:click="count++">Click</button>
				<ChildComponent></ChildComponent>
			</div>
		</div>
	</div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';
import { provide, ref } from 'vue';

export default {
	components: {
		ChildComponent,
	},
	setup() {
		const staticMsg = 'static message';
		const refMsg = ref('reference message');
		const count = ref(10);

		// provide('static-msg', staticMsg);
		provide('ref-msg', refMsg);
		provide('count', count);

		return { count };
	},
};
</script>

<style lang="scss" scoped></style>
