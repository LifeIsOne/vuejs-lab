<template>
	<label class="form-class text-secondary" id="child-id">
		{{ label }}
	</label>
	<input v-model="value" v-bind="$attrs" type="text" class="form-control" />
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
