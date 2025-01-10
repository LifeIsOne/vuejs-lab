<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMsg : {{ staticMsg }}</p>
			<p>refMsg : {{ refMsg }}</p>
			<p>count : {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const staticMsg = inject('static-msg', '🫥default message🫥');
		const refMsg = inject('ref-msg');
		const count = inject('count');

		return { staticMsg, refMsg, count };
	},
};
</script>

<style lang="scss" scoped></style>
