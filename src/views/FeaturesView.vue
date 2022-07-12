<template>
    <template v-for="(item, i) in homeSectionArr">
        <home-section :key="i" v-if="i === 1" :heading="item.heading" :paragraph="item.paragraph" :heroImg="item.heroImg" :heroImgAlt="item.heroImgAlt" :arrowBtnStatus="item.arrowBtnStatus" :roundBtnText="item.roundBtnText" :roundBtnLink="item.roundBtnLink"/>
    </template>
    <section class="features container">
        <template v-for="(item, i) in featurePartnersArr">
            <feature-partners :key="i" v-if="i === 0" :partnersNums="item.partnersNums" :partnersDescr="item.partnersDescr" :partnersLogoOne="item.partnersLogoOne" :partnersLogoOneAlt="item.partnersLogoOneAlt" :partnersLogoTwo="item.partnersLogoTwo" :partnersLogoTwoAlt="item.partnersLogoTwoAlt" :partnersLogoThree="item.partnersLogoThree" :partnersLogoThreeAlt="item.partnersLogoThreeAlt" :partnersLogoFour="item.partnersLogoFour" :partnersLogoFourAlt="item.partnersLogoFourAlt" :partnersLogoFive="item.partnersLogoFive" :partnersLogoFiveAlt="item.partnersLogoFiveAlt"/>
        </template>
        <h2>The benefits of working with our team</h2>
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
    </section>
    <section class="our_approach_no_ptop container">
        <template v-for="(item, i) in ourMissionArr">
            <our-mission :key="i" v-if="i === 3" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
        </template>
    </section>
    <section class="our_approach our_approach_grey">
        <div class="container">
            <template v-for="(item, i) in ourMissionArr">
                <our-mission-reverse :key="i" v-if="i === 4" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
        </div>
    </section>
    <section class="our_approach container">
        <template v-for="(item, i) in ourMissionArr">
            <our-mission :key="i" v-if="i === 5" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
        </template>
    </section>
    <section class="our_approach our_approach_yellow">
        <div class="container">
            <template v-for="(item, i) in ourMissionArr">
                <our-mission-reverse :key="i" v-if="i === 6" :headingSm="item.headingSm" :headingBg="item.headingBg" :paragraph="item.paragraph" :img="item.img" :imgAlt="item.imgAlt"/>
            </template>
        </div>
    </section>
    <faqs-accord/>
</template>

<script>

import axios from 'axios'
import HomeSection from '@/components/HomeSection.vue'
import FeaturePartners from '@/components/FeaturePartners.vue'
import FeatureCards from '@/components/FeatureCards.vue'
import OurMission from '@/components/OurMission.vue';
import OurMissionReverse from '@/components/OurMissionReverse.vue'
import FaqsAccord from '@/components/FaqsAccord.vue'

export default {
    name: 'FeaturesView',
    components: {
        HomeSection,
        FeaturePartners,
        FeatureCards,
        OurMission,
        OurMissionReverse,
        FaqsAccord
    },
    data () {
        return {
            homeSectionArr: [],
            featurePartnersArr: [],
            featureCardsArr: [],
            ourMissionArr: []
        }
    },
    created () {
        axios 
            .get('../data/HomeSection.json')
            .then (resp => {
                this.homeSectionArr = resp.data;
            }),
        axios 
            .get('../data/FeaturePartners.json')
            .then (resp => {
                this.featurePartnersArr = resp.data;
            }),
        axios 
            .get('../data/FeatureCards.json')
            .then (resp => {
                this.featureCardsArr = resp.data;
            }),
        axios
            .get('../data/OurMission.json')
            .then (resp =>{
                this.ourMissionArr = resp.data;
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/vars.scss';
    @import '@/assets/css/pages/features.scss';
</style>