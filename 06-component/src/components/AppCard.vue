<template>
	<!-- BootstrapVueNext -->
	<BCard
		:title="title"
		img-src="https://picsum.photos/id/25/600/300"
		img-alt="Image"
		img-top
		tag="article"
		style="max-width: 20rem"
	>
		<BCardText>
			{{ contents }}
		</BCardText>
		<BButton href="#" variant="dark">더보기</BButton>
	</BCard>

	<!-- Bootstrap -->
	<!-- <div class="card">
		<div class="card-body">
			<h5 class="card-title red">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn btn-dark">더보기</a>
		</div>
	</div> -->
</template>

<script>
export default {
	props: ['title', 'contents'],

	setup() {
		return {};
	},
};
</script>

<style></style>
