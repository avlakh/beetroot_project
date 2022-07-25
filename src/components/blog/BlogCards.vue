<template>
	<div class="blog_card">
		<div class="blog_card_img">
			<img :src="require('@/assets/images/home/blog_card/'+item.img)" :alt="item.imgAlt">
		</div>
		<h6>{{item.published}}</h6>
		<h5>{{item.title}}</h5>
		<p>{{item.descr}}</p>
		<router-link to="#" class="arrow_btn">Read More</router-link>
	</div>
</template>

<script>
export default {
	name: 'BlogCard',
	props: {
		item: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';

.blog_card {
	width: 33%;
	.blog_card_img {
		position: relative;
		padding-top: 53%;
		margin-bottom: 24px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			position: absolute;
			left: 0;
			top: 0;
		}
	}
	h6 {
		font-size: 16px;
		line-height: 28px;
		color: $dark-blue;
		opacity: 0.7;
		margin-bottom: 16px;
	}
	h5 {
		font-weight: 500;
		font-size: 24px;
		line-height: 36px;
		color: #282938;
		margin-bottom: 16px;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		line-height: 28px;
		color: #282938;
		opacity: 0.7;
		margin-bottom: 32px;
	}
	.arrow_btn {
		display: inline-block;
		color: $dark-blue;
		&:before, &:after {
			border-color: $dark-blue;
		}
		&:hover::before,
		&:hover::after {
			transform: translateX(30px);
		}
		&:hover::after {
			transform: translateX(30px) rotate(-135deg);
		}
	}
}

@media screen and (max-width: 1000px) {
	.blog_card {
		width: 45%;
		justify-content: center;
		align-items: center;
	}
}

@media screen and (max-width: 500px) {
	.blog_card {
		width: 100%;
	}
}

</style>