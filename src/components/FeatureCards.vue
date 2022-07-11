<template>
    <div class="features_card">
        <img :src="require('@/assets/images/'+img)" :alt="imgAlt">
        <h6>{{ heading }}</h6>
        <p>{{paragraph}}</p>
    </div>
</template>

<script>
export default {
    name: 'FeatureCards',
    props: {
        img: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        heading: {
            type: String,
            default: ''
        },
        paragraph: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';


.features_card {
    background-color: #fff;
    padding-top: 48px;
    padding-left: 48px;
    padding-bottom: 48px;
    padding-right: 32px;
    img {
        padding-bottom: 25px;
    }
    h6 {
        padding-bottom: 12px;
    }
    p {
        line-height: 28px;
        color: rgba(40, 41, 56, 0.7)
    }
}

</style>