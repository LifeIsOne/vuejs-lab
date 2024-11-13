<template>
	<div>
		<div
			class="text"
			:class="[isActive ? 'activeClass' : 'class', errClass, classObject]"
		>
			텍스트 입니다.
		</div>
		<button @click="toggle">토글 ( toggle )</button>
		<button @click="hasErr = !hasErr">에러 토글 ( error toggle )</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasErr = ref(false);

		// 동적 바인딩 안됨@@
		// const classObejct = reactive({
		// 	active: true,
		// 	'text-danger': false,
		// });

		const classObject = computed(() => {
			return {
				active: isActive.value,
				'text-danger': hasErr.value,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errClass = ref('err');

		const toggle = () => {
			isActive.value = !isActive.value;
		};

		return {
			isActive,
			toggle,
			hasErr,
			classObject,
			activeClass,
			errClass,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
.active {
	color: #fd5;
	font-weight: bold;
}
.text-danger {
	color: #f00;
}
</style>
