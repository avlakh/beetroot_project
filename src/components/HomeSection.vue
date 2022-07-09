<template>
    <section class="hero_section">
            <div class="container">
                <div class="hero_text">
                    <div class="hero_text_body">
                        <h1>Building stellar websites for early startups</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div class="hero_btn">
                        <router-link to="works" class="round_btn">View our work</router-link>
                        <router-link to="pricing" class="arrow_btn">View Pricing</router-link>
                    </div>
                </div>
                <div class="hero_img">
                    <img src="@/assets/images/home/hero_sec_img.svg" alt="finsweet_hero_image">
                </div>
            </div>
        </section>
</template>

<style lang="scss" scoped>

    $royal-blue: #2405F2;
    $dark-blue: #282938;
    $grey: #F4F6FC;
    $yellow: #FCD980;
    $tint-blue: #1C1E53;
    $accent: #EEF4FA;
    $light-yellow: rgba(252, 217, 128, 0.1);

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