<template>
    <div class="templates_card">
        <div class="templates_card_img">
            <router-link :to="{name: 'works-project', params:{slug: item.slug}}">
                <img :src="require('@/assets/images/works/templates/'+item.img)" :alt="item.imgAlt">
            </router-link>
        </div>
        <h3>{{item.heading}}</h3>
        <p>{{item.descr}}</p>
        <router-link :to="{name: 'works-project', params:{slug: item.slug}}" class="arrow_btn">View Portfolio</router-link>
    </div>
</template>

<script>
export default {
    name: 'WorksCard',
    props: {
        item: {
            type: Object
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