<template>
	<div class="container py-5">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button v-on:click="count++">Click</button>
				<ChildComponent></ChildComponent>
			</div>
		</div>
	</div>
</template>

<script>
import ChildComponent from '@/components/ChildComponent.vue';
import { provide, readonly, ref } from 'vue';
import { myInjectionKey } from './Keys';

export default {
	components: {
		ChildComponent,
	},
	setup() {
		const staticMsg = 'static message';
		const refMsg = ref('reference message');
		const count = ref(10);
		// 1. 데이터를 변경하는 함수 만들기
		const updateRefMsg = appendRefMsg => {
			refMsg.value = refMsg.value + appendRefMsg;
		};

		// provide('static-msg', staticMsg);
		// 2. 데이터를 변경하는 함수 제공하기
		provide('ref-msg', { refMsg: readonly(refMsg), updateRefMsg });
		provide('count', count);

		// Symbol 키를 사용하여 데이터 제공
		provide(myInjectionKey, refMsg);

		return { count };
	},
};
</script>

<style lang="scss" scoped></style>
