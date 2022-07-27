<template>
	<div class="templates_card">
		<router-link :to="{name: 'works-project', params:{slug: item.slug}}" class="router_link_wrap"></router-link>
		<div class="templates_card_img">
			<img :src="require('@/assets/images/works/templates/'+item.img)" :alt="item.imgAlt">
		</div>
		<h3>{{item.heading}}</h3>
		<p>{{item.descr}}</p>
		<router-link :to="{name: 'works-project', params:{slug: item.slug}}" class="arrow_btn">View Portfolio</router-link>
	</div>
</template>

<script>
export default {
	name: 'WorksCard',
	props: {
		item: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
.templates_card {
	position: relative;
	.router_link_wrap {
		display: block;
		position: absolute;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
		height: 90%;
	}
	h3 {
		margin-bottom: 14px;
	}
	p {
		margin-bottom: 22px;
	}
	.arrow_btn {
		display: inline-block;
		color: $dark-blue;
		&:before, &::after {
			border-color: $dark-blue;
		}
	}
}

.templates_card_img {
	margin-bottom: 18px;
	a {
		display: block;
		width: 100%;
		height: 100%;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

</style>