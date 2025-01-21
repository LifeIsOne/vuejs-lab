<template>
	<div class="contaion py-5">
		<input ref="inputRef" type="text" value="hello world" />
		<hr />
		<button @click="visible = !visible">Toggle Child</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
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
		const inputRef = ref(null);
		const msg = ref('');
		const visible = ref(false);

		// # Mount Hook
		// console.log('setup');

		// onMounted(() => {
		// 	console.log('onMounted', inputRef.value);
		// });
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount', inputRef.value);
		// });

		// # Update Hook
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate : ', msg.value);
		// 	console.log(
		// 		'`DOM` Content :',
		// 		document.querySelector('#msg').textContent,
		// 	);
		// });

		// onUpdated(() => {
		// 	console.log('onUpdated : ', msg.value);
		// 	console.log(
		// 		'`DOM` Content :',
		// 		document.querySelector('#msg').textContent,
		// 	);
		// });
		return { inputRef, msg, visible };
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
