<template>
    <div class="features_users">
            <div class="features_users_numbers">
                <h3>{{item.partnersNums}}</h3>
                <h5>{{item.partnersDescr}}</h5>
            </div>
            <div class="features_users_logos">
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+item.logos[0].img)" :alt="item.logos[0].alt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+item.logos[1].img)" :alt="item.logos[1].alt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+item.logos[2].img)" :alt="item.logos[2].alt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+item.logos[3].img)" :alt="item.logos[3].alt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+item.logos[4].img)" :alt="item.logos[4].alt"></a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'FeaturePartners',
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '@/assets/css/vars.scss';
    .features_users {
        display: flex;
        gap: 89px;
        align-items: center;
    }

    .features_users_numbers h5 {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: $dark-blue;
        opacity: 0.7;
    }

    .features_users_logos {
        display: flex;
        gap: 70px;
        img {
            width: 100%;
            height: 100%;
            opacity: 0.7;
            &:hover {
                opacity: 1;
            }
        }
    }

    @media screen and (max-width: 1200px) {
    .features_users {
        flex-direction: column;
    }
    @media screen and (max-width: 1000px) {
        .features_users {
        gap: 60px;
        }
        .features_users_logos {
            flex-wrap: wrap;
            gap: 25px;
        }
    }
}
</style>