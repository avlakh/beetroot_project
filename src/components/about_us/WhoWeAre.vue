<template>
	<h4>{{item.headingSm}}</h4>
	<div class="who_we_are_flex">
		<div class="who_we_are_descr">
			<h3>{{item.headingOne}}</h3>
			<p>{{item.paragraphOne}}</p>
		</div>
		<div class="who_we_are_descr">
			<h3>{{item.headingTwo}}</h3>
			<p>{{item.paragraphTwo}}</p>
		</div>    
	</div>
	<div class="who_we_are_img">
		<img :src="require('@/assets/images/about_us/'+item.img)" :alt="item.imgAlt">
	</div>
</template>

<script>
export default {
	name: 'WhoWeAre',
	props: {
		item: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/vars.scss';
	h4 {
		padding: 75px 0 0 80px;
		font-size: 16px;
		line-height: 28px;
		color: $dark-blue;
	}
	.who_we_are_flex {
		display: flex;
		gap: 33px;
		padding: 0 80px 80px 80px;
	}

	.who_we_are_descr h3 {
		margin-bottom: 15px;
	}

	.who_we_are_descr p {
		color: $dark-blue;
	}

	.who_we_are_img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		img {
			height: 100%;
			width: 100%;
		}
	}

	@media screen and (max-width: 1000px) {
		.who_we_are_flex {
			flex-wrap: wrap;
		};
	}

	@media screen and (max-width: 700px) {
	.who_we_are h4 {
		padding: 10px 0;
		text-align: center;
	}
	.who_we_are_flex {
		padding: 10px 10px;
		text-align: center;
	}
}

</style>