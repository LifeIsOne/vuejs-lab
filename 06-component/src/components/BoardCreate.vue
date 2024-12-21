<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select bg-dark text-light"
				aria-label="Default select example"
			>
				<option value="news">News</option>
				<option value="notice">Notice</option>
			</select>
		</div>
		<div class="col col-8">
			<BFormInput
				class="form-control bg-dark text-light"
				v-model="title"
				placeholder="Enter your title"
			/>
		</div>
		<div class="col col d-grid">
			<button class="btn btn-success" @click="createBoard">추가하기</button>
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
		createBoard: newBoard => {
			if (!newBoard.type) {
				return false;
			} else if (!newBoard.title) {
				return false;
			}
			return true;
		},
	},

	setup(props, { emit }) {
		const createBoard = () => {
			const newBoard = {
				type: type.value,
				title: title.value,
			};
			emit('createBoard', title.value);
		};
		const title = ref(''); // 반응형 데이터 선언
		const type = ref('news');

		return { createBoard, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
<style>
.bg-dark::placeholder {
	color: #fff8;
}
</style>
