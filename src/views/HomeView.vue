<template>
    <template v-for="(item, i) in homeSectionArr">
        <home-section :key="i" v-if="i === 0" :heading="item.heading" :paragraph="item.paragraph" :heroImg="item.heroImg" :heroImgAlt="item.heroImgAlt" :arrowBtnStatus="item.arrowBtnStatus" :roundBtnText="item.roundBtnText" :roundBtnLink="item.roundBtnLink"/>
    </template>
    <section class="we_work">
        <div class="container">
            <div class="we_work_text">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <router-link to="contact" class="arrow_btn">Get in touch with us</router-link>
            </div>
            <div class="we_work_grid">
                <template v-for="(item, i) in weWorkCardArr" :key="i" >
                    <we-work :img="item.img" :imgAlt="item.imgAlt" :heading="item.heading" :paragraph="item.paragraph"/>
                </template>
            </div>
        </div>
    </section>
    <section class="our_projects">
        <div class="container">
            <div class="our_projects_text">
                <h2>View our projects</h2>
                <router-link to="works" class="arrow_btn">View More</router-link>
            </div>
            <div class="our_projects_grid">
                <div class="our_projects_big_card">
                    <div class="big_card_img">
                        <router-link to="#"><img src="@/assets/images/home/our_projects/big_card.jpg" alt="our_projects_big_card"></router-link>
                    </div>
                    <div class="big_card_overlay">
                        <h6>Workhub office Webflow Webflow Design</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <router-link to="#" class="arrow_btn">View project</router-link>
                    </div>
                </div>
                <div class="our_projects_small_grid">
                    <div class="our_projects_small_card sm_card_up">
                        <div class="small_card_img">
                            <router-link to="#"><img src="@/assets/images/home/our_projects/small_card_up.jpg" alt="our_projects_small_card_up"></router-link>
                        </div>
                        <div class="small_card_overlay sm_card_up_overlay">
                            <h6>Unisaas Website Design</h6>
                            <router-link to="#" class="arrow_btn">View portfolio</router-link>
                        </div>
                    </div>
                    <div class="our_projects_small_card sm_card_bot">
                        <div class="small_card_img"><router-link to="#"><img src="@/assets/images/home/our_projects/small_card_bot.jpg" alt="our_projects_small_card_bot"></router-link></div>
                        <div class="small_card_overlay sm_card_bot_overlay">
                            <h6>Unisaas Website Design</h6>
                            <router-link to="#" class="arrow_btn">View portfolio</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="features">
        <div class="container">
            <div class="features_text">
                <h6>Features</h6>
                <h2>Design that solves problems, one product at a time</h2>
            </div>
            <div class="features_grid">
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 0" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 1" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 2" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 3" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 4" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in featureCardsArr">
                    <feature-cards :key="i" v-if="i === 5" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
            </div>
        </div>
    </section>
    <section class="clients">
            <div class="container">
                <div class="clients_flex">
                    <div class="clients_flex_descr">
                        <h3>What our clients say about us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <div class="clients_flex_slider">
                        <div class="slide">
                            <h5 class="clients_quote">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                            <div class="slide_author">
                                <div class="slide_img">
                                    <img src="@/assets/images/home/clients/slider_image.png" alt="jenny_wilson">
                                </div>
                                <div class="slide_author_descr">
                                    <h5>Jenny Wilson</h5>
                                    <h6>Vice President</h6>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="slide">
                            <h5 class="clients_quote">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                            <div class="slide_author">
                                <div class="slide_img">
                                    <img src="assets/images/home/clients/slider_image.png" alt="jenny_wilson">
                                </div>
                                <div class="slide_author_descr">
                                    <h5>Jenny Wilson</h5>
                                    <h6>Vice President</h6>
                                </div>
                            </div>
                        </div>
                        <div class="slide">
                            <h5 class="clients_quote">"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h5>
                            <div class="slide_author">
                                <div class="slide_img">
                                    <img src="assets/images/home/clients/slider_image.png" alt="jenny_wilson">
                                </div>
                                <div class="slide_author_descr">
                                    <h5>Jenny Wilson</h5>
                                    <h6>Vice President</h6>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>
        <faqs-accord/>
        <section class="contact container">
            <div class="form_bg" :style="{'background-image':'url(require(@/assets/images/home/contact/form_bg.jpg))'}">
                <h2>Building stellar websites for early startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div class="form_input">
                <div class="form_input_wrap">
                    <h5>Send inquiry</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <form id="home_form">
                        <div class="form_flex">
                            <input type="text" placeholder="Your Name">
                            <input type="email" placeholder="Email">
                            <input type="text" placeholder="Paste your comment">
                            <button type="submit" class="round_btn">Send an Inquiry</button>
                        </div>
                    </form>
                    <div class="arrow_wrap">
                        <router-link to="contact" class="arrow_btn">Get in touch with us</router-link>
                    </div>
                </div>
            </div>
        </section>
        <blog-cards/>
</template>

<script>

import HomeSection from '@/components/HomeSection.vue'
import WeWork from '@/components/WeWork.vue'
import FeatureCards from '@/components/FeatureCards.vue'
import BlogCards from '@/components/BlogCards.vue'
import FaqsAccord from '@/components/FaqsAccord.vue'
import axios from 'axios'

export default {
    name: 'HomeView',
    components: {
        HomeSection,
        WeWork,
        FeatureCards,
        BlogCards,
        FaqsAccord
    },
    data () {
        return {
            weWorkCardArr: [],
            featureCardsArr: [],
            homeSectionArr: []
        }
    },
    created() {
        axios
            .get('../data/FeatureCards.json')
            .then (resp =>{
                this.featureCardsArr = resp.data;
            }),
        axios
            .get('../data/HomeSection.json')
            .then (resp =>{
                this.homeSectionArr = resp.data;
            })
        axios 
            .get('../data/WeWork.json')
            .then (resp=>{
                this.weWorkCardArr = resp.data
            })
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/pages/index.scss'
</style>