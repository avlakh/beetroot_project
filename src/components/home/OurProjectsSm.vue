<template>
	<div class="small_card_img">
		<router-link :to="{name: 'works-project', params:{slug: item.slug}}"><img :src="require('@/assets/images/works/templates/'+item.img)" :alt="item.imgAlt"></router-link>
	</div>
	<div class="small_card_overlay">
		<h6>{{item.heading}}</h6>
		<router-link :to="{name: 'works-project', params:{slug: item.slug}}" class="arrow_btn">View portfolio</router-link>
	</div>
</template>

<script>
export default {
	name: 'OurProjectsSm',
	props: {
		item: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
	.small_card_img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		img {
			height: 100%;
			width: 100%;
		}
	}
	.small_card_overlay {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: -100%;
		opacity: 0;
		padding-left: 56px;
		padding-right: 110px;
		background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
		padding-top: 129px;
		transition: all .4s ease;
		h6 {
			font-weight: 600;
			color: white;
			margin-bottom: 10px;
		}
		.arrow_btn {
			display: inline-block;
		}
	}

	.sm_card_up:hover .small_card_overlay,
	.sm_card_bot:hover .small_card_overlay {
		left: 0;
		opacity: 1;
	}
	@media screen and (max-width: 800px) {
	.small_card_overlay {
		display: none;
	}
}
</style>