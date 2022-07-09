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
</template>

<script>
import HomeSectionVue from '@/components/HomeSection.vue'
export default {
    name: 'HomeView',
    components: {
        HomeSectionVue
    }
}
</script>
<style lang="scss" scoped>
    @import '@/assets/css/pages/index.scss'
</style>