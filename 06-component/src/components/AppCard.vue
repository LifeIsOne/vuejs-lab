<template>
	<div class="card">
		<div class="card-header">
			<slot name="header">#HEADER</slot>
		</div>
		<div class="card-body">
			<slot>#BODY</slot>
		</div>
		<div class="card-footer text-muted">
			<slot name="footer">#FOOTER</slot>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
