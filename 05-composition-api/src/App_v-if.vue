<template>
	<div>
		<h3>```v-if```와 ````v-else```</h3>
		<h2 v-if="visible">안녕하세요!</h2>
		<h2 v-else>false 입니다</h2>
		<button @click="visible = !visible">토글</button>

		<hr />
		<h3>```v-else-if``` : 여러 조건 연결</h3>
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>

		<h2 v-if="type === 'A'">A입니다.</h2>
		<h2 v-else-if="type === 'B'">B입니다.</h2>
		<h2 v-else-if="type === 'C'">C입니다.</h2>
		<h2 v-else>A, B, C가 아닙니다.</h2>

		<hr />
		<h3>```template v-if=””``` : 여러개의 Html요소 렌더링</h3>
		<template v-if="visible">
			<h1>제목</h1>
			<p>내용 1</p>
			<p>내용 2</p>
		</template>

		<hr />
		<h3>```v-show```</h3>
		<button @click="ok = !ok">OK 토글</button>
		<h1 v-show="ok">제목 입니다.</h1>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const ok = ref(true);

		return {
			visible,
			type,
			ok,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
