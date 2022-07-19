<template>
    <template v-for="(item, i) in homeSectionArr">
        <home-section :key="i" v-if="i === 1" :item="item"/>
    </template>
    <section class="features container">
        <template v-for="(item, i) in featurePartnersArr">
            <feature-partners :key="i" v-if="i === 0" :item="item"/>
        </template>
        <h2>The benefits of working with our team</h2>
        <div class="features_grid">
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 6" :item="item"/>
            </template>
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 7" :item="item"/>
            </template>
            <template v-for="(item, i) in featureCardsArr">
                <feature-cards :key="i" v-if="i === 8" :item="item"/>
            </template>
        </div>
    </section>
    <section class="our_approach_no_ptop container">
        <template v-for="(item, i) in ourApproachArr">
            <our-approach :key="i" v-if="i === 3" :item="item"/>
        </template>
    </section>
    <section class="our_approach our_approach_grey">
        <div class="container">
            <template v-for="(item, i) in ourApproachArr">
                <our-approach-reverse :key="i" v-if="i === 4" :item="item"/>
            </template>
        </div>
    </section>
    <section class="our_approach container">
        <template v-for="(item, i) in ourApproachArr">
            <our-approach :key="i" v-if="i === 5" :item="item"/>
        </template>
    </section>
    <section class="our_approach our_approach_yellow">
        <div class="container">
            <template v-for="(item, i) in ourApproachArr">
                <our-approach-reverse :key="i" v-if="i === 6" :item="item"/>
            </template>
        </div>
    </section>
    <faqs-accord/>
</template>

<script>

import axios from 'axios'
import HomeSection from '@/components/home/HomeSection.vue'
import FeaturePartners from '@/components/feature/FeaturePartners.vue'
import FeatureCards from '@/components/feature/FeatureCards.vue'
import OurApproach from '@/components/about_us/OurApproach.vue';
import OurApproachReverse from '@/components/about_us/OurApproachReverse.vue'
import FaqsAccord from '@/components/plugins/FaqsAccord.vue'

export default {
    name: 'FeaturesView',
    components: {
        HomeSection,
        FeaturePartners,
        FeatureCards,
        OurApproach,
        OurApproachReverse,
        FaqsAccord
    },
    data () {
        return {
            homeSectionArr: [],
            featurePartnersArr: [],
            featureCardsArr: [],
            ourApproachArr: []
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
            .get('../data/OurApproach.json')
            .then (resp =>{
                this.ourApproachArr = resp.data;
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/vars.scss';
    @import '@/assets/css/pages/features.scss';
</style>