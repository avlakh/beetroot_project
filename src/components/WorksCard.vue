<template>
    <div class="templates_card">
        <div class="templates_card_img">
            <a href="#"><img :src="require('@/assets/images/works/templates/'+img)" :alt="imgAlt"></a>
        </div>
        <h3>{{heading}}</h3>
        <p>{{descr}}</p>
        <a href="#" class="arrow_btn">View Portfolio</a>
    </div>
</template>

<script>
export default {
    name: 'WorksCard',
    props: {
        heading: {
            type: String,
            default: ''
        },
        descr: {
            type: String,
            default: ''
        },
        img: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';
    .templates_card {
    h3 {
        margin-bottom: 14px;
    }
    p {
        margin-bottom: 22px;
    }
    .arrow_btn {
        display: inline-block;
        color: $dark-blue;
        &:before, &::after {
            border-color: $dark-blue;
        }
    }
}

.templates_card_img {
    margin-bottom: 18px;
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>