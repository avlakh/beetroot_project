<template>
    <section class="blog_home container">
            <div class="blog_home_main_text">
                <h2>{{item.title}}</h2>
                <p><span class="blog_home_author_name">{{item.author}}</span><span><time>{{item.publishedAt}}</time></span></p>
            </div>
            <div class="blog_home_img">
                <img :src="item.urlToImage" :alt="item.title">
            </div>
        </section>
        <section class="blog_text text_container">
            <p>{{item.content}}</p>
            <router-link to="/blog" class="round_btn">Back to news</router-link>
        </section>
</template>

<script>

import axios from 'axios';

export default {
    data(){
        return {
            item: {}
        }
    }, created(){
        let url = `https://newsapi.org/v2/everything?q=${this.$route.params.title}&searchIn=title&apiKey=8de73a80555649889b993ecdb6eb1844`;
        axios 
            .get(url)
            .then(resp=>{
                this.item = resp.data.articles[0]
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/pages/blog_page.scss'
</style>