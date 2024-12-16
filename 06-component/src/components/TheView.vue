<template>
	<main>
		<div class="container py-5">
			<BContainer class="bv-example-row">
				<BRow class="g-2">
					<!-- <BRow gutter-y="10"> -->
					<!-- 하드코딩 -->
					<!-- <BCol cols="4">
						<AppCard title="제목1" contents="내용1"></AppCard>
					</BCol> -->
					<!-- 동적 데이터 전달 -->
					<!-- <BCol cols="4">
						<AppCard :title="board.title" :contents="board.contents"> </AppCard>
					</BCol> -->
					<!-- v-for 디렉티브 사용 -->
					<BCol cols="4" v-for="board in boards" :key="board.id">
						<AppCard
							:title="board.title"
							:contents="board.contents"
							:is-like="board.isLike"
							:type="board.type"
							@like-toggle="board.isLike = !board.isLike"
						>
						</AppCard>
					</BCol>
				</BRow>
			</BContainer>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
export default {
	components: { AppCard },
	setup() {
		const board = reactive({
			title: '제목2',
			contents: '내용2',
		});

		// prettier-ignore
		const boards = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: false, type: 'notice' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{ id: 4, title: '제목4', contents: '내용4', isLike: true, type: 'news' },
			{ id: 5, title: '제목5', contents: '내용5', isLike: true, type: 'notice' },
			{ id: 6, title: '제목6', contents: '내용6', isLike: false, type: 'news' },
		]);

		return {
			board,
			boards,
		};
	},
};
</script>

<style lang="scss" scoped></style>
