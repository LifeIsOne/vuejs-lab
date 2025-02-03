<template>
	<div>
		{{ $parent }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const msg = ref('안녕하세요 :]'); // 반응형 데이터 선언
		const sayHello = () => {
			alert(msg.value);
		};

		return {
			msg,
			sayHello,
		};
	},
};
</script>

<style lang="scss" scoped></style>
