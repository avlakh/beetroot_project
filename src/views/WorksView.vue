<template>
    <section class="works_home_section">
        <div class="container">
            <div class="works_home_flex">
                <h4>What we created</h4>
                <h2>Our Work Portfolio</h2>
                <p>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p>
                <ul class="sm_list">
                    <li><a href="https://www.facebook.com/" target="_blank"><i class="icon icon-facebook"></i></a></li>
                    <li><a href="https://twitter.com/" target="_blank"><i class="icon icon-twitter"></i></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><i class="icon icon-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank"><i class="icon icon-linkedin-square"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    <section class="templates container">
        <div class="templates_list_flex">
            <ul class="templates_list">
                <li><a href="#" class="active">All</a></li>
                <li><a href="#">UI Design</a></li>
                <li><a href="#">Webflow Design</a></li>
                <li><a href="#">Figma Design</a></li>
            </ul>
        </div>
        <div class="templates_grid">
            <template v-for="(item, i) in worksCardArr" :key="i">
                <works-card :img="item.img" :imgAlt="item.imgAlt" :heading="item.heading" :descr="item.descr"/>
            </template>
        </div>
    </section>
    <section class="build_together container">
        <div class="build_together_text">
            <h2>Let's build something great together</h2>
            <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        </div>
        <router-link to="contact" class="round_btn">Contact Us</router-link>
    </section>
</template>

<script>
import axios from 'axios'
import WorksCard from '@/components/WorksCard.vue'
export default {
    name: 'WorksView',
    components: {
        WorksCard
    },
    data (){
        return {
            worksCardArr: []
        }
    },
    created(){
        axios
            .get('../data/WorksCard.json')
            .then(resp=>{
                this.worksCardArr = resp.data;
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/pages/works.scss'
</style>