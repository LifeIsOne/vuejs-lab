<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	props: ['title', 'label'],
	emits: ['update:title'],

	setup(props, context) {
		const value = computed({
			get() {
				return props.title;
			},
			set(newValue) {
				context.emit('update:title', newValue);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
