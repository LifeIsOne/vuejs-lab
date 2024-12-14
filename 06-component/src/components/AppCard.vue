<template>
	<!-- BootstrapVueNext -->
	<BBadge class="mb-2">{{ typeName }}</BBadge>
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
		<a href="#" class="btn" :class="isLikeClass" variant="dark">❤︎</a>
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
import { computed } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
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
		// Reference 타입의 defalut는 기본값을 반환하는 팩토리 함수를 설정해야 합니다.
		obj: {
			type: Object,
			default: () => ({}),
		},
	},
	// setup함수의 첫번째 매개변수로 props를 받을 수 있습니다.
	setup(props) {
		console.log('props.title : ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-primary' : 'btn-outline-primary',
		);
		const typeName = computed(() =>
			props.type === 'news' ? 'News' : 'Notice',
		);
		return {
			isLikeClass,
			typeName,
		};
	},
};
</script>

<style></style>
