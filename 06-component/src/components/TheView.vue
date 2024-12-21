<template>
	<main class="bg-dark text-light">
		<div class="container py-5">
			<!-- form 태그들 -->
			<BoardCreate @create-board="createBoard"></BoardCreate>

			<hr class="my-4" />

			<div class="row g-4">
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
				<div class="col col-4" v-for="board in boards" :key="board.id">
					<AppCard
						:title="board.title"
						:contents="board.contents"
						:is-like="board.isLike"
						:type="board.type"
						@like-toggle="board.isLike = !board.isLike"
					>
					</AppCard>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { reactive } from 'vue';
import AppCard from './AppCard.vue';
import BoardCreate from './BoardCreate.vue';

export default {
	components: { AppCard, BoardCreate },
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

		const obj = reactive({
			title: 'obj.title',
			contents: 'obj.contents ',
		});

		const createBoard = enterdTitle => {
			console.log('createBoard 호출됨');
			console.log('enterdTitle : ', enterdTitle);
		};

		return {
			board,
			boards,
			obj,
			createBoard,
		};
	},
};
</script>

<style lang="scss" scoped></style>
