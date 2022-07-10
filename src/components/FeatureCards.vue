<template>
    <section class="features">
            <div class="container">
                <div class="features_text">
                    <h6>Features</h6>
                    <h2>Design that solves problems, one product at a time</h2>
                </div>
                <div class="features_grid">
                    <div class="features_card">
                        <img src="@/assets/images/home/features/client_first.svg" alt="client_first">
                        <h6>Uses Client First</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div class="features_card">
                        <img src="@/assets/images/home/features/revision.svg" alt="two_free_revision_round">
                        <h6>Two Free Revision Round</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div class="features_card">
                        <img src="@/assets/images/home/features/template.svg" alt="template_customization">
                        <h6>Template Customization</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div class="features_card">
                        <img src="@/assets/images/home/features/support.svg" alt="24_7_support">
                        <h6>24/7 Support</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div class="features_card">
                        <img src="@/assets/images/home/features/delivery.svg" alt="quick_delivery">
                        <h6>Quick Delivery</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                    <div class="features_card">
                        <img src="@/assets/images/home/features/approach.svg" alt="hands_on_approach">
                        <h6>Hands-on approach</h6>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.</p>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'FeatureCards'
}
</script>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';

.features {
    background-color: $grey;
    padding: 120px 0 128px;
}

.features_text {
    padding: 0 310px;
    h6 {
        font-weight: 500;
        font-size: 16px;
        line-height: 28px;
        text-align: center;
        margin-bottom: 12px;
    }
    h2 {
        text-align: center;
        margin-bottom: 47px;
    }
}

.features_grid {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr;
    gap: 23px 32px;
    .features_card {
        background-color: #fff;
        padding-top: 48px;
        padding-left: 48px;
        padding-bottom: 48px;
        padding-right: 32px;
        img {
            padding-bottom: 25px;
        }
        h6 {
            padding-bottom: 12px;
        }
        p {
            line-height: 28px;
            color: rgba(40, 41, 56, 0.7)
        }
    }
}

@media screen and (max-width: 1200px) {
    .features {
        padding: 60px 0 64px;
    }
    .features_text {
        padding: 0px 150px;
    }
    .features_grid {
        grid-template: 1fr 1fr 1fr / 1fr 1fr;
    }
}

@media screen and (max-width: 1000px) {
    .features_text {
        padding: 0px 75px;
    }
}

@media screen and (max-width: 700px) {
    .features_grid {
        grid-template: 1fr 1fr 1fr 1fr / 1fr;
    }
}

@media screen and (max-width: 600px) {
    .features_text {
        padding: 0px;
    }
}

</style>