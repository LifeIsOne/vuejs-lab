<template>
	<div>
		<!-- 하위 컴포넌트에서 상위 컴포넌트 이벤트 발생시키기 -->
		<!-- 인스턴스 내장된 $emit()메서드 사용 -->
		<!-- <button
			class="btn btn-primary"
			@click="$emit('createBoard', 1, 2, 3, 'Library')"
		>
			BUTTON
		</button> -->

		<!-- CompositionAPI의 setup()의 두 번째 파라미터 context의 emit()속성 이용하기 -->
		<BFormInput v-model="name" placeholder="Enter your name" />
		<button class="btn btn-success" @click="createBoard">BUTTON</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createBoard'],
	emits: {
		createBoard: enterdName => {
			console.log('validator : ', enterdName);
			if (!enterdName) {
				return false;
			}
			return true;
		},
	},

	setup(props, { emit }) {
		const createBoard = () => {
			emit('createBoard', name.value);
		};
		const name = ref(''); // 반응형 데이터 선언

		return { createBoard, name };
	},
};
</script>

<style lang="scss" scoped></style>
