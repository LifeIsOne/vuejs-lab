<template>
	<label
		class="child-class text-secondary"
		style="border: 1px solid #fff"
		id="child-id"
	>
		{{ label }}
	</label>
	<input v-model="value" type="text" />
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
