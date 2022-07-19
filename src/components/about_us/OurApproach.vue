<template>
    <div class="our_approach_flex">
        <div class="our_approach_descr">
            <h4>{{item.headingSm}}</h4>
            <h2>{{item.headingBg}}</h2>
            <p>{{item.paragraph}}</p>
        </div>
        <div class="our_approach_img">
            <img :src="require('@/assets/images/'+item.img)" :alt="item.imgAlt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurApproach',
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/vars.scss';
.our_approach_flex {
    display: flex;
    gap: 140px;
    &:first-of-type {
        margin-bottom: 78px;
    }
}

.our_approach_descr {
    align-self: center;
    h4 {
        font-size: 16px;
        line-height: 28px;
        color: $dark-blue;
    }
}

.our_approach_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>