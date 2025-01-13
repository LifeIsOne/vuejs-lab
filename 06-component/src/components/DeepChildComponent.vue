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
		const { refMsg, updateRefMsg } = inject('ref-msg');
		const count = inject('count');
		// Injector에서 변경하기 X
		// refMsg.value = refMsg.value + '!';
		updateRefMsg('!');

		return { staticMsg, refMsg, count };
	},
};
</script>

<style lang="scss" scoped></style>
