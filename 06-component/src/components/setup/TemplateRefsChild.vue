<template>
	<div>
		{{ $parent }}
		<ul>
			<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const msg = ref('안녕하세요 :]'); // 반응형 데이터 선언
const sayHello = () => {
	alert(msg.value);
};
</script>

<style lang="scss" scoped></style>
