<template>
	<label>
		username
		<!-- <input v-model="username" type="text" /> -->
		<input
			:value="modelValue"
			@input="event => ($emit('update:modelValue'), event.target.value)"
			type="text"
		/>
	</label>
</template>

<script>
export default {
	props: ['modelValue'],
	emits: ['update:modelValue'],

	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
