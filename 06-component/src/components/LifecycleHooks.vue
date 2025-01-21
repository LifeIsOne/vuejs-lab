<template>
	<div class="contaion py-5">
		<input ref="inputRef" type="text" value="hello world" />
		<LifecycleChild></LifecycleChild>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, ref } from 'vue';
import LifecycleChild from '@/components/LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');
		const inputRef = ref(null);

		onMounted(() => {
			console.log('onMounted', inputRef.value);
		});
		onBeforeMount(() => {
			console.log('onBeforeMount', inputRef.value);
		});

		return { inputRef };
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
