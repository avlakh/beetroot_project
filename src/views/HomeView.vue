<template>
    <HomeSectionVue/>
    <section class="we_work">
        <div class="container">
            <div class="we_work_text">
                <h2>How we work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <router-link to="contact" class="arrow_btn">Get in touch with us</router-link>
            </div>
            <div class="we_work_grid">
                <div class="we_work_card">
                    <img src="@/assets/images/home/how_we_work/pointer_1.svg" alt="we_work_pointer1">
                    <h5>Strategy</h5>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div class="we_work_card">
                    <img src="@/assets/images/home/how_we_work/pointer_2.svg" alt="we_work_pointer2">
                    <h5>Wireframing</h5>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div class="we_work_card">
                    <img src="@/assets/images/home/how_we_work/pointer_3.svg" alt="we_work_pointer3">
                    <h5>Design</h5>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
                <div class="we_work_card">
                    <img src="@/assets/images/home/how_we_work/pointer_4.svg" alt="we_work_pointer4">
                    <h5>Development</h5>
                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                </div>
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
    <feature-cards/>
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
        <section class="faqs">
            <div class="container">
                <div class="faqs_flex">
                    <div class="faqs_descr">
                        <h3>Frequently asked questions</h3>
                        <router-link to="contact">Contact us for more info</router-link>
                    </div>
                    <ul class="faqs_accord">
                        <h4 class="faqs_heading"><span class="faqs_number">01</span>How much time does it take?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">02</span>What is your class naming convention?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">03</span>How do you communicate?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">04</span>I have a bigger project. Can you handle it?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">05</span>What is your class naming convention?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
        <section class="contact container">
            <div class="form_bg" :style="{'background-image':'url(require(@/assets/images/home/contact/form_bg.jpg))'}">
                <h2>Building stellar websites for early startups</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div class="form_input">
                <div class="form_input_wrap">
                    <h5>Send inquiry</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    <form action="#" enctype="multipart/form-data" method="post" class="form_flex"> 
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Email" required>
                        <input type="text" placeholder="Paste your comment" required>
                        <button type="submit" class="round_btn">Send an Inquiry</button>
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

import HomeSectionVue from '@/components/HomeSection.vue'
import FeatureCards from '@/components/FeatureCards.vue'
import BlogCards from '@/components/BlogCards.vue'

export default {
    name: 'HomeView',
    components: {
        HomeSectionVue,
        FeatureCards,
        BlogCards
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/pages/index.scss'
</style>