<template>
	<main class="bg-dark text-light">
		<div class="container py-5">
			<!-- form 태그들 -->
			<PostCreate @create-post="createPost"></PostCreate>

			<hr class="my-4" />

			<div class="row g-4">
				<!-- <BRow gutter-y="10"> -->
				<!-- 하드코딩 -->
				<!-- <BCol cols="4">
						<PostItem title="제목1" contents="내용1"></PostItem>
					</BCol> -->
				<!-- 동적 데이터 전달 -->
				<!-- <BCol cols="4">
						<AppCard :title="post.title" :contents="post.contents"> </AppCard>
					</BCol> -->
				<!-- v-for 디렉티브 사용 -->
				<div class="col col-4" v-for="post in posts" :key="post.id">
					<PostItem
						:title="post.title"
						:contents="post.contents"
						:is-like="post.isLike"
						:type="post.type"
						@like-toggle="post.isLike = !post.isLike"
					>
					</PostItem>
				</div>
			</div>

			<hr class="my-4" />

			<!-- <LabelInput
				:model-value="username"
				@update:model-value="value => (username = value)"
			></LabelInput> -->
			<LabelInput
				v-model="username"
				label="username"
				class="parent-class"
				style="color: #f00"
				id="parent-id "
			></LabelInput>
			<!-- <LabelTitle v-model:title="username" label="username-2"></LabelTitle>
			<Username
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></Username> -->
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import PostItem from './PostItem.vue';
import PostCreate from './PostCreate.vue';
import LabelInput from './LabelInput.vue';
import LabelTitle from './LabelTitle.vue';
import Username from './UsernameInput.vue';

export default {
	components: { PostItem, PostCreate, LabelInput, LabelTitle, Username },
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});

		// prettier-ignore
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: false, type: 'notice' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{ id: 4, title: '제목4', contents: '내용4', isLike: true, type: 'news' },
		]);

		const obj = reactive({
			title: 'obj.title',
			contents: 'obj.contents ',
		});

		const createPost = newPost => {
			console.log('createPost 호출됨');
			console.log('newPost : ', newPost);
			posts.push(newPost);
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');

		return {
			post,
			posts,
			obj,
			createPost,
			username,
			firstname,
			lastname,
		};
	},
};
</script>

<style lang="scss" scoped></style>
