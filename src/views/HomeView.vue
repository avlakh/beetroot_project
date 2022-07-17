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
                    <template v-for="(item, index) in ourProjectsArr" :key="index">
                        <our-projects-big v-if="index === 0" :img="item.img" :imgAlt="item.imgAlt" :heading="item.heading" :descr="item.descr"/>
                    </template>
                </div>
                <div class="our_projects_small_grid">
                    <div class="our_projects_small_card sm_card_up">
                        <template v-for="(item, index) in ourProjectsArr" :key="index">
                            <our-projects-sm v-if="index === 1" :img="item.img" :imgAlt="item.imgAlt" :heading="item.heading" :descr="item.descr"/>
                        </template>
                    </div>
                    <div class="our_projects_small_card sm_card_bot">
                        <template v-for="(item, index) in ourProjectsArr" :key="index">
                            <our-projects-sm v-if="index === 2" :img="item.img" :imgAlt="item.imgAlt" :heading="item.heading" :descr="item.descr"/>
                        </template>
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
                    <carousel :settings="sliderSettings">
                        <slide v-for="(item, i) in homeSliderArr" :key="i">
                            <h5 class="clients_quote">{{item.quote}}</h5>
                            <div class="slide_author">
                                <div class="slide_img">
                                    <img :src="require('@/assets/images/home/'+item.img)" :alt="item.imgAlt">
                                </div>
                                <div class="slide_author_descr">
                                    <h5>{{item.authorName}}</h5>
                                    <h6>{{item.authorPosition}}</h6>
                                </div>
                            </div>
                        </slide>
                        <template #addons>
                            <navigation />
                        </template>
                    </carousel>
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
import OurProjectsBig from '@/components/OurProjectsBig.vue'
import OurProjectsSm from '@/components/OurProjectsSm.vue'
import BlogCards from '@/components/BlogCards.vue'
import FaqsAccord from '@/components/FaqsAccord.vue'
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Navigation, Slide} from 'vue3-carousel'
import axios from 'axios'

export default {
    name: 'HomeView',
    components: {
    HomeSection,
    WeWork,
    FeatureCards,
    OurProjectsBig,
    OurProjectsSm,
    BlogCards,
    FaqsAccord,
    Carousel,
    Navigation,
    Slide,
    
},
    data () {
        return {
            weWorkCardArr: [],
            featureCardsArr: [],
            homeSectionArr: [],
            homeSliderArr: [],
            ourProjectsArr: [],
            sliderSettings: {
                itemsToShow: 1,
                autoplay: 3000,
                wrapAround: true
            }
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
        axios
            .get('../data/HomeSlider.json')
            .then(resp=>{
                this.homeSliderArr = resp.data;
            }),
        axios 
            .get('../data/WorksCard.json')
            .then(resp=>{
                this.ourProjectsArr = resp.data;
            })
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/pages/index.scss';
</style>
<style lang="scss">
.carousel__prev {
    position: absolute;
    z-index: 10;
    height: 48px;
    width: 48px;
    top: auto;
    left: auto;
    bottom: -28px;
    right: 20px;
    background: none;
    svg {
        display: none;
    }
    &::before {
            content: url('@/assets/images/home/clients/prev_arrow.svg');
            position: absolute;
            opacity: 1;
            width: 48px;
            height: 48px;
            top: 28%;
            left: 0%;
        }
        &:hover::before {
            content: url('@/assets/images/home/clients/prev_arrow_hover.svg');
        }
        &:hover::after {
            content: '';
            position: absolute;
            z-index: -5;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            background-color: #5239FA;
            border-radius: 50%;
        }
}
.carousel__next {
    position: absolute;
    z-index: 10;
    height: 48px;
    width: 48px;
    top: auto;
    left: auto;
    bottom: -28px;
    right: 0;
    background: none;
    svg {
        display: none;
    }
    &::before {
            content: url('@/assets/images/home/clients/next_arrow.svg');
            opacity: 1;
            width: 48px;
            height: 48px;
            position: absolute;
            top: 28%;
            left: 4%;
        }
        &:hover::before {
            content: url('@/assets/images/home/clients/next_arrow_hover.svg');
        }
        &:hover::after {
            content: '';
            position: absolute;
            z-index: -5;
            top: 0;
            left: 0;
            width: 48px;
            height: 48px;
            background-color: #5239FA;
            border-radius: 50%;
        }
}

@media screen and (max-width: 600px) {
    .carousel__prev, .carousel__next {
        display: none;
    }
}
</style>