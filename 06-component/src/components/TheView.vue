<template>
	<main>
		<div class="container py-5">
			<BContainer class="bv-example-row">
				<BRow class="g-2">
					<!-- <BRow gutter-y="10"> -->
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
					<BCol cols="4">
						<AppCard></AppCard>
					</BCol>
				</BRow>
			</BContainer>
		</div>
	</main>
</template>

<script>
import AppCard from './AppCard.vue';
export default {
	components: { AppCard },
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
