<template>
	<div>
		<button
			class="btn btn-primary"
			@click="$emit('createBoard', 1, 2, 3, 'Library')"
		>
			BUTTON
		</button>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
