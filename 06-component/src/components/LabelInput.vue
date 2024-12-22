<template>
	<label>
		{{ label }}
		<!-- <input v-model="username" type="text" /> -->
		<!-- :value="modelValue"
    @input="event => $emit('update:modelValue', event.target.value)" -->
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],

	setup(props, context) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(newValue) {
				context.emit('update:modelValue', newValue);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
