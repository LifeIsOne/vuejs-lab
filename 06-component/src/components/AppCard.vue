<template>
	<!-- BootstrapVueNext -->
	<!-- <BCard
		title="Card Title"
		img-src="https://picsum.photos/id/25/600/300"
		img-alt="Image"
		img-top
		tag="article"
		style="max-width: 20rem"
	>
		<BCardText>
			좋아하는 직업을 정하면 평생 단 하루도 일하지 않는 것과 같다. - 공자
		</BCardText>
		<BButton href="#" variant="dark">더보기</BButton>
	</BCard> -->

	<!-- Bootstrap -->
	<div class="card">
		<div class="card-body">
			<h5 class="card-title red">Card Title</h5>
			<p class="card-text">
				좋아하는 직업을 정하면 평생 단 하루도 일하지 않는 것과 같다. - 공자
			</p>
			<a href="#" class="btn btn-dark">더보기</a>
		</div>
	</div>
</template>

<script>
import { ref, useCssModule } from 'vue';

export default {
	setup() {
		// script에서 style객체 가져오기
		// const style = useCssModule();
		// console.log('style', style);

		// Css
		const color = ref('red');
		color.value = 'green';

		return {
			color,
		};
	},
};
</script>

<!-- scoped 속성 -->
<!-- <style scoped>
.red {
	color: red !important;
}
</style> -->

<!-- module 속성 -->
<!-- <style module>
.red {
	color: red !important;
}
</style> -->

<!-- v-bind() -->
<style>
.red {
	color: v-bind(color) !important;
}
</style>
