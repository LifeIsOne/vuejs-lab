<template>
	<div class="bg-dark p-3">
		<!-- <button class="btn btn-secondary" type="button" v-bind="$attrs">MY BUTTON</button> -->
		<button class="btn btn-secondary" type="button" @click="helloWorld">
			MY BUTTON {{ msg }}
		</button>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>
<script setup>
import { ref } from 'vue';

const msg = ref('msg');
</script>

<style lang="scss" scoped></style>
