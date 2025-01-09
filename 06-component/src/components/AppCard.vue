<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-msg="헤더 메시지"></slot>
		</div>
		<div class="card-body">
			<slot :child-msg hello-world="Hello World !">#BODY</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-msg="푸터 메시지"></slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup(props, { slots }) {
		const childMsg = ref('하위 컴포넌트 메시지');
		const hasFooter = computed(() => !!slots.footer);
		return { childMsg, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
