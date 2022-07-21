<template>
	<div class="we_work_card">
		<img :src="require('@/assets/images/home/how_we_work/'+item.img)" :alt="item.imgAlt">
		<h5>{{item.heading}}</h5>
		<p>{{item.paragraph}}</p>
	</div>
</template>

<script>

export default {
	name: 'WeWork',
	props: {
		item: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>

.we_work_card {
	img {
		margin-bottom: 10px;
	}
	h5 {
		margin-bottom: 11px;
	}
	p {
		line-height: 28px;
		color: rgba(40, 41, 56, .7);
	}
}

</style>