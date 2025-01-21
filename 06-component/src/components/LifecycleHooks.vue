<template>
	<div class="contaion py-5">
		<input ref="inputRef" type="text" value="hello world" />
		<!-- <LifecycleChild></LifecycleChild> -->
		<p id="msg">{{ msg }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		// # Mount Hooks
		// console.log('setup');
		const inputRef = ref(null);

		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value);
		// });
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });

		// # Update Hooks
		const msg = ref('');

		onBeforeUpdate(() => {
			console.log('onBeforeUpdate : ', msg.value);
			console.log(
				'`DOM` Content :',
				document.querySelector('#msg').textContent,
			);
		});

		onUpdated(() => {
			console.log('onUpdated : ', msg.value);
			console.log(
				'`DOM` Content :',
				document.querySelector('#msg').textContent,
			);
		});
		return { inputRef, msg };
	},
	// beforeCreate() {
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
