<template>
    <main>
        <section class="pricing_plans container">
            <div class="pricing_plans_text">
                <h2>Our Pricing Plans</h2>
                <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </div>
            <div class="pricing_cards_flex">
                <!-- 1 -->
                <template v-for="(item, i) in pricingCardsArr">
                    <pricing-cards :key="i" v-if="i === 0" :headingPrice="item.headingPrice" :headingPriceDescr="item.headingPriceDescr" :headingProject="item.headingProject" :projectParagraph="item.projectParagraph" :svgActive="item.svgActive" :svgActiveAlt="item.svgActiveAlt" :svgInactive="item.svgInactive" :svgInactiveAlt="item.svgInactiveAlt" :featureOne="item.featureOne" :featureTwo="item.featureTwo" :featureThree="item.featureThree" :featureFour="item.featureFour" :featureFive="item.featureFive" :featureSix="item.featureSix" :features_na="item.features_na"/>
                </template>
                <!-- 2 -->
                <template v-for="(item, i) in pricingCardsArr">
                    <pricing-cards :key="i" v-if="i === 1" :headingPrice="item.headingPrice" :headingPriceDescr="item.headingPriceDescr" :headingProject="item.headingProject" :projectParagraph="item.projectParagraph" :svgActive="item.svgActive" :svgActiveAlt="item.svgActiveAlt" :svgInactive="item.svgInactive" :svgInactiveAlt="item.svgInactiveAlt" :featureOne="item.featureOne" :featureTwo="item.featureTwo" :featureThree="item.featureThree" :featureFour="item.featureFour" :featureFive="item.featureFive" :featureSix="item.featureSix"/>
                </template>
                <!-- 3 -->
                <template v-for="(item, i) in pricingCardsArr">
                    <pricing-cards :key="i" v-if="i === 2" :headingPrice="item.headingPrice" :headingPriceDescr="item.headingPriceDescr" :headingProject="item.headingProject" :projectParagraph="item.projectParagraph" :svgActive="item.svgActive" :svgActiveAlt="item.svgActiveAlt" :svgInactive="item.svgInactive" :svgInactiveAlt="item.svgInactiveAlt" :featureOne="item.featureOne" :featureTwo="item.featureTwo" :featureThree="item.featureThree" :featureFour="item.featureFour" :featureFive="item.featureFive" :featureSix="item.featureSix"/>
                </template>
            </div>           
        </section>
        <faqs-accord/>
    </main>
</template>

<script>

import axios from 'axios'
import PricingCards from '@/components/PricingCards.vue'
import FaqsAccord from '@/components/FaqsAccord.vue'

export default {
    name: 'PricingView',
    components: {
        FaqsAccord,
        PricingCards
    },
    data() {
        return {
            pricingCardsArr: []
        }
    },
    created () {
        axios 
            .get('../data/PricingCards.json')
            .then(resp=>{
                this.pricingCardsArr = resp.data;
            })
    }
}
</script>

<style lang="scss" scoped>
    .pricing_plans {
    padding: 220px 0 128px;
    }

    .pricing_plans_text {
        width: 45%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 64px;
        h2 {
            margin-bottom: 16px;
        }
    }

    .pricing_cards_flex {
        display: flex;
        gap: 32px;
    }

    @media screen and (max-width: 1200px) {
        .pricing_plans {
            padding: 128px 0 64px;
        }
        .pricing_plans_text {
            width: 100%;
        }
        .pricing_cards_flex {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>