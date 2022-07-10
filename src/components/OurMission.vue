<template>
    <div class="our_mission_flex">
        <div class="our_mission_descr">
            <h4>{{headingSm}}</h4>
            <h2>{{headingBg}}</h2>
            <p>{{paragraph}}</p>
        </div>
        <div class="our_mission_img">
            <img :src="require('@/assets/images/'+img)" :alt="imgAlt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurMission',
    props: {
        img: {
            type: String,
            default: ''
        },
        imgAlt: {
            type: String,
            default: ''
        },
        headingBg: {
            type: String,
            default: ''
        },
        headingSm: {
            type: String,
            default: '',
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
.our_mission_flex {
    display: flex;
    gap: 140px;
    &:first-of-type {
        margin-bottom: 78px;
    }
}

.our_mission_descr {
    align-self: center;
    h4 {
        font-size: 16px;
        line-height: 28px;
        color: $dark-blue;
    }
}

.our_mission_img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>