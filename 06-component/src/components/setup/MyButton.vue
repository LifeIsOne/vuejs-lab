<template>
	<div class="bg-dark p-3">
		<!-- <button class="btn btn-secondary" type="button" v-bind="$attrs">MY BUTTON</button> -->
		<button class="btn btn-secondary" type="button" @click="helloWorld">
			MY BUTTON
		</button>
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	emits: ['click'],

	setup(props, context) {
		// console.log('context.attrs: ', context.attrs);
		// console.log('class	: ', context.attrs.class);
		// console.log('id		: ', context.attrs.id);
		// console.log('onClick	: ', context.attrs.onClick);

		// context.attrs.onClick();
		const helloWorld = () => {
			context.emit('click');
		};
		return { helloWorld };
	},
};
</script>

<style lang="scss" scoped></style>
