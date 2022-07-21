<template>
	<section class="page_404">
		<div class="container">
			<div class="page_404_img">
				<img src="@/assets/images/404/404_error.svg" alt="404_svg">
			</div>
			<div class="page_404_descr">
				<h2>This page doesn't exist</h2>
				<router-link to="/" class="round_btn">Go back to homepage</router-link>
			</div>
		</div>
	</section>
	
</template>

<script>
export default {
	name: 'PageView404'
}
</script>

<style lang="scss" scoped>
.page_404 {
	padding: 128px 0 0px;
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 20px;
	}
	h2 {
		text-align: center;
		margin-bottom: 20px;
	}
}

.page_404_img {
	width: 50%;
	height: 50%;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.round_btn {
	display: block;
	width: 60%;
	text-align: center;
	margin: 0 auto;
	cursor: pointer;
	background-color: #FCD980;
	border-radius: 41px;
	padding: 16px 56px;
	font-family: 'Manrope';
	font-weight: 600;
	font-size: 18px;
	line-height: 32px;
	color: #1B1C2B;
	&:hover {
		background-color: #FDE4A6;
	}
}

@media screen and (max-width: 1200px) {
	.page_404 .container {
		justify-content: center;
	}
}

@media screen and (max-width: 800px) {
	.page_404_img {
		width: 75%;
		height: 75%;
	}
}

@media screen and (max-width: 600px) {
	.round_btn {
		width: 100%;
		padding: 16px 28px;
	}
}

</style>