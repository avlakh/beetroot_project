<template>
    <section class="about_us_home container">
        <template v-for="(item, i) in ourMissionArr">
            <our-mission :key="i" v-if="i === 0" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
        </template>
    </section>
    <section class="who_we_are container">
        <h4>Who we are</h4>
        <div class="who_we_are_flex">
            <div class="who_we_are_descr">
                <h3>Goal focused</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="who_we_are_descr">
                <h3>Continuous improvement</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>    
        </div>
        <div class="who_we_are_img">
            <img src="@/assets/images/about_us/who_we_are_guy_with_the_board.jpg" alt="guy_showing_the_board">
        </div>
    </section>
    <section class="our_process container">
        <h2>The process we follow</h2>
        <div class="our_process_flex">
            <div class="our_process_card">
                <h6>Planning</h6>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div class="our_process_card">
                <h6>Conception</h6>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div class="our_process_card">
                <h6>Design</h6>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
            <div class="our_process_card">
                <h6>Development</h6>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
            </div>
        </div>
    </section>
    <section class="our_mission">
            <div class="container">
                <template v-for="(item, i) in ourMissionArr">
                    <our-mission :key="i" v-if="i === 1" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
                <template v-for="(item, i) in ourMissionArr">
                    <our-mission-reverse :key="i" v-if="i === 2" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
                </template>
            </div>
        </section>
</template>

<script>

import axios from 'axios';
import OurMission from '@/components/OurMission.vue';
import OurMissionReverse from '@/components/OurMissionReverse.vue'

export default {
    name: 'AboutUs',
    components: {
        OurMission,
        OurMissionReverse
    },
    data () {
        return {
            ourMissionArr: []
        }
    },
    created() {
        axios
            .get('../data/OurMission.json')
            .then (resp =>{
                this.ourMissionArr = resp.data;
                console.log(this.OurMission)
            })
    }

}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/pages/about_us.scss'
</style>