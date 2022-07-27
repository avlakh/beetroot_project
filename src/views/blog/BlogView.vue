<template>
		<section class="blog_home container">
			<template v-for="(item, index) in list" :key="index">
				<template v-if="index === 0">
					<router-link :to="{name: 'blog-page', params:{title: item.title}}">
						<div class="blog_home_main_text">
							<h2>{{item.title}}</h2>
							<p><span class="blog_home_author_name">{{item.author}}</span><span>{{item.publishedAt}}</span></p>
						</div>
						<div class="blog_home_img">
							<img :src="item.urlToImage" :alt="item.title">
						</div>
					</router-link>
					<div class="blog_home_descr">
						<p v-html="item.description"></p>
						<router-link :to="{name: 'blog-page', params:{title: item.title}}">Read More</router-link>
					</div>
				</template>
			</template>
		</section>
		<section class="our_blog">
			<div class="container">
				<h2>Our Blog</h2>
				<div class="blog_card_wrap">
					<template v-for="(item, index) in list" :key="index">
						<div class="blog_card" v-if="index > 0">
							<router-link :to="{name: 'blog-page', params:{title: item.title}}" class="router_link_wrap"></router-link>
							<div class="blog_card_img">
								<img v-if="item.urlToImage !== null" :src="item.urlToImage" :alt="item.title">
								<img v-else :src="require('@/assets/images/placeholder.png')" :alt="item.title">
							</div>
							<h6>{{item.publishedAt}}</h6>
							<h5>{{item.title}}</h5>
							<p v-html="item.description"></p>
							<router-link :to="{name: 'blog-page', params:{title: item.title}}" class="arrow_btn">Read More</router-link>
						</div>
					</template>
				</div>
			</div>
			<blog-pagination @goToPage="goToPage" :total="total" :page="page"/>
		</section>
</template>

<script>

import axios from 'axios'
import BlogPagination from '@/components/blog/BlogPagination.vue';

export default {
	name: 'BlogView',
	components: {
		BlogPagination
	},
	data () {
		return {
			list: [],
			page: 1,
			total: 0
		}
	},
	computed: {
		dateFormatted(){
			const d = new Date();
			let month = d.getMonth()+1;
			let day = d.getDate();
			return d.getFullYear()+'-'+(month < 10 ? '0'+month : month)+'-'+(day < 10 ? '0'+day : day)
		}
	},
	created () {
		this.fetchData()
	},
	methods: {
		fetchData(){
			let url = 'https://newsapi.org/v2/everything?q=design&apiKey=8de73a80555649889b993ecdb6eb1844';
			url += '&from='+this.dateFormatted
			url += '&to='+this.dateFormatted
			url += '&language=en'
			url += '&pageSize=19'
			url += '&page='+this.page  
			axios
				.get(url)
				.then(resp=>{
					if (resp.data.articles.length === 0) {
						this.$router.push('/404');
					}
					this.list = resp.data.articles;
					this.total = Math.ceil(resp.data.totalResults / 18);	
				})
				.catch(()=>{
					this.$router.push('/404');
				})
		},
		goToPage(new_page) {
			this.page = new_page;
			this.fetchData();
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '@/assets/css/pages/blogs.scss';
</style>