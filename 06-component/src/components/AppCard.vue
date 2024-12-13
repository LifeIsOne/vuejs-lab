<template>
	<!-- BootstrapVueNext -->
	<BBadge class="mb-2">{{ type === 'news' ? 'News' : 'Notice' }}</BBadge>
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
		<a v-if="isLike" href="#" class="btn btn-primary" variant="dark">❤︎</a>
		<a v-else href="#" class="btn btn-outline-primary" variant="dark">♡</a>
	</BCard>

	<!-- Bootstrap -->
	<!-- <div class="card">
		<div class="card-body">❤❤
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
	props: {
		type: {
			type: String,
			default: 'news',
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
	},

	setup() {
		return {};
	},
};
</script>

<style></style>
