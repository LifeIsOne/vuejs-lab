<template>
	<div>
		<button @click="printEventInfo('안녕하세요', $event)">
			inline event handler
		</button>
		<hr />
		<input type="text" @keyup="onKeyupHandler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (msg, event) => {
			console.log('msg', msg);
			console.log('event.target', event.target);
			console.log('event.target.tagName', event.target.tagName);
		};
		const onKeyupHandler = () => {
			console.log('event.key', event.key);
		};

		return {
			printEventInfo,
			onKeyupHandler,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
