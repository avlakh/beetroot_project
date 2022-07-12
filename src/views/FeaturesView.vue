<template>
    <template v-for="(item, i) in homeSectionArr">
        <home-section :key="i" v-if="i === 1" :heading="item.heading" :paragraph="item.paragraph" :heroImg="item.heroImg" :heroImgAlt="item.heroImgAlt" :arrowBtnStatus="item.arrowBtnStatus" :roundBtnText="item.roundBtnText" :roundBtnLink="item.roundBtnLink"/>
    </template>
</template>

<script>

import axios from 'axios'
import HomeSection from '@/components/HomeSection.vue'

export default {
    name: 'FeaturesView',
    components: {
        HomeSection
    },
    data () {
        return {
            homeSectionArr: []
        }
    },
    created () {
        axios 
            .get('../data/HomeSection.json')
            .then (resp => {
                this.homeSectionArr = resp.data;
            })
    }
}
</script>