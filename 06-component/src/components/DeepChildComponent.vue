<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMsg : {{ staticMsg }}</p>
			<p>refMsg : {{ refMsg }}</p>
			<p>count : {{ count }}</p>
			<p>Symbol key로 받아온 refMsg : {{ injectedMsg }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';
import { myInjectionKey } from './Keys';

export default {
	setup() {
		// Provide된 데이터 가져오기
		const staticMsg = inject('static-msg', '🫥default message🫥');
		const { refMsg, updateRefMsg } = inject('ref-msg');
		const count = inject('count');

		// Symbo 키 사용하여 데이터를 안전하게 가져오기
		const injectedMsg = inject(myInjectionKey, '🫥default message🫥');

		updateRefMsg('🫶');

		// Injector에서 변경하기 X
		// refMsg.value = refMsg.value + '🤬';

		return { staticMsg, refMsg, count, injectedMsg };
	},
};
</script>

<style lang="scss" scoped></style>
