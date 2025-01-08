<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-msg="헤더 메시지"></slot>
		</div>
		<div class="card-body">
			<slot :child-msg hello-world="Hello World !">#BODY</slot>
		</div>
		<div v-if="$slots.footer" class="card-footer text-muted">
			<slot name="footer" footer-msg="푸터 메시지"></slot>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const childMsg = ref('하위 컴포넌트 메시지');

		return { childMsg };
	},
};
</script>

<style lang="scss" scoped></style>
