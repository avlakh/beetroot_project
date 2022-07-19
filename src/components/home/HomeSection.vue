<template>
    <section class="hero_section">
            <div class="container">
                <div class="hero_text">
                    <div class="hero_text_body">
                        <h1>{{heading}}</h1>
                        <p>{{paragraph}}</p>
                    </div>
                    <div class="hero_btn">
                        
                        <router-link :to="roundBtnLink" class="round_btn">{{roundBtnText}}</router-link>
                        <template v-if="arrowBtnStatus">
                            <router-link to="pricing" class="arrow_btn">View Pricing</router-link>
                        </template>
                        
                    </div>
                </div>
                <div class="hero_img">
                    <img :src="require('@/assets/images/'+heroImg)" :alt="heroImgAlt">
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'HomeSection',
    props: {
        heading: {
            type: String,
            default: ''
        },
        paragraph: {
            type: String,
            default: ''
        },
        heroImg: {
            type: String,
            default: ''
        },
        heroImgAlt: {
            type: String,
            default: ''
        },
        arrowBtnStatus: {
            type: Boolean,
            default: false
        },
        roundBtnText: {
            type: String,
            default: ''
        },
        roundBtnLink: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

   @import '@/assets/css/vars.scss';

    .hero_section {
    background-color: $tint-blue;
    .container {
        display: flex;
        justify-content: space-between;
        gap: 80px;
        padding: 218px 0 128px;
    }
}

.hero_text {
    width: 50%;
}

.hero_text_body {
    margin-bottom: 48px;
    h1 {
        color: white;
        margin-bottom: 24px;
    }
    p {
        font-weight: 500;
        line-height: 28px;
        color: rgba($color: #fff, $alpha: 0.7);
    }
}

.hero_btn {
    display: flex;
    align-items: center;
    gap: 40px;
}


.round_btn {
    display: block;
    background-color: #FCD980;
    border-radius: 41px;
    padding: 16px 56px;
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: #1B1C2B;
    &:hover {
        background-color: #FDE4A6;
    }
}

.hero_img {
    height: 100%;
    width: 50%;
    object-fit: cover;
    padding-top: 23px;
    img {
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 1000px) {
    .hero_text {
        width: 100%;
    }
    .hero_img {
        display: none;
    }
}

@media screen and (max-width: 600px) {
.hero_btn {
        flex-direction: column;
        align-items: flex-start;
    }
}

</style>