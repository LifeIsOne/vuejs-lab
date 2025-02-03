<template>
	<div class="container py-5">
		<input ref="input" type="text" />
		<p>{{ input }}</p>

		<h5>`v-if`디렉티브를 이용하여 input.value</h5>
		<p v-if="input">{{ input.value }}</p>

		<!-- `$refs`로 `ref`에 접근 -->
		<h5>`$refs.input.value`</h5>
		<p v-if="input">{{ $refs.input.value }}</p>
		<!-- 동일한 값인지 확인 -->
		<h5>`$refs.input === input`</h5>
		<p v-if="input">{{ $refs.input === input }}</p>
	</div>
	<hr />
	<ul>
		<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
		<li
			v-for="fruit in fruits"
			:key="fruit"
			:ref="el => itemRefs.push(el.textContent)"
		>
			{{ fruit }}
		</li>
	</ul>

	<hr />
	<TemplateRefsChild ref="child"></TemplateRefsChild>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemplateRefsChild from '@/components/TemplateRefsChild.vue';

export default {
	components: {
		TemplateRefsChild,
	},

	setup() {
		const input = ref(null);

		// 마운트되기 이전이기 때문에 `null`인 상태
		console.log('setup: ', input.value);

		onMounted(() => {
			input.value.value = '안녕하세요✋';
			console.log('onMounted: ', input.value);

			// itemRefs.value.forEach(item => console.log('item: ', item.textContent));
			itemRefs.value.forEach(item => console.log('item: ', item));

			// 자식 컴포넌트에서 템플릿 참조
			console.log('child.msg: ', child.value.msg);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '오렌지', '포도']);
		const itemRefs = ref([]);

		const child = ref(null);

		return { input, fruits, itemRefs, child };
	},
};
</script>

<style lang="scss" scoped></style>
