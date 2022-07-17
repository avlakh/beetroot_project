<template>
        <div class="big_card_img">
            <router-link to="#"><img :src="require('@/assets/images/works/templates/'+img)" :alt="imgAlt"></router-link>
        </div>
        <div class="big_card_overlay">
            <h6>{{heading}}</h6>
            <p>{{descr}}</p>
            <router-link to="#" class="arrow_btn">View project</router-link>
        </div>
</template>

<script>
export default {
    name: 'OurProjects',
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
        descr: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';

.big_card_img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    img {
        height: 100%;
        width: 100%;
    }
}
.big_card_overlay {
    position: absolute;
    height: 100%;
    width: 47%;
    top: 0;
    left: -47%;
    opacity: 0;
    background: linear-gradient(329.39deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%);
    padding: 25% 4% 0 6%;
    transition: all .4s ease;
    .arrow_btn {
        display: inline-block;
    }
    h6 {
        font-weight: 600;
        color: white;
        margin-bottom: 16px;
    }
    p {
        font-weight: 500;
        line-height: 28px;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 40px;
    }
}
.our_projects_big_card:hover .big_card_overlay {
    left: 0;
    opacity: 1;
}

@media screen and (max-width: 800px) {
    .big_card_overlay {
        padding: 10% 4% 0 10%;
    }
}

@media screen and (max-width: 600px) {
    .big_card_overlay {
        padding: 5% 4% 0 10%;
        p {
        display: none;
        }
    }
}

@media screen and (max-width: 600px) {
    .big_card_overlay {
        display: none;
    }
}

</style>