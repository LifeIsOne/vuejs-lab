<template>
	<!-- BootstrapVueNext -->
	<BBadge class="mb-2">{{ typeName }}</BBadge>
	<BCard
		:title="title"
		img-src="https://picsum.photos/id/25/600/300"
		img-alt="Image"
		img-top
		tag="article"
		class="bg-dark"
		style="color: #fff8; border-color: #777"
	>
		<BCardText>
			{{ contents }}
		</BCardText>
		<a
			href="#"
			class="btn btn-outline-secondary"
			:class="isLikeClass"
			variant="dark"
			@click="likeToggle"
			>❤︎</a
		>
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
console.log('Nomal Script');
</script>

<script setup>
import { computed } from 'vue';

console.log('Script Setup');

// Before Vue ver 3.2에는 `defineProps()`와 `defineEmits()`는 변수에 할당해야 했음 예 :
// const props = defineProps({
const props = defineProps({
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
});
const emit = defineEmits(['likeToggle']);

// console.log('props.title : ', props.title);

const isLikeClass = computed(() =>
	props.isLike ? 'btn-primary' : 'btn-outline-primary',
);
const typeName = computed(() => (props.type === 'news' ? 'News' : 'Notice'));
const likeToggle = () => {
	// props.isLke = !props.isLike;
	context.emit('likeToggle');
};
</script>
