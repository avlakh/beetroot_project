<template>
    <section class="case_header case_container">
        <div class="case_header_text">
            <h6>{{item.projectHeadingField}}</h6>
            <h2>{{item.projectHeadingName}}</h2>
            <p>{{item.projectHeadingDescr}}</p>
        </div>
        <div class="case_header_img">
            <img :src="require('@/assets/images/works/templates/'+item.mainImg)" :alt="item.mainImgAlt">
        </div>
        <div class="case_header_descr">
            <div class="descr_card">
                <h5>Client</h5>
                <h6>{{item.clientName}}</h6>
            </div>
            <div class="descr_card">
                <h5>Service</h5>
                <h6>{{item.clientService}}</h6>
            </div>
            <div class="descr_card">
                <h5>Deliverable</h5>
                <h6>{{item.clientDeliverable}}</h6>
            </div>
        </div>
    </section>
    <section class="case_about case_container">
        <div class="case_about_text">
            <h3>{{item.projectHeadingAbout}}</h3>
            <p>{{item.projectDescrAbout}}</p>
        </div>
        <div class="case_about_img">
            <img :src="require('@/assets/images/case_studies/'+item.botImg)" :alt="item.botImgAlt">
        </div>
        <div class="case_about_text">
            <h3>{{item.howHeading}}</h3>
            <p>{{item.howDescr}}</p>
            <ul>
                <li>{{item.howListOne}}</li>
                <li>{{item.howListTwo}}</li>
                <li>{{item.howListThree}}</li>
                <li>{{item.howListFour}}</li>
            </ul>
        </div>
    </section>
    <section class="case_keywords case_container">
        <div class="case_keywords_flex">
            <h5>Keywords</h5>
            <h6>{{item.keywordOne}}</h6>
            <h6>{{item.keywordTwo}}</h6>
            <h6>{{item.keywordThree}}</h6>
            <h6>{{item.keywordFour}}</h6>
            <h6>{{item.keywordFive}}</h6>
            <h6>{{item.keywordSix}}</h6>
        </div>
    </section>

    <template v-for="(item, i) in buildTogetherArr" :key="i">
        <build-together :item="item"/>
    </template>
</template>

<script>

import axios from 'axios';
import BuildTogether from '@/components/works/BuildTogether.vue';

export default {
    name: 'WorksProject',
    components: {
        BuildTogether
    },
    data(){
        return {
            buildTogetherArr: [],
            item: {}
        }
    },
    created(){
        axios
            .get('../data/BuildTogether.json')
            .then(resp=>{
                this.buildTogetherArr = resp.data;
            }),
        axios
            .get(`../data/Works/WorksProject-${this.$route.params.slug}.json`)
            .then(resp=>{
                this.item = resp.data;
            })
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/pages/works_project.scss';
</style>