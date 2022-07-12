<template>
    <div class="pricing_card">
        <div class="pricing_card_wrap">
            <div class="card_price">
                <h3>{{headingPrice}}</h3>
                <h4 class="hover_yellow">{{headingPriceDescr}}</h4>
            </div>
            <h6>{{headingProject}}</h6>
            <p>{{projectParagraph}}</p>
            <ul class="pricing_card_features">
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgActiveAlt"></span>
                    <span>{{featureOne}}</span>
                </li>
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgActiveAlt"></span>
                    <span>{{featureTwo}}</span>
                </li>
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgActiveAlt"></span>
                    <span>{{featureThree}}</span>
                </li>
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgInactiveAlt"></span>
                    <span :class="{features_na}">{{featureFour}}</span>
                </li>
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgInactiveAlt"></span>
                    <span :class="{features_na}">{{featureFive}}</span>
                </li>
                <li>
                    <span><img :src="require('@/assets/images/pricing/'+svgActive)" :alt="svgInactiveAlt"></span>
                    <span :class="{features_na}">{{featureSix}}</span>
                </li>
            </ul>
        </div>
        <router-link to="contact" class="btn">Get started</router-link>
    </div>
</template>

<script>

export default {
    name: 'PricingCards',
    props: {
        headingPrice: {
            type: String,
            default: ''
        },
        headingPriceDescr: {
            type: String,
            default: ''
        },
        headingProject: {
            type: String,
            default: ''
        },
        projectParagraph: {
            type: String,
            default: '',
        },
        svgActive: {
            type: String,
            default: ''
        },
        svgActiveAlt: {
            type: String,
            default: ''
        },
        svgInactive: {
            type: String,
            default: ''
        },
        svgInactiveAlt: {
            type: String,
            default: ''
        },
        featureOne: {
            type: String,
            default: ''
        },
        featureTwo: {
            type: String,
            default: ''
        },
        featureThree: {
            type: String,
            default: '',
        },
        featureFour: {
            type: String,
            default: ''
        },
        featureFive: {
            type: String,
            default: '',
        },
        featureSix: {
            type: String,
            default: ''
        },
        features_na: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/vars.scss';

.pricing_card {
    padding-bottom: 62px;
    background-color: $grey;
    border-radius: 12px;
    transition: all .2s ease;
    h6 {
        margin-bottom: 8px;
    }
    p {
        margin-bottom: 50px;
    }
    &:hover {
        background-color: $tint-blue;
        color: #fff;
    }
    &:hover .hover_yellow {
        color: $yellow;
    }
    &:hover .btn {
        background-color: $yellow;
        color: $dark-blue;
    }
    &:hover .btn:hover {
        background-color: #FDE4A6;
    }
}

.pricing_card_wrap {
    padding: 64px 76px 0 48px;
}

.card_price {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 24px;
    h4 {
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: $royal-blue;
    }
}

.pricing_card_features {
    margin-bottom: 79px;
    li {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-bottom: 24px;
        &:last-of-type {
            margin-bottom: 0px;
        }
        .features_na {
            opacity: 0.7;
        }
    }
}

.btn {
    display: block;
    margin: 0 auto;
    padding: 15px 51px;
    background-color: $dark-blue;
    text-align: center;
    border-radius: 41px;
    max-width: 254px;
    font-family: 'Manrope';
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: $grey;
}

.p_complex {
    margin-bottom: 44px;
}

.ul_complex {
    margin-bottom: 60px;
    li {
        margin-bottom: 18px;
        &:last-of-type {
            margin-bottom: 0px;
        }
    }
}


@media screen and (max-width: 1200px) {
    .pricing_card {
        text-align: center;
    }
    .pricing_card_wrap {
        padding: 32px 36px 0 24px; 
    }
}
</style>