<template>
    <!-- <section class="blog_home container">
        <div class="blog_home_main_text">
            <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
            <p><span class="blog_home_author_name">Andrew Jonson</span><span>Posted on 27th January 2021</span></p>
        </div>
        <div class="blog_home_img">
            <img src="../assets/images/blogs/blog_home.jpg" alt="blog_home">
        </div>
        <div class="blog_home_descr">
            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.</p>
            <a href="#">Read more</a>
        </div>
    </section> -->
    <section class="our_blog">
        <div class="container">
            <h2>Our Blog</h2>
            <div class="blog_card_wrap">
                <div v-for="(item, index) in list" :key="index" class="blog_card">
                    <router-link :to="{name: 'blog-page', params:{title: item.title}}">
                    <div class="blog_card_img">
                        <img :src="item.urlToImage" :alt="item.title">
                    </div>
                    <h6>{{item.publishedAt}}</h6>
                    <h5>{{item.title}}</h5>
                    <p>{{item.description}}</p>
                    <router-link :to="{name: 'blog-page', params:{title: item.title}}" class="arrow_btn">Read More</router-link>
                    </router-link>
                </div>
            </div>
        </div>
        <blog-pagination @goToPage="goToPage" :total="total" :page="page"/>
    </section>
</template>

<script>

import axios from 'axios'
import BlogPagination from '@/components/BlogPagination.vue';

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
            url += '&pageSize=18'
            url += '&page='+this.page  
            axios
                .get(url)
                .then(resp=>{
                    this.list = resp.data.articles;
                    // this.total = Math.ceil(resp.data.totalResults / 18)
                    this.total = 4;
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
    @import '@/assets/css/pages/blogs.scss'
</style>