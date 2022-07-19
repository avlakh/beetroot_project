<template>
    <section class="our_blog">
            <div class="container">
                <router-link to="/blog" class="heading_link">Our blog</router-link>
                <div class="blog_card_wrap">
                    <div v-for="(item, index) in list" :key="index" class="blog_card">
                        <router-link :to="{name: 'blog-page', params:{title: item.title}}">
                            <div class="blog_card_img">
                                <img :src="item.urlToImage" :alt="item.title">
                            </div>
                            <h6>{{item.publishedAt}}</h6>
                            <h5>{{item.title}}</h5>
                            <p v-html="item.description"/>
                        </router-link>
                        <router-link :to="{name: 'blog-page', params:{title: item.title}}" class="arrow_btn">Read More</router-link>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BlogCards',
    data (){
        return {
            list: [],
        }
    },
    created() {
        let url = 'https://newsapi.org/v2/everything?q=design&apiKey=8de73a80555649889b993ecdb6eb1844';
            url += '&from='+this.dateFormatted
            url += '&to='+this.dateFormatted
            url += '&language=en'
            url += '&pageSize=3'
            url += '&page='+this.page  
            axios
                .get(url)
                .then(resp=>{
                    this.list = resp.data.articles;
                })
    }
}
</script>

<style lang="scss" scoped>

    @import '@/assets/css/vars.scss';

    .our_blog {
    margin-bottom: 128px;
    .heading_link {
        display: inline-block;
        font-weight: 600;
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 64px;
        &:hover {
            color: $royal-blue;
        }
    }
}

.blog_card_wrap {
    display: flex;
    gap: 32px;
}

.blog_card {
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
    .blog_card_wrap {
        flex-wrap: wrap;
        .blog_card {
            width: 45%;
            justify-content: center;
            align-items: center;
        }
    }
}

@media screen and (max-width: 500px) {
    .blog_card_wrap .blog_card {
        width: 100%;
    }
}

</style>