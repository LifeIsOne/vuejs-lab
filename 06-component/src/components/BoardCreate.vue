<template>
	<div class="row">
		<div class="col col-2">
			<select class="form-select" aria-label="Default select example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class="col col-8">
			<BFormInput v-model="name" placeholder="Enter your name" />
		</div>
		<div class="col col-2">
			<button class="btn btn-success" @click="createBoard">BUTTON</button>
		</div>
		<!-- 하위 컴포넌트에서 상위 컴포넌트 이벤트 발생시키기 -->
		<!-- 인스턴스 내장된 $emit()메서드 사용 -->
		<!-- <button
			class="btn btn-primary"
			@click="$emit('createBoard', 1, 2, 3, 'Library')"
		>
			BUTTON
		</button> -->

		<!-- CompositionAPI의 setup()의 두 번째 파라미터 context의 emit()속성 이용하기 -->
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits: ['createBoard'],
	emits: {
		// 유효성 검사 X
		// createBoard: null,

		// 유효성 검사 입력된 값이 있으면/없으면 = true/false
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
