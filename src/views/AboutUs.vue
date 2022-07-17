<template>
    <section class="about_us_home container">
        <template v-for="(item, i) in ourMissionArr">
            <our-mission :key="i" v-if="i === 0" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
        </template>
    </section>
    <section class="who_we_are">
        <div class="container">
            <template v-for="(item, index) in whoWeAreArr" :key="index">
                <who-we-are :headingOne="item.headingOne" :paragraphOne="item.paragraphOne" :headingSm="item.headingSm" :headingTwo="item.headingTwo" :paragraphTwo="item.paragraphTwo" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
        </div>
    </section>
    <section class="our_process">
        <div class="container">
            <h2>The process we follow</h2>
            <div class="our_process_flex">
                <template v-for="(item, index) in ourProcessArr" :key="index">
                    <our-process :heading="item.heading" :paragraph="item.paragraph"/>
                </template>
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
    <section class="features container">
        <h2>The benefits of working with us</h2>
        <div class="features_grid">
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 6" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 7" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 8" :heading="item.heading" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
        </div>
        <template v-for="(item, i) in featurePartnersArr">
            <feature-partners :key="i" v-if="i === 0" :partnersNums="item.partnersNums" :partnersDescr="item.partnersDescr" :partnersLogoOne="item.partnersLogoOne" :partnersLogoOneAlt="item.partnersLogoOneAlt" :partnersLogoTwo="item.partnersLogoTwo" :partnersLogoTwoAlt="item.partnersLogoTwoAlt" :partnersLogoThree="item.partnersLogoThree" :partnersLogoThreeAlt="item.partnersLogoThreeAlt" :partnersLogoFour="item.partnersLogoFour" :partnersLogoFourAlt="item.partnersLogoFourAlt" :partnersLogoFive="item.partnersLogoFive" :partnersLogoFiveAlt="item.partnersLogoFiveAlt"/>
        </template>
    </section>
    <section class="our_team">
            <div class="container">
                <h2>Meet our team</h2>
                <div class="our_team_grid">
                    <template v-for="(item, i) in teamCardsArr">
                        <team-cards :key="i" v-if="i === 0" :headingName="item.headingName" :headingPosition="item.headingPosition" :img="item.img" :imgAlt="item.imgAlt"/>
                    </template>
                    <template v-for="(item, i) in teamCardsArr">
                        <team-cards :key="i" v-if="i === 1" :headingName="item.headingName" :headingPosition="item.headingPosition" :img="item.img" :imgAlt="item.imgAlt"/>
                    </template>
                    <template v-for="(item, i) in teamCardsArr">
                        <team-cards :key="i" v-if="i === 2" :headingName="item.headingName" :headingPosition="item.headingPosition" :img="item.img" :imgAlt="item.imgAlt"/>
                    </template>
                    <template v-for="(item, i) in teamCardsArr">
                        <team-cards :key="i" v-if="i === 3" :headingName="item.headingName" :headingPosition="item.headingPosition" :img="item.img" :imgAlt="item.imgAlt"/>
                    </template>
                </div>
            </div>
        </section>
</template>

<script>

import axios from 'axios';
import WhoWeAre from '@/components/WhoWeAre.vue';
import OurProcess from '@/components/OurProcess.vue';
import OurMission from '@/components/OurMission.vue';
import OurMissionReverse from '@/components/OurMissionReverse.vue'
import FeatureCards from '@/components/FeatureCards.vue'
import FeaturePartners from '@/components/FeaturePartners.vue';
import TeamCards from '@/components/TeamCards.vue'

export default {
    name: 'AboutUs',
    components: {
        WhoWeAre,
        OurProcess,
        OurMission,
        OurMissionReverse,
        FeatureCards,
        FeaturePartners,
        TeamCards,
},
    data () {
        return {
            ourMissionArr: [],
            featureCardsArr: [],
            teamCardsArr: [],
            featurePartnersArr: [],
            whoWeAreArr: [],
            ourProcessArr: []
        }
    },
    created() {
        axios
            .get('../data/OurMission.json')
            .then (resp =>{
                this.ourMissionArr = resp.data;
            }),
        axios 
            .get('../data/FeatureCards.json')
            .then (resp => {
                this.featureCardsArr = resp.data;
            }),
        axios
            .get('../data/TeamCards.json')
            .then (resp => {
                this.teamCardsArr = resp.data;
            }),
        axios
            .get('../data/FeaturePartners.json')
            .then (resp => {
                this.featurePartnersArr = resp.data;
            }),
        axios
            .get('../data/WhoWeAre.json')
            .then (resp => {
                this.whoWeAreArr = resp.data;
            }),
        axios
            .get('../data/OurProcess.json')
            .then (resp => {
                this.ourProcessArr = resp.data;
            })
    }

}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/pages/about_us.scss'
</style>