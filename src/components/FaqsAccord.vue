<template>
    <section class="faqs">
            <div class="container">
                <div class="faqs_flex">
                    <div class="faqs_descr">
                        <h3>Frequently asked questions</h3>
                        <router-link to="contact">Contact us for more info</router-link>
                    </div>
                    <ul class="faqs_accord">
                        <h4 class="faqs_heading"><span class="faqs_number">01</span>How much time does it take?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">02</span>What is your class naming convention?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">03</span>How do you communicate?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">04</span>I have a bigger project. Can you handle it?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <h4 class="faqs_heading"><span class="faqs_number">05</span>What is your class naming convention?</h4>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>

@import '@/assets/css/vars.scss';

.faqs {
padding: 128px 0;
}

.faqs_flex {
    display: flex;
    gap: 95px;
}

.faqs_descr {
    h3 {
        color: $dark-blue;
        margin-bottom: 16px;
    }
    a {
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        text-align: center;
        color: $royal-blue;
        opacity: 0.8;
        transition: all .2s ease-out;
        &:hover {
            color: #000;
        }
    }
}

.faqs_number {
    margin-right: 56px;
}

.faqs_accord {
    .faqs_heading {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: $dark-blue;
    }
    .faqs_number {
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: $royal-blue;
    }
    p {
        padding-left: 63px;
        font-weight: 500;
        font-size: 18px;
        line-height: 32px;
        color: $dark-blue;
        opacity: 0.8;
    }
}

@media screen and (max-width: 1000px) {
    .faqs {
        padding: 60px 0;
    }
    .faqs_flex {
        flex-wrap: wrap;
        gap: 45px;
    }
}

</style>

<script>
export default {
    name: 'FaqsAccord'
}
</script>