<template>
	<div class="card">
		<div class="card-header">
			<slot name="header">#HEADER</slot>
		</div>
		<div class="card-body">
			<slot :child-msg hello-world="Hello World !">#BODY</slot>
		</div>
		<div class="card-footer text-muted">
			<slot name="footer">#FOOTER</slot>
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
