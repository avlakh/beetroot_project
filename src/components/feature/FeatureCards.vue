<template>
    <div class="features_card">
        <img :src="require('@/assets/images/'+item.img)" :alt="item.imgAlt">
        <h6>{{item.heading}}</h6>
        <p>{{item.paragraph}}</p>
    </div>
</template>

<script>

export default {
    name: 'FeatureCards',
    props: {
        item: {
            type: Object
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