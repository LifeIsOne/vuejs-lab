<template>
	<button class="fancy-btn">
		<slot></slot>
	</button>
</template>

<script>
export default {};
</script>

<style scoped>
.fancy-btn {
	color: #fff;
	background: linear-gradient(315deg, #3a7 25%, #36b);
	border: none;
	padding: 5px 12px;
	margin: 5px;
	border-radius: 8px;
	cursor: pointer;
}
</style>
