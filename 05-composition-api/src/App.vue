<template>
	<div>
		<ul>
			<template v-for="(item, index) in items" :key="item.id">
				<li v-if="item.id % 2 === 0">
					ID : {{ item.id }}, 인덱스 : {{ index }} , {{ item.msg }}
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, msg: 'Java' },
			{ id: 2, msg: 'Html' },
			{ id: 3, msg: 'Css' },
			{ id: 4, msg: 'JavaScript' },
		]);

		return {
			items,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
</style>
