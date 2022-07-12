<template>
    <div class="features_users">
            <div class="features_users_numbers">
                <h3>{{partnersNums}}</h3>
                <h5>{{partnersDescr}}</h5>
            </div>
            <div class="features_users_logos">
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+partnersLogoOne)" :alt="partnersLogoOneAlt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+partnersLogoTwo)" :alt="partnersLogoTwoAlt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+partnersLogoThree)" :alt="partnersLogoThreeAlt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+partnersLogoFour)" :alt="partnersLogoFourAlt"></a>
                <a href="#"><img :src="require('@/assets/images/about_us/features_users/'+partnersLogoFive)" :alt="partnersLogoFiveAlt"></a>
            </div>
        </div>
</template>

<script>
export default {
    name: 'FeaturePartners',
    props: {
        partnersNums: {
            type: String,
            default: ''
        },
        partnersDescr: {
            type: String,
            default: ''
        },
        partnersLogoOne: {
            type: String,
            default: ''
        },
        partnersLogoOneAlt: {
            type: String,
            default: ''
        },
        partnersLogoTwo: {
            type: String,
            default: ''
        },
        partnersLogoTwoAlt: {
            type: String,
            default: ''
        },
        partnersLogoThree: {
            type: String,
            default: ''
        },
        partnersLogoThreeAlt: {
            type: String,
            default: ''
        },
        partnersLogoFour: {
            type: String,
            default: ''
        },
        partnersLogoFourAlt: {
            type: String,
            default: ''
        },
        partnersLogoFive: {
            type: String,
            default: ''
        },
        partnersLogoFiveAlt: {
            type: String,
            default: ''
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
</style>