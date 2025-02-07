<template>
	<div>
		<p>{{ msg }}</p>
		<p>{{ refMsg }}</p>
		<input type="text" v-model="refMsg" />
		<div>
			<button @click="alertHello">클릭</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const msg = '안녕하세요';
const refMsg = ref('');
const alertHello = () => {
	alert('안녕하세요👋');
};
</script>

<style lang="scss" scoped></style>
