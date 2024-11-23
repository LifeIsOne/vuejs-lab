<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				div 영역
				<p @click.self="clickP">
					p영역
					<!-- <span @click.stop="clickSpan"> span영역 </span> -->
					<span @click="clickSpan"> span영역 </span>
					<a href="https://naver.com" @click.prevent.stop="clickA"
						>a영역 naver웹페이지 이동하기</a
					>
				</p>
			</div>
		</div>
		<button @click.once="clickDiv">once</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			// location.href ='https://elated-value-48d.notion.site/15-VueJS-Vue3-11ad91c8ac0e8066be2ae42692a74129?pvs=4';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = () => {
			console.log('clickSpan');
			alert('좋아요를 누르셨습니다!');
		};
		const clickA = e => {
			alert('a태그를 누르셨습니다.');
		};

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
		};
	},
};
</script>

<style lang="scss" scoped></style>
<style>
@import './assets/base.css';
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background: #999;
}
#modifiers p {
	background: #666;
}
#modifiers span {
	background: #333;
	display: block;
}
</style>
